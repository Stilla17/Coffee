import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../store/features/filterSlice';

const Nav = () => {

  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  }

  return (
    <nav className="px-12 py-3 bg-white shadow-md flex justify-between gap-18 items-center max-md:px-4 max-md:gap-4 max-sm:pr-12 max-md:pr-12">
      <div className='block max-lg:hidden'></div>

      <div className="relative text-end w-full">
        <Search className="text-gray-400 w-5 h-5 absolute left-4 top-2.5" />
        <input
          type="text"
          placeholder="Mahsulot qidirish..."
          className="w-full pl-12 pr-4 py-2 bg-gray-100 rounded-xl text-gray-700 
               focus:outline-none focus:ring-2 focus:ring-green-500 focus:shadow-md max-lg:w-full "
          onChange={handleSearch}
        />
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <h3 className="text-[16px] font-medium text-gray-900 text-nowrap">Анна Иванова</h3>
          <p className="text-sm text-gray-500 -mt-1">Бариста</p>
        </div>

        <img
          src="https://i.pravatar.cc/100"
          alt="User"
          className="w-12 h-12 rounded-full border-2 border-green-400 object-cover"
        />
      </div>
    </nav>
  )
}

export default Nav