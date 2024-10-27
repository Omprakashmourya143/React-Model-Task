import React from 'react'

const CartModal = ({cartItems, removeFromCart, closeModal}) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center'>
      <div className='bg-white rounded-md p-4 border-solid border-4 border-lime-400 flex flex-col'>
        <h2 className='text-3xl font-bold text-center m-4 text-lime-400'>Your Cart</h2>
        {cartItems.length === 0 ? (
            <p className='w-96 m-4 text-xl font-semibold font-mono'>No items in cart.</p>
        ) : (
            cartItems.map(item=>(
                <div key={item.id} className='flex justify-between items-center'><span className='font-semibold w-96 m-2'>{item.title}</span>
                <button onClick={()=> removeFromCart(item.id)} className='mt-auto bg-red-400 rounded-lg text-white p-2 m-2 border-2 border-solid border-white hover:text-red-500 hover:border-solid hover:border-2 hover:border-red-500 hover:bg-white'>Remove</button>
                </div>
            ))
        )}
        <button onClick={closeModal} className='bg-lime-400 rounded-lg text-white p-2 m-4 border-2 border-solid border-white hover:text-lime-500 hover:border-solid hover:border-2 hover:border-lime-500 hover:bg-white'>Close</button>
      </div>
    </div>
  )
}

export default CartModal
