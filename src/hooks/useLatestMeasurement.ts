import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "/api/ultima-medicion";

export function useLatestMeasurement() {
  const [measurement, setMeasurement] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(API_URL, {
        headers: { "x-api-key": "VBfIGUwzft8omx70XCxSO7EtOWHvUAKI2ifR7sVW" },
      })
      .then((response) => setMeasurement(response.data))
      .catch((err) => setError(err.message));
  }, []);

  return { measurement, error };
}
