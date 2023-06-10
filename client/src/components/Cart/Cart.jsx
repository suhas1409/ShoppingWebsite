import React from 'react'
import "./Cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { makeRequest } from '../../makeRequest';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import {loadStripe} from '@stripe/stripe-js';

const Cart = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (
      total += item.quantity * item.price
    ));
    return total;
  };

  const stripePromise = loadStripe('pk_test_51NEFDbSDCC77acKsfwAFDga60Trj0PDChSC92ZTW5RwDp8NXuNfQwiKorz2vLsuU3yx3Wh0AaQ3px5CzH6PzmUNg00UHumOM14');

  const handlePayment = async() => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post("/orders", {
        products,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      })
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map(item => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)} </p>
            <div className="price"> {item.quantity} x Rs. {item.price}</div>
          </div>
          <DeleteOutlineIcon className="delete" onClick={() => dispatch(removeItem(item.id))}/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>Rs. {totalPrice()} </span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart
