import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pagination = ({totalPage, currentPage}) => {

    const navigate = useNavigate();

    const handleNextPage = () => {
                console.log("currentPage: ", currentPage);
        if (currentPage < totalPage) {
            const nextPage = Number(currentPage) + 1;
            navigate(`?page=${nextPage}`);
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            const previousPage = currentPage - 1;
            navigate(`?page=${previousPage}`);
        }
    }

    const handleNextButtonDisabled = () => {
        if( currentPage < totalPage) {
            return false;
        } else {
            return true;
        }
    }

    const handlePreviousButtonDisabled = () => {
        if(currentPage === 1) {
            return true;
        } else {
            return false;
        }
    }

    

  return (
    <div className="flex justify-center my-6">
      <nav className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
        {currentPage > 1 && (
        <>        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-sm font-medium border border-gray-300 rounded-l-md transition-colors ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          ← Previous
        </button></>)    
        }

        {currentPage < totalPage && (
        <button
          onClick={handleNextPage}
          disabled={handleNextButtonDisabled()}
          className={`px-4 py-2 text-sm font-medium border border-gray-300 rounded-r-md transition-colors ${
            handleNextButtonDisabled()
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Next →
        </button>
        )}
      </nav>
    </div>
  )
}

export default Pagination