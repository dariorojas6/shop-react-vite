import { useState } from 'react'
import { Pagination } from './components/Pagination'
import { ProductList } from './components/ProductList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='title'>FakeStore</h1>

    <ProductList/>
   
    </>
  )
}

export default App
