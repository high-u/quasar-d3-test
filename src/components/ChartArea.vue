<template>
  <div>
    <svg id="chart">
    </svg>
  </div>
</template>

<script>
import * as d3 from 'd3'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getChartData: 'getChartData'
    })
  },
  data () {
    return {}
  },
  mounted () {
    this.renderAP()
  },
  methods: {
    renderAP (e) {
      /* data by getter */
      let dataset = this.getChartData

      var margin = { top: 20, right: 40, bottom: 100, left: 100 }
      var width = 960 - margin.left - margin.right
      var height = 400 - margin.top - margin.bottom

      var svg = d3.select('svg#chart')
        .attr('width', width + margin.left + margin.right) // set its dimentions
        .attr('height', height + margin.top + margin.bottom)

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
        .tickFormat(d3.timeFormat('%m/%e'))
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
</script>

<style>
</style>
