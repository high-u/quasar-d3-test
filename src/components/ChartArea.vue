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
    console.log('mounted ------------->')
    this.renderAP()
  },
  watch: {
    chartData: function () {
      console.log('hoge')
      this.renderAP()
    },
    deep: true
    /* next tick */
  },
  methods: {
    renderAP () {
      /* data by getter */
      console.log('------>')

      if (!isJson(this.chartData)) {
        console.log('Invalid JSON. DataArea set.')
      }
      else {
        var margin = { top: 30, right: 40, bottom: 30, left: 40 }
        var width = 760 - margin.left - margin.right
        var height = 400 - margin.top - margin.bottom
        var svg = d3.select('svg#chart')
          .attr('width', width + margin.left + margin.right) // set its dimentions
          .attr('height', height + margin.top + margin.bottom)

        svg.selectAll('g')
          .remove()
        svg.selectAll('path')
          .remove()

        var schema = SCHEMA_CHART
        var ajv = new Ajv()
        var validate = ajv.compile(schema)
        var valid = validate(JSON.parse(this.chartData))
        if (!valid) {
          console.log('invalid')
          console.log(validate.errors)
        }
        else {
          console.log(Object.keys(this.chartData).length)
          if (Object.keys(this.chartData).length !== 0) {
            var dataset = JSON.parse(this.chartData)

            var timeparser = d3.timeParse('%Y-%m-%d')
            dataset = dataset.map(function (d) {
              return { label: timeparser(d.label), count: d.count }
            })

            var xScale = d3.scaleTime()
              .domain([d3.min(dataset.map(function (d) { return d.label })), d3.max(dataset.map(function (d) { return d.label }))])
              .range([0, width])

            var yScale = d3.scaleLinear()
              .domain([0, d3.max(dataset, function (d) { return d.count })])
              .range([height, 0]) // Seems backwards because SVG is y-down

            /* x is the d3.scaleTime() */
            var xAxis = d3.axisBottom(xScale)
              .tickFormat(d3.timeFormat('%m/%d'))
            /* .ticks(4) // specify the number of ticks */
            var yAxis = d3.axisLeft(yScale)
            /* .tickFormat(d3.format('$,d')) */
            /* .ticks(5) */

            var line = d3.line()
              .x(function (d) { return xScale(d.label) })
              .y(function (d) { return yScale(d.count) })
              .curve(d3.curveLinear)

            /* X axis */
            svg.append('g') // create a <g> element
              .attr('transform', 'translate(' + margin.right + ',' + (height + margin.top) + ')')
              .call(xAxis) // let the axis do its thing

            /* Y axis */
            svg.append('g')
              .attr('transform', 'translate(' + margin.right + ',' + margin.top + ')')
              .call(yAxis)

            /* Path */
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
