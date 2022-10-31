import React from "react"

const Pagination = ({ rowsPerPage, totalRows, paginate }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="isolate inline-flex -space-x-px rounded-md shadow-sm mr-4">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={() => paginate(number)}
              href="#"
              className="relative hidden items-center border 
            border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-indigo-700/[.2] focus:z-20 md:inline-flex"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
