import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

const Cart = () => {
  const cartImg =
    'https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png'

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      <Header />
      <div className="cart-container">
        <img src={cartImg} alt="cart" className="cartImg" />
      </div>
    </div>
  )
}

export default Cart
