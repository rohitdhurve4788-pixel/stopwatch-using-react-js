import { useEffect } from "react";

/**
 * RingDisplay
 *
 * Renders the circular progress ring + time readout.
 *
 * Props:
 *   minutes   {string}  - zero-padded minutes, e.g. "05"
 *   seconds   {string}  - zero-padded seconds, e.g. "42"
 *   ms        {string}  - zero-padded centiseconds, e.g. "07"
 *   progress  {number}  - 0–1, controls how much of the ring arc is filled
 */
export default function RingDisplay({ minutes, seconds, ms, progress ,running}) {
  const RADIUS = 120;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  const offset = CIRCUMFERENCE * (1 - (progress ?? 0));

//   useEffect(() => {
//   if (running) {
//     console.log('timer is running');

//     setInterval(() => {
//       setSeconde((val) => val + 1);
//     }, 1000);
//   }
// }, [running]);



  return (
    <div className="sw-ring-wrap">
      <div className="sw-ring" aria-label="Stopwatch ring display">
        {/* SVG ring */}
        <svg className="sw-ring__svg" viewBox="0 0 280 280">
          <defs>
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>

          {/* Track */}
          <circle
            className="sw-ring__track"
            cx="140" cy="140" r={RADIUS}
          />

          {/* Progress arc */}
          <circle
            className="sw-ring__progress"
            cx="140" cy="140" r={RADIUS}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>

        {/* Inner time readout */}
        <div className="sw-ring__inner">
          <span className="sw-ring__label">Stopwatch</span>

          <div className="sw-ring__time" aria-live="polite" aria-atomic="true">
            <span className="sw-ring__hms">{minutes}:{seconds}</span>
            <span className="sw-ring__ms">.{ms}</span>
          </div>

          <div className="sw-ring__units">
            <span className="sw-ring__unit sw-ring__unit--hms">MIN</span>
            <span className="sw-ring__unit sw-ring__unit--hms">SEC</span>
            <span className="sw-ring__unit sw-ring__unit--ms">MS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
