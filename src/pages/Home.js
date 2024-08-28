import React from 'react'

import Products from '../components/products'
function Home() {
  return (
    <div>
        <h1 className='heading'>Welcome to the Redux toolkit store</h1>
        <section>
            <h3>Products</h3>
            <Products/>
        </section>
    </div>
  )
}

export default Home