<template>
  <div id="chart">
   <h4>Unit wise Progress</h4>
    <BarChart v-bind="barChartProps" />
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import { BarChart, useBarChart } from 'vue-chart-3';
import { ref, computed, defineComponent,PropType } from 'vue';
//import { shuffle } from 'lodash';

Chart.register(...registerables);

export default defineComponent({
  name: 'App',
  components: {
    BarChart,
  },
  props: {
    barc_chart_data: [Object,Array]
  },
  setup(props) {
    const mydata = props.barc_chart_data;

    const myarray = [];

    const data = ref(mydata);

    const chartData = computed(() => ({
      labels: ['Unit1', 'Unit-2', 'Unit-3', 'Unit-4', 'Unit-5', 'Unit-6', 'Unit-7', 'Unit-8'],
      datasets: [
        {
          data: data.value,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED','#0079AF','#123E6B','#123E6B'],
        },
      ],
    }));

    const { barChartProps, barChartRef } = useBarChart({
      chartData,
    });

    return { barChartProps, barChartRef , mydata,myarray };
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
