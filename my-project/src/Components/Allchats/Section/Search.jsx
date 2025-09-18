import React from 'react'
import { FaSearch } from 'react-icons/fa' // Font Awesome search icon

const Search = () => {
  return (
    <>
      <div className="Search">
        <div className="flex justify-center py-2">
          <div className="relative w-full max-w-80">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search or Start a new chat"
              className="bg-slate-700 text-sm p-2 rounded-full pl-10 w-full text-white"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
