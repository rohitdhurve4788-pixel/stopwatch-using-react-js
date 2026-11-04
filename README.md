⏱️ React Stopwatch

A clean stopwatch app built with React, featuring a circular progress ring, lap tracking, and a dark/light theme toggle.

<img width="836" height="887" alt="image" src="https://github.com/user-attachments/assets/63594ed1-8122-4a38-9719-20b6ff2d6234" />

✨ Features
Start / Pause / Reset with centisecond precision (MM:SS.cc)
Circular progress ring that completes one full turn every minute
Lap tracking — each lap shows its own split time and the cumulative total, newest lap on top
Clear All to wipe the lap list
Dark / Light theme toggle (via data-theme on the root element and CSS variables)
Responsive layout
🛠️ Tech Stack
React (functional components + hooks: useState, useEffect)
JavaScript (ES6+)
Plain CSS with CSS variables for theming



🧠 How the Logic Works

The whole stopwatch runs on one single piece of time state, elapsed (in milliseconds). Everything else is derived from it.

Concept	How it's done
Ticking	setInterval inside a useEffect that depends on isRunning; the cleanup function (clearInterval) stops it on pause/reset
Minutes / seconds / centiseconds	Calculated from elapsed with Math.floor and % — no separate state to keep in sync
Ring progress	(elapsed % 60000) / 60000 → a value from 0 to 1 passed to the SVG ring
Lap time	current elapsed − previous lap's total; laps are stored as raw milliseconds and only formatted (MM:SS.cc) when displayed
Reset	Stops the timer, sets elapsed to 0 and clears all laps
🤖 How This Project Was Built

I used AI as an assistant to work faster, and was deliberate about what I handed over:

UI (AI-generated): the visual components — StopwatchHeader, RingDisplay, Controls, LapsPanel — and their styling. I defined the structure and the props contract they expose.
Logic (written by me): all state management and behaviour in App.jsx: the timer effect and its cleanup, deriving time values from a single state, the lap calculation, reset handling, and wiring everything to the components via props.

I used AI to explain concepts and unblock myself while debugging, then wrote and tested the logic myself, so I understand every line of it — including the bugs I hit along the way (stale closures, mismatched property names, CSS transitions making the ring spin backwards).



LIVE AT 🌍 : https://stopwatch-using-react-js-m3jb.vercel.app/
