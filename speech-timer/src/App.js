import React, { useState, useEffect, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import TimerSlot from './components/TimerSlot'
import { useStopwatch } from 'react-timer-hook'
import { useSpeechSynthesis } from 'react-speech-kit'

function App() {

  const [timers, setTimers] = useState([
    { time: 2, text: "This is my message" },
    { time: 5, text: "hello" },
    { time: 8, text: "I am smart" }
  ])

  const { speaking, speak, supported } = useSpeechSynthesis();
  const { seconds, isRunning, start, reset } = useStopwatch();

  const updateTimers = (index, time, text) => {
    const newTimers = [...timers];
    newTimers[index].time = time;
    newTimers[index].text = text;

    setTimers(newTimers);
  }

  const addTimer = () => {
    const newTimers = [...timers, { time: 100, text: 'yoooo' }]
    setTimers(newTimers)
  }
  const doReset = useCallback(() => {
    reset()
  }, [])

  const doSpeak = useCallback((...p) => {
    speak(...p)
  }, [])

  useEffect(() => {

    const foundTimer = timers.find(timer => {
      return timer.time === seconds;
    })
    // console.log(foundTimer)
    //check to seee if seconds is gretaer than last timeer time
    if (seconds > timers[timers.length - 1].time) doReset();


    if (foundTimer) {
      doSpeak({ text: foundTimer.text });

    }
  }, [seconds, timers, doSpeak, doReset])

  if (!supported) {
    return <div>Rour browser is not supported, Sorry</div>
  }
  return (
    <div className="App">
      <h2>Talk the Talk</h2>
      <div className="timers">
        {timers.map((timer, index) => (
          <TimerSlot key={index} index={index} timer={timer} updateTimers={updateTimers} />

        ))}

        <button className="add-button" onClick={addTimer}>Add</button>

        <h2>{seconds}</h2>


        <div className="buttons">
          {!isRunning && <button className="start-button" onClick={start}>Start</button>}
          {isRunning && <button className="stop-button" onClick={reset}>Stop</button>}
        </div>
        {speaking && <p>I am speaking....</p>}


      </div>
    </div>
  );
}

export default App;
