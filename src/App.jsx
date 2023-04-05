import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  barPercentage: 0.6,
  categoryPercentage: 0.5,
  // responsive: true,
  // maintainAspectRatio: true,
  scales: {
    x: {
      stacked: true,
      // grid: {
      //   display: false,
      // },
      ticks: {
        stepSize: 10,
        max: 40,
        min: 0,
      },
    },
    y: {
      stacked: true,
      ticks: {
        font: {
          weight: "bold",
        },
      },

      // grid: {
      //   display: false,
      // },
      // max: 40,
      // min: 0,
      // step: 5,
    },
  },
  title: {
    display: true,
    text: "Bar Chart Title",
  },
  plugins: {
    legend: {
      position: false,
      subtitle: {
        display: true,
        text: "Custom Chart Subtitle",
      },
    },
    datalabels: {
      display: true,
      color: "black",
      font: {
        weight: "bold",
      },
      formatter: function (value, context) {
        return value === 0 ? "" : value;
      },
      anchor: "center",
      align: "top",
      offset: function (context) {
        if (context.chart.width < 640) {
          return 4;
        }
        return 12;
      },
    },
  },
};

const labels = [
  "Fire",
  "Equipement",
  "Natural Hazards",
  "Occupancy",
  "HE / Other Factors",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [31, 2, 30, 6, 10],
      backgroundColor: "#3056ed",
      maxBarThickness: 24,
      // you can customize the below one if you want to change anything
      // borderColor: "#4a63bc",
      // barPercentage: 0.5,
      // barThickness: 26,
      // minBarLength: 2,
    },
    {
      label: "Dataset 2",
      maxBarThickness: 24,
      data: [0, 2, 0, 0, 0],
      backgroundColor: "#E83A59",
    },
    {
      label: "Dataset 3",
      data: [2, 2, 0, 9, 0],
      maxBarThickness: 24,
      backgroundColor: "#CAD5E2",
    },
    {
      label: "Dataset 4",
      data: [0, 0, 0, 0, 8],
      maxBarThickness: 24,
      backgroundColor: "#1B98F5",
    },
    {
      label: "Dataset 5",
      maxBarThickness: 24,
      data: [0, 0, 0, 0, 2],
      backgroundColor: "#EDC126",
    },
  ],
};

const Label = ({ bg, title }) => {
  return (
    <div className="flex items-center gap-2 font-semibold">
      <div
        className={`w-4 h-4 ${bg} rounded-full flex justify-center items-center`}
      />
      <p>{title}</p>
    </div>
  );
};

export default function App() {
  return (
    <div className="flex justify-center p-6 md:p-10 items-center flex-col">
      <div className="flex max-w-3xl gap-4 flex-wrap  w-full justify-start">
        <Label bg={"bg-[#3056ed]"} title={"Attained"} />
        <Label bg={"bg-[#E83A59]"} title={"Available"} />
        <Label bg={"bg-[#1B98F5]"} title={"HE Available"} />
        <Label bg={"bg-[#EDC126]"} title={"Other Available"} />
        <Label bg={"bg-[#CAD5E2]"} title={"Unavailable"} />
      </div>
      <div className="flex max-w-3xl w-full my-10 md:h-96">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
