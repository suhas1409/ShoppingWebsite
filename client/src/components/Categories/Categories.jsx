import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
            <img
                src="/images/sale_image.jpg"
                alt=""
            />
             <button>
                <Link className="link" to="/products/6">
                    Sale
                </Link>
             </button>
        </div>
        <div className="row">
            <img
                src="/images/women_banner.jpg"
                alt=""
            />
            <button>
                <Link to="/products/1" className="link">
                    Women
                </Link>
            </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
            <img
                src="/images/kids_banner.jpg"
                alt=""
            />
            <button>
                <Link to="/products/4" className="link">
                    kids
                </Link>
            </button>
        </div>
      </div>
      <div className="col colLarge">
        <div className="row">
          <div className="col">
            <div className="row">
                <img
                    src="/images/men_banner.jpg"
                    alt=""
                />
                <button>
                    <Link to="/products/2" className="link">
                        Men
                    </Link>
                </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
                <img
                    src="/images/accessories.jpg"
                    alt=""
                />
                <button>
                    <Link to="/products/5" className="link">
                    Accessories
                    </Link>
                </button>
            </div>
          </div>
        </div>
        <div className="row">
            <img
                src="/images/Footware_Banner.jpg"
                alt=""
            />
            <button>
                <Link to="/products/3" className="link">
                    Shoes
                </Link>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
