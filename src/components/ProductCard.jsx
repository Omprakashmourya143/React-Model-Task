import React from 'react'

const ProductCard = ({product, addToCart}) => {
  return (
    <div className='border rounded-lg flex flex-col p-4 my-4 shadow-xl'>
      <img src={product.image} alt={product.title} className='w-48 h-48 object-contain mb-2 lg:pl-12 '/>
      <h2 className='font-bold text-xl font-mono'>{product.title}</h2>
      <p className='text-lg font-semibold m-2'>$ {product.price}</p>
      <button onClick={()=> addToCart(product)} className='mt-auto bg-lime-400 rounded-lg text-white p-2 m-2 border-2 border-solid border-white hover:text-lime-500 hover:border-solid hover:border-2 hover:border-lime-500 hover:bg-white'>Add to Cart</button>
    </div>
  )
}

export default ProductCard
