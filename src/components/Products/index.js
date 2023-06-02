import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

const Products = () => {
  const productsImg =
    'https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png'

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      <Header />
      <div className="products-container">
        <img src={productsImg} alt="products" className="productsImg" />
      </div>
    </div>
  )
}

export default Products
