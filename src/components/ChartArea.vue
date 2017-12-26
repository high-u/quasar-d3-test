<template>
  <div>
    <q-card inline style="width: 800px">
      <q-card-title>
        Chart
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <svg id="chart">
        </svg>
      </q-card-main>
    </q-card>
  </div>
</template>

<script>
import * as d3 from 'd3'
import { mapGetters } from 'vuex'
import Ajv from 'ajv'
import isJson from '../utils'
import { SCHEMA_CHART } from '../schema'
import {
  QCard, QCardTitle, QCardSeparator, QCardMain, QCardActions
} from 'quasar'

export default {
  components: {
    QCard,
    QCardTitle,
    QCardSeparator,
    QCardMain,
    QCardActions
  },
  computed: {
    ...mapGetters({
      chartData: 'getChartData'
    })
  },
  mounted () {
    console.log('mounted')
    this.renderAP()
  },
  watch: {
    chartData: function () {
      console.log('hoge')
      this.renderAP()
    },
    deep: true
  },
  methods: {
    renderAP () {
      if (!isJson(this.chartData)) {
        console.log('Invalid JSON.')
      }
      else {
        let margin = { top: 30, right: 40, bottom: 30, left: 40 }
        let width = 760 - margin.left - margin.right
        let height = 400 - margin.top - margin.bottom
        let svg = d3.select('svg#chart')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)

        svg.selectAll('g')
          .remove()
        svg.selectAll('path')
          .remove()

        let schema = SCHEMA_CHART
        let ajv = new Ajv()
        let validate = ajv.compile(schema)
        let valid = validate(JSON.parse(this.chartData))
        if (!valid) {
          console.log('Invalid Chart JSON.')
          console.log(validate.errors)
        }
        else { // Valid Chart JSON
          if (Object.keys(this.chartData).length !== 0) {
            let dataset = JSON.parse(this.chartData)

            let timeparser = d3.timeParse('%Y-%m-%d')
            dataset = dataset.map(function (d) {
              return { label: timeparser(d.label), count: d.count }
            })

            // Scale (X Axis)
            let xScale = d3.scaleTime()
              .domain([d3.min(dataset.map(function (d) { return d.label })), d3.max(dataset.map(function (d) { return d.label }))])
              .range([0, width])

            // Scale (Y Axis)
            let yScale = d3.scaleLinear()
              .domain([0, d3.max(dataset, function (d) { return d.count })])
              .range([height, 0])

            // Axis Position and Format
            let xAxis = d3.axisBottom(xScale)
              .tickFormat(d3.timeFormat('%m/%d'))
            let yAxis = d3.axisLeft(yScale)

            // line(dataset) --> M0,297.5L234.22222222222223,255L445.77777777777777,170L680,0
            let line = d3.line()
              .x(function (d) { return xScale(d.label) })
              .y(function (d) { return yScale(d.count) })
              .curve(d3.curveLinear)

            // X Axis
            svg.append('g') // create a <g> element
              .attr('transform', 'translate(' + margin.right + ',' + (height + margin.top) + ')')
              .call(xAxis) // let the axis do its thing

            // Y Axis
            svg.append('g')
              .attr('transform', 'translate(' + margin.right + ',' + margin.top + ')')
              .call(yAxis)

            // Path
            svg.append('path')
              .attr('transform', 'translate(' + margin.right + ', ' + margin.top + ')')
              .datum(dataset)
              .attr('class', 'line')
              .attr('d', line(dataset))
              .attr('fill', 'none')
              .attr('stroke', 'steelblue')
              .attr('stroke-width', 2)
          }
        }
      }
    }
  }
}
</script>

<style>
</style>
