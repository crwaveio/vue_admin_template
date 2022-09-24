<script>
import { Doughnut } from 'vue-chartjs'
export default {

  name: "DoughnutChart",
  props: ['labels','data','colors'],
  extends: Doughnut,

  data() {
    return {
      chartData: {
        labels: this.labels,
        datasets: [{
         // pointStyle: 'circle', //['line','rectRounded','cross','crossRot','star','rect','dash'],

          data: this.data,
          backgroundColor:this.colors,
          hoverOffset: 4
        }]
      },          tooltips:{
        pointStyle: 'circle',
        cornerRadius:10,
        enabled:false,
        borderColor:'rgba(0, 0, 0, 0)',
        xAlign:'right'
      }
      ,
      options:{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            usePointStyle: true,

          },


        }

      },
      legend: {
        labels: {
          usePointStyle: true,

        },
      }
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
<style>
.chartjs-tooltip-key {
  border-radius: 5px;
  height : 5px;
  width : 5px
}
</style>
