import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmount = 0
      cartList.map(each => {
        const val = each.price * each.quantity
        totalAmount += val
        return each
      })
      const totalItems = cartList.length
      return (
        <div className="cart-summary-cont">
          <div className="cart-summary-inner-cont">
            <h1 className="head1">
              Order Total : <span className="span1">{totalAmount}/-</span>
            </h1>
            <p>{totalItems} items in cart</p>
            <button type="button" className="cart-summary-btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
