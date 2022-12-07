<template>
  <div style="width:100%">
     <h4>Module Wise Progress</h4>
    <div style="display: flex; justify-content: center">
    </div>
    <LineChart v-bind="lineChartProps" />
  </div>
</template>

<script>
import { computed } from "vue";
import { ref, LineChart, useLineChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  name: "Home",
  components: { LineChart },
  props: {
    reading_data: [Object,Array],
    listening_data: [Object,Array],
    grammar_data: [Object,Array],
    vocabulary_data: [Object,Array],
  },
  setup(props) {

    const reading_data = props.reading_data;
    const listening_data = props.listening_data;
    const grammar_data = props.grammar_data;
    const vocabulary_data = props.vocabulary_data;

    const getData = computed(() => ({
      labels: ['Unit-1', 'Unit-2', 'Unit-3', 'Unit-4', 'Unit-5','Unit-6','Unit-7','Unit-8'],
      datasets: [
        {
          label: "Reading",
          data: reading_data,
          fill: false,
          borderColor: "#4bc0c0",
        },
        {
          label: "Listening",
          data: listening_data,
          fill: false,
          borderColor: "#C32D0D",
        },
        {
          label: "Grammar",
          data: grammar_data,
          fill: false,
          borderColor: "#2C78DF",
        },
        {
          label: "Vocabulary",
          data: vocabulary_data,
          fill: false,
          borderColor: "#A81BEF",
        },


      ],
    }));


    const { lineChartProps } = useLineChart({
      chartData: getData,
    });

    return {
      getData,
      lineChartProps,
      reading_data
    };
  },
};
</script>

<style>

</style>
