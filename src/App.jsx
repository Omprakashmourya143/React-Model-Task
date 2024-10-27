import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import CartModal from './components/CartModal'

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const fetchProducts = async () =>{
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      // console.log(data)
    }
fetchProducts();
  }, []);

  const addToCart = (product) =>{
    if(!cart.some(item=>item.id === product.id)){
      setCart([...cart, product])
    }else{
      alert("Item already added to the cart")
    }
  };

  const removeFromCart = (productId) =>{
   setCart(cart.filter(item=> item.id !== productId));
  };
  
  
  return (
    <div>
      <Navbar cartCount={cart.length} openModal={()=> setModalOpen(true)}/>
        <div className='grid lg:grid-cols-4 lg:w-[80vw] lg:m-auto md:grid-cols-3 md:px-12 sm:grid-cols-2 sm:px-8 grid-cols-1 gap-4 m-4'>
          {products.map(product=>(
            <ProductCard key={product.id} product={product} addToCart={addToCart}/>
          ))}
        </div>
        {modalOpen && (
          <CartModal cartItems={cart} removeFromCart={removeFromCart} closeModal={()=> setModalOpen(false)}/>
        )}
    </div>
  )
}

export default App
