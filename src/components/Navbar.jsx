import React from 'react'

const Navbar = ({cartCount, openModal}) => {
  return (
    <nav className='w-[100vw] bg-lime-400 flex justify-around font-bold text-xl p-4 text-white mb-4 shadow-lg'>
        <h1>Shopping Store</h1>
        <button onClick={openModal} className='hover:text-slate-100'>Cart ({cartCount})</button>
    </nav>
  )
}

export default Navbar
