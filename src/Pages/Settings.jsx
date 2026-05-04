import { useEffect, useState } from "react";

const STORAGE_KEY = "weather-app-settings";

const DEFAULT_UNITS = {
  temperature: "Celsius",
  wind: "km/h",
  pressure: "mm",
  precipitation: "Millimeters",
  distance: "Kilometers",
  notifications: true,
  timeFormat24: false,
  locationWeather: true,
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
    <div>
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">
        {label}
      </p>
      <div className="flex overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/70 p-1 shadow-inner shadow-black/20">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`flex-1 rounded-xl px-3 py-2 text-[13px] font-medium transition ${
              value === opt
                ? "bg-slate-600 text-white shadow-sm"
                : "text-gray-300 hover:bg-slate-800"
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

  const toggleSetting = (key) => {
    setUnits((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="w-full px-4 pb-24 pt-3 text-white lg:px-6 lg:pb-4">
      <div className="mx-auto grid w-full max-w-6xl gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
        <div className="space-y-5">
          <div className="rounded-3xl bg-secondary p-4 shadow-lg shadow-black/20 lg:p-5">
            <div className="mb-4 border-b border-slate-700 pb-3">
              <h2 className="text-xl font-semibold text-gray-100">Settings</h2>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-200">Units</p>
              <div className="grid gap-4">
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
            </div>
          </div>

          <div className="rounded-3xl bg-secondary p-4 shadow-lg shadow-black/20 lg:p-5">
            <p className="mb-4 text-sm font-semibold text-gray-200">Notifications</p>
            <div className="flex items-center justify-between rounded-2xl bg-slate-950/60 px-4 py-4">
              <div>
                <p className="text-sm font-semibold text-gray-100">Notifications</p>
                <p className="mt-1 text-xs text-gray-400">Be aware of the weather</p>
              </div>
              <button
                type="button"
                onClick={() => updateUnit("notifications", !units.notifications)}
                className={`flex h-6 w-12 items-center rounded-full p-1 transition ${
                  units.notifications ? "bg-sky-500" : "bg-slate-600"
                }`}
              >
                <div
                  className={`h-4 w-4 rounded-full bg-white shadow-sm transition ${
                    units.notifications ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>

            <div className="mt-4 rounded-2xl bg-slate-950/60 px-4 py-4">
              <div className="flex items-center justify-between gap-4 border-b border-slate-700 pb-3">
                <div>
                  <p className="text-sm font-semibold text-gray-100">12-Hour Time</p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleSetting("timeFormat24")}
                  className={`flex h-6 w-12 items-center rounded-full p-1 transition ${
                    !units.timeFormat24 ? "bg-sky-500" : "bg-slate-600"
                  }`}
                >
                  <div
                    className={`h-4 w-4 rounded-full bg-white shadow-sm transition ${
                      !units.timeFormat24 ? "translate-x-6" : ""
                    }`}
                  />
                </button>
              </div>

              <div className="mt-3 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-100">Location</p>
                  <p className="mt-1 text-xs text-gray-400">Get weather of your location</p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleSetting("locationWeather")}
                  className={`flex h-6 w-12 items-center rounded-full p-1 transition ${
                    units.locationWeather ? "bg-sky-500" : "bg-slate-600"
                  }`}
                >
                  <div
                    className={`h-4 w-4 rounded-full bg-white shadow-sm transition ${
                      units.locationWeather ? "translate-x-6" : ""
                    }`}
                  />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setUnits(DEFAULT_UNITS)}
              className="mt-4 w-full rounded-xl border border-slate-700 bg-slate-950/50 py-2.5 text-sm font-medium text-gray-200 transition hover:border-slate-500"
            >
              Reset to default
            </button>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-3xl bg-secondary p-4 shadow-lg shadow-black/20 lg:p-5">
            <p className="text-2xl font-semibold text-gray-100">Advanced</p>
            <p className="mt-2 text-sm font-medium text-gray-300">Get new experience</p>

            <ul className="mt-3 space-y-1 text-sm text-gray-400">
              <li>• Ad free</li>
              <li>• Health activities overview</li>
              <li>• Severe weather notifications</li>
            </ul>

            <div className="mt-5 rounded-2xl bg-slate-700/80 px-5 py-4 text-center">
              <p className="text-3xl font-bold text-gray-100">
                $5.99<span className="text-base font-medium text-gray-300">/month</span>
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-secondary p-4 shadow-lg shadow-black/20 lg:p-5">
            <p className="text-xl font-semibold text-gray-100">Never forget your umbrella!</p>
            <div className="mt-3 border-t border-slate-700 pt-3 text-sm text-gray-400">
              <p>Sign up for our daily weather newsletter</p>
              <p>personalized just for you.</p>
            </div>

            <button
              type="button"
              className="mt-5 w-full rounded-full bg-sky-500 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}