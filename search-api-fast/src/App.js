import React from 'react'
import logo from './logo.svg'
import './App.scss'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  Stats
} from 'react-instantsearch-dom'
//app id=VXTZ82DQUD
//api key=b85bdab78dd08274e6b95ef2e35a3afd
//indice name= products
const searchClient = algoliasearch(
  'VXTZ82DQUD',
  'b85bdab78dd08274e6b95ef2e35a3afd'
)
function App () {
  return (
    <InstantSearch searchClient={searchClient} indexName='products'>
      <div className='app'>
        <form>
          <input list='animals' name='animal' id='animal'></input>
          <datalist id='animals'>
            <option value='Cat'></option>
            <option value='Dog'></option>
            <option value='Chicken'></option>
            <option value='Cow'></option>
            <option value='Pig'></option>
          </datalist>
        </form>
        <Stats />
        <SearchBox />
        <Hits hitComponent={Product} />
        <Pagination />
      </div>
    </InstantSearch>
  )
}

function Product ({ hit }) {
  return (
    <a
      className='product'
      href={hit.url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <img src={hit.image} alt={hit.name} />
      <div>
        <h3>{hit.brand}</h3>
        <h2>{hit.name}</h2>
        <p>${hit.price}</p>
      </div>
    </a>
  )
}

export default App
