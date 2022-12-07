<template>
  <div id="chart">
   <h4>Module Completeion</h4>
    <DoughnutChart v-bind="doughnutChartProps" />
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import {  DoughnutChart, useDoughnutChart } from 'vue-chart-3';
import { ref, computed, defineComponent } from 'vue';
//import { shuffle } from 'lodash';

Chart.register(...registerables);

export default defineComponent({
  name: 'App',
  components: {
    DoughnutChart,
  },
  setup() {
    const data = ref([30, 20, 30, 20]);

    const chartData = computed(() => ({
      labels: ['Reading', 'Listening', 'Grammar', 'Vocabulary'],
      datasets: [
        {
          data: data.value,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4'],
        },
      ],
    }));

    const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
      chartData,
    });


    return { doughnutChartProps, doughnutChartRef };
  },
});
</script>

<style>
#chart {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 1px;
}
</style>
