/**
 * LapsPanel
 *
 * Renders the laps list.
 *
 * Props:
 *   laps       {Array}  - array of lap objects:
 *                         { id, lapTime, totalTime, label }
 *                         lapTime  {string} - formatted lap duration  e.g. "00:12.34"
 *                         totalTime{string} - formatted cumulative time e.g. "+00:12.34"
 *                         label    {string|null} - optional badge: 'fastest' | 'slowest' | null
 *   onClearAll {func}   - called when Clear All is clicked
 */
export default function LapsPanel({ laps, onClearAll }) {
  const isEmpty = !laps || laps.length === 0;

  return (
    <section className="sw-laps" aria-label="Laps">
      <div className="sw-laps__header">
        <h2 className="sw-laps__title">Laps</h2>
        <button
          id="sw-clear-laps-btn"
          className="sw-laps__clear"
          onClick={onClearAll}
          disabled={isEmpty}
          aria-label="Clear all laps"
        >
          Clear All
        </button>
      </div>

      {isEmpty ? (
        <p className="sw-laps__empty">No laps recorded yet.</p>
      ) : (
        <ul className="sw-laps__list" aria-label="Lap list">
          {laps.map((laps, index) => {
            const isFastest = laps.label === 'fastest';
            const isSlowest = laps.label === 'slowest';
            const itemClass = [
              'sw-lap-item',
              isFastest && 'sw-lap-item--fastest',
              isSlowest && 'sw-lap-item--slowest',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <li key={laps.id ?? index} className={itemClass}>
                <span className="sw-lap-item__num">{index + 1}</span>
                <span className="sw-lap-item__lap-time">{laps.lapTime}</span>

                {isFastest && (
                  <span className="sw-lap-item__badge sw-lap-item__badge--fast">Best</span>
                )}
                {isSlowest && (
                  <span className="sw-lap-item__badge sw-lap-item__badge--slow">Slow</span>
                )}

                <span className="sw-lap-item__total">{laps.totalTime}</span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
