"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import Card from "./Card";
import ErrorHeader from "./ErrorHeader";

// Register the ArcElement component for pie charts
ChartJS.register(ArcElement, Title, Tooltip, Legend);

const BASE_URL = "http://127.0.0.1:8000/api";

interface PieChartData {
  labels: string[];
  data: number[];
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem: any) {
          return `${tooltipItem.label}: ${tooltipItem.raw}`;
        },
      },
    },
  },
};

function PieChart() {
  const [chartData, setChartData] = useState<PieChartData>({
    labels: [],
    data: [],
  });
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/pie-chart-data/`);
      const data: PieChartData = response.data;

      // Generate background colors based on the number of data points
      const backgroundColors = data.labels.map((_, index) => {
        const colors = [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF61A6",
          "#6C5B7B",
          "#000000",
          "#FFFFFF",
          "#B5B5B5",
          "#00BCD4",
          "#D500F9",
        ];
        return colors[index % colors.length]; // Cycle through colors if more data points
      });

      setChartData({
        labels: data.labels || [],
        data: data.data || [],
      });
    } catch (error) {
      setError("Cannot fetch details for Pie Chart");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const chartDataFormatted = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Dynamic Data",
        data: chartData.data,
        backgroundColor: chartData.labels.map((_, index) => {
          const colors = [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
            "#FF9F40",
            "#FF61A6",
            "#6C5B7B",
            "#000000",
            "#FFFFFF",
            "#B5B5B5",
            "#00BCD4",
            "#D500F9",
          ];
          return colors[index % colors.length];
        }),
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Card className="w-1/3 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-medium">Pie Chart</h1>
      <Pie data={chartDataFormatted} options={options} />
      {error && <ErrorHeader error={error} />}
    </Card>
  );
}

export default PieChart;
