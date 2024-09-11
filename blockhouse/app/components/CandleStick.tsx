// pages/CandleStick.tsx
"use client";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import Card from "./Card";
import ErrorHeader from "./ErrorHeader";

interface CandleStickData {
  x: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

const BASE_URL = "http://127.0.0.1:8000/api";

function CandleStick() {
  const [data, setData] = useState<CandleStickData[]>([]);
  const [error, setError] = useState<string | null>(null);
  async function fetchData() {
    try {
      const response = await axios.get(`${BASE_URL}/candlestick-data/`);
      setData(response.data.data);
    } catch (error) {
      setError("Cannot fetch details for Candle Stick Chart");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const chartData = [
    ["Date", "Open", "High", "Low", "Close"],
    ...data.map((item) => [item.x, item.open, item.high, item.low, item.close]),
  ];

  const options = {
    legend: "none",
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#a52714" },
      risingColor: { strokeWidth: 0, fill: "#0f9d58" },
    },
    hAxis: {
      title: "Date",
      format: "M/d/yy",
      gridlines: { count: 15 },
    },
    vAxis: {
      title: "Price",
    },
  };

  return (
    <Card className="w-2/3 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-medium">Candle Stick Chart</h1>
      {data.length > 0 && (
        <Chart
          chartType="CandlestickChart"
          width="100%"
          height="500px"
          data={chartData}
          options={options}
        />
      )}
      {error && <ErrorHeader error={error} />}
    </Card>
  );
}

export default CandleStick;
