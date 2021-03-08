import logo from './logo.svg'
import './App.scss'
import Header from './components/Header'
import products from './Products'
import Product from './components/Product'
import { CartProvider } from './contexts/use-cart'

function App () {
  return (
    <CartProvider>
      <div className='App'>
        <Header />
        <main>
          <div className='products-list'>
            {products.map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </div>
        </main>
      </div>
    </CartProvider>
  )
}

export default App
