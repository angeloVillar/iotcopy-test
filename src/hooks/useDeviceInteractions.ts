import { SensorData } from "@/components/dashboard"
import { useState, useEffect } from "react"

export function useDeviceInteractions() {
  const [interactions, setInteractions] = useState({ fan: 0, compuerta: 0 })
  const [data, setData] = useState<SensorData[]>([])

  useEffect(() => {
    fetch("/week_data.json")
      .then((response) => {
        console.log("Response status:", response.status)
        return response.json()
      })
      .then((jsonData) => {
        console.log("Loaded data:", jsonData)
        setData(jsonData)

        // Calcular las interacciones
        const fanCount = (jsonData as SensorData[]).filter((item) => item.fanState).length
        const compuertaCount = (jsonData as SensorData[]).filter((item) => item.compuertaState).length
        setInteractions({ fan: fanCount, compuerta: compuertaCount })
      })
      .catch((error) => console.error("Error loading data:", error))
  }, [])

  return { data, interactions }
}
