import React from 'react'

export const Pagination = ({ productsPerPage, currentPage, setCurrentPage, totalProducts }) => {

    // console.log(Math.ceil(totalProducts / productsPerPage))
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    const onPreviousPage = ()=>{
        //actualizar mi state de pagina actual
        //si mi pagina actual es igual a 1 
        if (currentPage === 1 ) {
            //button deactivado
            <button disabled></button>
        }else{
            // si no mi state de pagina actual es el resultado de pagina actual menos 1
            setCurrentPage(currentPage -1)
        } 
      }

      const onNextPage = ()=>{
        //actualizar mi state de pagina actual
          if (currentPage >= pageNumbers.length) {
            <button disabled ></button>
          } else { 
              setCurrentPage(currentPage +1)
          }
        }
    const onEspecificPage = (e) => {
        setCurrentPage(e)
    }

    return (
        <nav className="pagination is-centered mb-6" role="navigation" aria-label="pagination">
            <button className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={onPreviousPage}>Anterior</button>
            <button className={`pagination-next ${currentPage >= pageNumbers.length ? 'is-disabled' : ''}`} onClick={onNextPage}>Siguiente</button>
            <ul className="pagination-list">
                {
                    pageNumbers.map(noPage => (
                        <li key={noPage}>
                            <a className={`pagination-link ${noPage === currentPage ? 'is-current' : ''}`} onClick={()=>{onEspecificPage(noPage)}}>{noPage}</a>
                        </li>
                    ))
                }


            </ul>
        </nav>
    )
}
