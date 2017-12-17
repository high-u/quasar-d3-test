<template>
  <div>
    <svg width="350" height="160">
      <!-- 60px x 10px margin -->
      <g class="layer" transform="translate(60,10)">
        <!-- cx = 270px * ($X / 3)
                    ^      ^   ^
        width of graph  x-value max(x)

              cy = 120px - (($Y / 80) * 120px)
                    ^       ^     ^       ^
          top of graph   y-value  max(y)  scale -->
        <circle r="5" cx="0"   cy="105" />
        <circle r="5" cx="90"  cy="90"  />
        <circle r="5" cx="180" cy="60"  />
        <circle r="5" cx="270" cy="0"   />

        <g class="y axis">
          <line x1="0" y1="0" x2="0" y2="120" />
          <text x="-40" y="105" dy="5">$10</text>
          <text x="-40" y="0"   dy="5">$80</text>
        </g>
        <g class="x axis" transform="translate(0, 120)">
          <line x1="0" y1="0" x2="270" y2="0" />
          <text x="-30"   y="20">January 2014</text>
          <text x="240" y="20">April</text>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import * as d3 from 'd3'
export default {
  data () {
    return {}
  },
  beforeUpdate () {
    /* D3 描画は直ぐに開始する必要がある */
    this.renderAP()
  },
  methods: {
    renderAP (e) {
      /* data by getter */
      /* let apData = this.getMapData */

      /* attach svg TAG */
      let svg = d3.select(this.$el)
        .selectAll('svg')
        .append('div')
	      .text('Hello, world!')
    }
  }
}
</script>

<style>
</style>
