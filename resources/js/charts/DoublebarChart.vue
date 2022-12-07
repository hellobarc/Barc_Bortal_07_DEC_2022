<template>
  <div id="chart">
   <h4>Learning Progress Comparison</h4>
    <BarChart v-bind="barChartProps" />
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import { BarChart, useBarChart } from 'vue-chart-3';
import { ref, computed, defineComponent } from 'vue';
//import { shuffle } from 'lodash';

Chart.register(...registerables);

export default defineComponent({
  name: 'App',
  components: {
    BarChart,
  },
  setup() {
    const data_class = ref([30, 40, 60, 70, 50, 58, 45, 89, 58, 85]);
    const data_online = ref([20, 40, 60, 70, 50, 58, 45, 89, 58, 85]);

    const chartData = computed(() => ({
      labels: ['Unit1', 'Unit-2', 'Unit-3', 'Unit-4', 'Unit-5', 'Unit-6', 'Unit-7', 'Unit-8'],
      datasets: [
        {
          data: data_class.value,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED','#0079AF','#123E6B','#123E6B',],
        },
        {
          data: data_online.value,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED','#0079AF','#123E6B','#123E6B',],
        },
      ],
    }));

    const { barChartProps, barChartRef } = useBarChart({
      chartData,
    });


    return { barChartProps, barChartRef };
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
