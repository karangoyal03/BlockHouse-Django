"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Card from "./Card";
import ErrorHeader from "./ErrorHeader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartData {
  labels: string[];
  data: number[];
}

const BASE_URL = "http://127.0.0.1:8000/api";

function BarChart() {
  const [data, setData] = useState<BarChartData | null>(null);
  const [error , setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/bar-chart-data`);
      setData(response.data);
    } catch (err: unknown ) {
      setError("Cannot fetch details for Bar Chart");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const chartData = {
    labels: data?.labels || [],
    datasets: [
      {
        label: "Product Sales",
        data: data?.data || [],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Card className="w-2/3 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-medium">Bar Chart</h1>
      {data && (
        <>
          <Bar data={chartData} options={options} />
        </>
     )}
     {
      error && (
        <ErrorHeader error={error} />
      )
     }
    </Card>
  );
}

export default BarChart;
