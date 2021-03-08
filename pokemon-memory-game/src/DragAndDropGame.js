import React, { useState } from 'react'
import './App.scss'
import { useDrag, useDrop } from 'react-dnd'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function DragAndDropGame () {
  const [number1, setNumber1] = useState(1)
  const [number2, setNumber2] = useState(3)
  const [operator, setOperator] = useState('*')
  const handleDrop = (item, spot) => {
    if (spot === 'number1') {
      setNumber1(item.text)
    }
    if (spot === 'number2') {
      setNumber2(item.text)
    }
    if (spot === 'operator') {
      setOperator(item.text)
    }
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='dragGame'>
        <div className='math-card'>
          <Spot
            type='Number'
            text={number1}
            spot='number1'
            handleDrop={handleDrop}
          />
          <Spot
            type='Number'
            text={number2}
            spot='number2'
            handleDrop={handleDrop}
          />
          <Spot
            type='Operator'
            text={operator}
            spot='operator'
            handleDrop={handleDrop}
          />
          <hr />
          <div className='spot'>{eval(`${number1}${operator}${number2}`)}</div>
        </div>
        <div className='contentCard'>
          <div className='commonClass numbers'>
            {Array(10)
              .fill(0)
              .map((n, i) => (
                <Card key={i} text={i} type={'Number'} />
              ))}
          </div>
          <div className='commonClass operators'>
            {['*', '-', '+', '/'].map((o, i) => (
              <Card key={i} text={o} type={'Operator'} />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  )
}

function Spot ({ type, text, handleDrop, spot }) {
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: type,
    drop: item => {
      handleDrop(item, spot)
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  })

  let backgroundColor = '#f2f2f2'
  if (canDrop) backgroundColor = '3db897'
  if (isOver) backgroundColor = '#4bdcb5'
  return (
    <div className='spot' ref={dropRef} style={{ backgroundColor }}>
      {text}
    </div>
  )
}

function Card ({ text, type }) {
  //pass opacity to monitor and
  const [{ opacity }, dragRef] = useDrag({
    item: { type: type, text: text },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  })

  return (
    <div className='individualCard' ref={dragRef} style={{ opacity }}>
      {text}
    </div>
  )
}

// function Operator ({ text }) {
//   const [{ opacity }, dragRef] = useDrag({
//     item: { type: 'Operator', text: text },
//     collect: monitor => ({
//       opacity: monitor.isDragging() ? 0.5 : 1
//     })
//   })
//   return (
//     <div className='individualCard' ref={dragRef} style={{ opacity }}>
//       {text}
//     </div>
//   )
// }
