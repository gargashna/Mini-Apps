import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

const secondsToCount = 10
const paragraph =
  'coding is cool and every person should try it to make their profession work better............'
function findTypos (str1, str2) {
  let diff = []
}

function App () {
  const [typedText, setTypedText] = useState('')
  const [typoIndexes, setTypoIndexes] = useState([])

  console.log(typedText.split(''))
  return (
    <div className='App'>
      <div className='sidebar'>
        <div className='timer'>00</div>
        <button className='start'>Start</button>
        <button className='reset'>Reset</button>
      </div>
      <div className='content'>
        <p>
          {paragraph.split('').map((char, index) => {
            let characterClass = ''
            const hasBeenTyped = typedText.length > index
            if (hasBeenTyped) {
              let typo = typoIndexes.includes(index)
              characterClass = typo ? 'incorrect' : 'correct'
            }
            return (
              <span key={index} className={characterClass}>
                {char}
              </span>
            )
          })}
        </p>
        <form>
          <textarea
            value={typedText}
            onChange={e => setTypedText(e.target.value)}
          ></textarea>
        </form>
      </div>
    </div>
  )
}

export default App
