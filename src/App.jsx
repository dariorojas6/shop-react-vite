import { useState } from 'react'
import { Pagination } from './components/Pagination'
import { ProductList } from './components/ProductList'
import "boxicons";
import { Header } from './components/Header';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

   
  
    <ProductList/>
 
   
    </>
  )
}

export default App
