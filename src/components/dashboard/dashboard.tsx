import { LinearChart } from "./Linear-chart";
import { MultipleBarChart } from "./Bar-chart";
import { useDeviceInteractions } from "@/hooks/useDeviceInteractions";
import { RadialChart } from "./Radial-chart";
import { useLatestMeasurement } from "@/hooks/useLatestMeasurement";
import { SensorCard } from "../Sensor-card";

export type SensorData = {
  thingName: string;
  timestamp: number;
  temperature: number;
  co2: number;
  type: string;
  fanState: boolean;
  compuertaState: boolean;
};

export function Dashboard() {
  const { data, interactions } = useDeviceInteractions();
  const { measurement, error } = useLatestMeasurement();
  if (!measurement) return;
  console.debug("measurement", { measurement, error });
  return (
    <div className="w-full h-full">
      <h1 className="text-3xl font-bold pb-4">IoT Sensor Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 auto-rows-[max-content] md:auto-rows-[400px]">
        <SensorCard data={measurement} />
        <LinearChart data={data} />
        <MultipleBarChart data={data} />
        <RadialChart data={interactions} />
      </div>
    </div>
  );
}
