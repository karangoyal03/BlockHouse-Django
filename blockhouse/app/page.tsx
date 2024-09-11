import CandleStick from "./components/CandleStick";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col mt-4 items-center font-primary justify-center">
      <h1>Karan Goyal</h1>
      <Link href={"mailto:goyalkaran31@gmail.com"} className="underline">goyalkaran31@gmail.com</Link>
      <div className="items-center justify-center py-16 gap-4 px-4 flex flex-wrap">
        <BarChart />
        <CandleStick />
        <LineChart />
        <PieChart />
      </div>
    </div>
  );
}
