import React from 'react'
import "./Successfull.scss"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom'

const Successfull = () => {

  
  return (
    <div className="success">
      <h1>Thank You</h1>
      <div className="icon">
        <CheckCircleIcon />
      </div>
      <h2>Order Placed Successfully</h2>
      <div className="button">
        <button>
          <Link to="/" className="link">
            Go To Homepage
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Successfull;
