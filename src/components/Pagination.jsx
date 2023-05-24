import React from 'react'

export const Pagination = ({ productsPerPage, currentPage, setCurrentPage, totalProducts }) => {

    // console.log(Math.ceil(totalProducts / productsPerPage))
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    const onPreviousPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const onEspecificPage = (e) => {
        setCurrentPage(e)
    }

    return (
        <nav className="pagination is-centered mb-6" role="navigation" aria-label="pagination">
            <a className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={onPreviousPage}>Anterior</a>
            <a className={`pagination-next ${currentPage >= pageNumbers.length ? 'is-disabled' : ''}`} onClick={onNextPage}>Siguiente</a>
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
