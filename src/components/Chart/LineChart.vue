<script>
import { Line } from 'vue-chartjs'
export default {
    extends: Line,
    props: ['labels','data','stepsize'],

    data() {
        return {
            chartData: {
                labels: this.labels,
                datasets: [{
                    label: 'Bar Chart',
                    borderColor: 'rgb(75, 192, 192)',
                    fill: false,
                    data: this.data
                }]
            },
            options: {
              animations: {
                tension: {
                  duration: 1000,
                  easing: 'linear',
                  from: 1,
                  to: 0,
                  loop: true
                }
              },
              scales: {
                xAxes: [{
                  stacked: false,
                  ticks: {

                  },
                }],
                yAxes: [{
                  stacked: false,
                  ticks: {
                    stepSize: this.stepsize // <----- This prop sets the stepSize
                  }
                }]
              },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted() {
        this.renderChart(this.chartData, this.options)
    }
}
</script>
