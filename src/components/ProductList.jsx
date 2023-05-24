import React, { useEffect, useState } from 'react'
import { Pagination } from './Pagination'
import { Header } from './Header'

export const ProductList = () => {
  const [products, setProducts] = useState([])
  const totalProducts = products.length
  // Total de productos
  const [productsPerPage, setProductsPerPage] = useState(6)
  // //   Estado para decir cuantos prod tener por pagina
  const [currentPage, setCurrentPage] = useState(1)
  // // Estado para la pagina actual en la que estemos, inicia siempre en 1

  const productList = async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const products = await data.json()

    setProducts(products)
  }

  useEffect(() => {
    productList()
  }, [])

  const lastIndex = currentPage * productsPerPage // 4 * 6 = 6
  const firstIndex = lastIndex - productsPerPage // 6 - 6 = 0

  return (
    <> 
    <Header></Header>
      <div className="container-products">
        {products.map(product => (
          <div className="card-product" key={product.id}>
            <figure className='container-img'>
              <img src={product.image} alt={product.title} />
            </figure>
            <div className="info-product">
              <h3>{product.title}</h3>
              <p className="price">{product.price}</p>
              <button>Añadir al carrito</button>
            </div>
          </div>
        )).slice(firstIndex, lastIndex)}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts} />
    </>
  )
}
