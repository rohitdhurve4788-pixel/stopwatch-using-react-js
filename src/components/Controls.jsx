/**
 * Controls
 *
 * Renders the Reset · Start/Pause · Lap button row.
 *
 * Props:
 *   isRunning   {boolean} - true when the stopwatch is ticking
 *   onStart     {func}    - called when play button is clicked while stopped
 *   onPause     {func}    - called when pause button is clicked while running
 *   onReset     {func}    - called when Reset is clicked
 *   onLap       {func}    - called when Lap is clicked
 *   canReset    {boolean} - whether Reset is enabled (e.g. time > 0)
 *   canLap      {boolean} - whether Lap is enabled (e.g. stopwatch running)
 */
export default function Controls({
  isRunning,
  onStart,
  onPause,
  onReset,
  onLap,
  canReset,
  canLap,
}) {
  return (
    <div className="sw-controls">
      {/* ── Reset ── */}
      <div className="sw-ctrl-group">
        <button 
          id="sw-reset-btn"
          className="sw-btn-secondary"
          onClick={onReset}
          disabled={!canReset}
       
          aria-label="Reset stopwatch"
        >
          {/* Refresh/reset icon */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
               strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 1 0 .49-3.62" />
          </svg>
        </button>
        <span className="sw-ctrl-group__label">Reset</span>
      </div>

      {/* ── Start / Pause ── */}
      <div className="sw-ctrl-group">
        <button
        
          id="sw-playpause-btn"
          className={`sw-btn-primary${isRunning ? ' sw-btn-primary--pause' : ''}`}
          onClick={isRunning ? onPause : onStart}
          aria-label={isRunning ? 'Pause stopwatch' : 'Start stopwatch'}
        >
          {isRunning ? (
            /* Pause icon */
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            /* Play icon */
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </button>
        <span className="sw-btn-primary__label">{isRunning ? 'Pause' : 'Start'}</span>
      </div>

      {/* ── Lap ── */}
      <div className="sw-ctrl-group">
        <button
          id="sw-lap-btn"
          className="sw-btn-secondary"
          onClick={onLap}
          disabled={!canLap}
          aria-label="Record lap"
        >
          {/* List/lap icon */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
               strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
          </svg>
        </button>
        <span className="sw-ctrl-group__label">Lap</span>
      </div>
    </div>
  );
}
