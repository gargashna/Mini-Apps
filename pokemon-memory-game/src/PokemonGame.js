import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.scss'
import shuffle from 'lodash.shuffle'

const pokemon = [
  { id: 4, name: 'charizard' },
  { id: 10, name: 'caterpie' },
  { id: 77, name: 'ponyta' },
  { id: 108, name: 'lickitung' },
  { id: 132, name: 'ditto' },
  { id: 133, name: 'eevee' }
]

const doublePokemon = shuffle([...pokemon, ...pokemon])

export default function PokemonGame () {
  const [opened, setOpened] = useState([1])
  const [matched, setMatched] = useState([])
  const [moves, setMoves] = useState(0)

  const flipCard = index => {
    setMoves(moves => moves + 1)
    setOpened(opened => [...opened, index])
  }

  useEffect(() => {
    if (opened.length < 2) return
    const firstPokemon = doublePokemon[opened[0]]
    const secondPokemon = doublePokemon[opened[1]]

    if (firstPokemon.name === secondPokemon.name) {
      setMatched(matched => [...matched, firstPokemon.id])
    }
  }, [opened])

  useEffect(() => {
    if (opened.length === 2) setTimeout(() => setOpened([]), 800)
  }, [opened])

  useEffect(() => {
    if (matched.length === pokemon.length) alert('you won')
  }, [matched])

  return (
    <div className='App'>
      <p>
        {moves}
        <strong>moves</strong>
      </p>
      <div className='cards'>
        {doublePokemon.map((pokemon, index) => {
          let isFlipped = false
          //logic
          if (opened.includes(index)) isFlipped = true
          if (matched.includes(index)) isFlipped = true
          return (
            <PokemonCard
              flipCard={flipCard}
              index={index}
              key={index}
              pokemon={pokemon}
              isFlipped={isFlipped}
            />
          )
        })}
      </div>
    </div>
  )
}

function PokemonCard ({ pokemon, isFlipped, index, flipCard }) {
  return (
    <button
      className={`pokemon-card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => flipCard(index)}
    >
      <div className='inner'>
        <div className='front'>
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
            width='100'
          />
        </div>
      </div>
    </button>
  )
}
