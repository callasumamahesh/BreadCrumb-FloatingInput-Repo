import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductsPage() {
    const navigate = useNavigate()
    const moveToSingleProduct = () => {
        navigate('/products/singleproduct')
    }
  return (
    <div>
      <button onClick={() => moveToSingleProduct()}>Product1</button>
      <button onClick={() => moveToSingleProduct()}>Product2</button>
      <button onClick={() => moveToSingleProduct()}>Product3</button>
      <button onClick={() => moveToSingleProduct()}>Product4</button>
    </div>
  )
}

export default ProductsPage
