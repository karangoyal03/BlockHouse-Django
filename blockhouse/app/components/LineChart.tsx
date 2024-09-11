"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Card from "./Card";
import ErrorHeader from "./ErrorHeader";

// Register necessary Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  PointElement,
  Tooltip,
  Legend
);

const BASE_URL = "http://127.0.0.1:8000/api";

interface LineChartData {
  labels: string[];
  data: number[];
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem: any) {
          return `Sales: ${tooltipItem.raw}`;
        },
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Products",
      },
    },
    y: {
      title: {
        display: true,
        text: "Sales",
      },
      beginAtZero: true,
    },
  },
};

function LineChart() {
  const [chartData, setChartData] = useState<LineChartData>({
    labels: [],
    data: [],
  });
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/line-chart-data/`);
      const data: LineChartData = response.data;

      setChartData({
        labels: data.labels || [],
        data: data.data || [],
      });
    } catch (error) {
      setError("Cannot fetch details for Line Chart");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const chartDataFormatted = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Sales Data",
        data: chartData.data,
        borderColor: "#42A5F5",
        backgroundColor: "rgba(66, 165, 245, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <Card className="w-2/3 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-medium">Line Chart</h1>
      <Line data={chartDataFormatted} options={options} />
      {error && <ErrorHeader error={error} />}
    </Card>
  );
}

export default LineChart;
