import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-500 text-white py-3'>
    <div className='logo'>
      <span className='font-bold text-xl mx-12 cursor-pointer'>KG Todo</span>
    </div>
      <ul className='flex gap-7 mx-11'>
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar