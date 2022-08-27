import React from 'react'
import Product from './Product'
import './Products.css'

import data from './data'
export default function ProductsContainer() {
  return (
    <div className="products-container">
        {
            data.map(product =>{
                return (
                    <Product product={product}/>
                )
            })
        }

    
    </div>
  )
}
