import { useEffect, useState } from "react";

const STORAGE_KEY = "weather-app-settings";

const DEFAULT_UNITS = {
  temperature: "Celsius",
  wind: "km/h",
  pressure: "mm",
  precipitation: "Millimeters",
  distance: "Kilometers",
  notifications: true,
};

const UNIT_FIELDS = [
  {
    key: "temperature",
    label: "Temperature",
    options: ["Celsius", "Fahrenheit"],
  },
  {
    key: "wind",
    label: "Wind Speed",
    options: ["km/h", "m/s", "Knots"],
  },
  {
    key: "pressure",
    label: "Pressure",
    options: ["hPa", "Inches", "kPa", "mm"],
  },
  {
    key: "precipitation",
    label: "Precipitation",
    options: ["Millimeters", "Inches"],
  },
  {
    key: "distance",
    label: "Distance",
    options: ["Kilometers", "Miles"],
  },
];

function ToggleGroup({ label, options, value, onChange }) {
  return (
    <div className="rounded-xl bg-primary p-3">
      <p className="mb-2 text-sm font-medium text-gray-300">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`rounded-lg px-3 py-1.5 text-sm transition ${
              value === opt
                ? "bg-gray-500 text-white"
                : "bg-secondary text-gray-300 hover:bg-gray-600"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function WeatherSettings() {
  const [units, setUnits] = useState(() => {
    const savedUnits = localStorage.getItem(STORAGE_KEY);
    if (!savedUnits) {
      return DEFAULT_UNITS;
    }

    try {
      const parsedUnits = JSON.parse(savedUnits);
      return { ...DEFAULT_UNITS, ...parsedUnits };
    } catch {
      return DEFAULT_UNITS;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(units));
  }, [units]);

  const updateUnit = (key, value) => {
    setUnits((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section className="w-full px-4 pb-24 pt-4 text-white lg:px-8 lg:pb-4">
      <div className="mx-auto w-full max-w-4xl rounded-2xl bg-secondary p-4 lg:p-6">
        <div className="mb-5 border-b border-gray-700 pb-3">
          <h2 className="text-xl font-semibold">Settings</h2>
          <p className="text-sm text-gray-400">
            Choose how weather details are shown in the app.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          {UNIT_FIELDS.map((field) => (
            <ToggleGroup
              key={field.key}
              label={field.label}
              options={field.options}
              value={units[field.key]}
              onChange={(val) => updateUnit(field.key, val)}
            />
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl bg-primary p-4">
          <div>
            <p className="text-sm font-medium">Notifications</p>
            <p className="text-xs text-gray-400">Get alerts for important changes.</p>
          </div>
          <button
            type="button"
            onClick={() => updateUnit("notifications", !units.notifications)}
            className={`flex h-6 w-12 items-center rounded-full p-1 transition ${
              units.notifications ? "bg-sky-500" : "bg-gray-600"
            }`}
          >
            <div
              className={`h-4 w-4 transform rounded-full bg-white shadow-md transition ${
                units.notifications ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setUnits(DEFAULT_UNITS)}
          className="mt-4 w-full rounded-lg border border-gray-600 py-2 text-sm text-gray-200 transition hover:border-gray-300"
        >
          Reset to default
        </button>

        <p className="mt-3 text-center text-xs text-gray-500">
          Changes are saved automatically.
        </p>
      </div>
    </section>
  );
}