import { useEffect, useState } from 'react';
import './index.css';
import './App.css'; 

import StopwatchHeader from './components/StopwatchHeader';
import RingDisplay     from './components/RingDisplay';
import Controls        from './components/Controls';
import LapsPanel       from './components/LapsPanel';

/**
 * App — UI shell only.
 *
 * All the state here is PLACEHOLDER so you can see the UI.
 * Replace these with your own logic / hooks.
 *
 * Props the child components expect:
 * ─────────────────────────────────────────────────────────
 * <StopwatchHeader>
 *   theme          {string}  'dark' | 'light'
 *   onThemeToggle  {func}    toggle the theme
 *
 * <RingDisplay>
 *   minutes        {string}  zero-padded, e.g. "05"
 *   seconds        {string}  zero-padded, e.g. "42"
 *   ms             {string}  zero-padded centiseconds, e.g. "07"
 *   progress       {number}  0–1 arc fill
 *
 * <Controls>
 *   isRunning      {boolean}
 *   onStart        {func}
 *   onPause        {func}
 *   onReset        {func}
 *   onLap          {func}
 *   canReset       {boolean}
 *   canLap         {boolean}
 *
 * <LapsPanel>
 *   laps           {Array<{ id, lapTime, totalTime, label }>}
 *   onClearAll     {func}
 * ─────────────────────────────────────────────────────────
 */
export default function App() {
  // ── PLACEHOLDER state – replace with your own logic ──
  const [theme, setTheme]       = useState('dark');
  const [laps, setLaps]         = useState([])
  const [lastLapTime, setLastLapTime] = useState(0);
  
  // laps logic   
function handellaps(){
  setLaps((prew)=>{
    let lasttotal=prew.length?prew[0].total:0;
    return [
      {id:Date.now(),total:elasp,laps:elasp-lasttotal},
      ...prew
    ]
  })
}
let formattime=(ms)=>{
  let min=String(Math.floor(ms/60000)).padStart(2,'0')
  let sec=String(Math.floor( ms % elasp % 60000/1000)).padStart(2,'0')
  let ss=String(Math.floor( ms % elasp % 1000/10)).padStart(2,'0')

  return `${min}:${sec},${ss}`
}













  const handleLap = () => {
  if (isRunning) return;

  const lapDuration = elapsed - lastLapTime;

  const newLap = {
    id: Date.now(),
    totalTime: elapsed,
    lapTime: lapDuration,
  };

  setLaps((prev) => [newLap, ...prev]);

  setLastLapTime(elapsed);
};
    
    const handleThemeToggle = () => {
      const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  };
  
  
  
  
  
  
  
  const [elasp,setelasp]=useState(0)
  const [isRunning, setRunning] = useState(false);
  useEffect(()=>{
    let interval
  if(isRunning){
    interval=setInterval(() => {
      setelasp((prev)=> prev+10)
    }, 10);
  } return ()=>{    clearInterval(interval)}

},[isRunning])


  // ── Wire your logic to these handlers ──
  const handleStart   = () => setRunning( true);
  const handlePause   = () => setRunning( false);
  const handleReset   = () => { setRunning(false) ; setelasp(0); setLaps([])};
  const handleClear   = () => setLaps([]);


// minutes sec ms logic
let seconds=String(Math.floor(elasp % 60000/1000)).padStart(2,'0')
let minutes=String(Math.floor(elasp / 60000)).padStart(2,'0')
let ms=String(Math.floor(elasp % 1000/10)).padStart(2,'0')

console.log(elasp, (elasp % 60000) / 60000);
  return (
    <div style={{ width: '100%', maxWidth: '520px' }}>
      <StopwatchHeader
        theme={theme}
        onThemeToggle={handleThemeToggle}
      />

      <RingDisplay
        minutes={minutes}
        seconds={seconds}
        ms={ms}
        running={isRunning}
        progress={(elasp % 60000) / 60000}/* replace with real progress derived from elapsed time */
      />

      <Controls
        isRunning={isRunning}
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
        onLap={handellaps}
        canReset={true}   /* replace: e.g. elapsed > 0 */
        canLap={isRunning}
      />
<LapsPanel
  laps={laps.map((v) => ({
    id: v.id,
    lapTime: formattime(v.laps),
    totalTime: `+ ${formattime(v.total)}`,
    label: null,
  }))}
  onClearAll={handleClear}
/>
    </div>
  );
}
