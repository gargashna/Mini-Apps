import React, { useState } from 'react'
import useInterval from '@use-it/interval'

const messages = [
  { text: 'How do i get better' },
  { text: 'Just Build Something' },
  { text: 'Ok, what should I build' },
  { text: 'Bro, google it' },
  { text: 'Looks Cool, let me get back to you' }
]
export default function Display () {
  const [messageToShow, setMessageToShow] = useState(0)

  useInterval(() => {
    setMessageToShow(messageToShow + 1)
  }, 2000)

  return (
    <div className='walkthrough'>
      {messages.map((message, index) => {
        const even = index % 2 === 0
        console.log(message)
        console.log('message to show' + ' ' + messageToShow)
        console.log(index)
        if (messageToShow + 1 === index) {
          return <TypingIndicator key={index} even={even} />
        }
        if (index > messageToShow) return <div key={index} />
        return <Message key={index} message={message} />
      })}
    </div>
  )
}

function TypingIndicator ({ even }) {
  return (
    <div className={`typing ${even ? 'is-right' : 'is-left'}`}>
      <div className='dots'>
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

function Message ({ message }) {
  return (
    <div className='msg'>
      <div className='avatar'>:)</div>
      <div className='text'>{message.text}</div>
      <div className='avatar'>:D</div>
    </div>
  )
}
