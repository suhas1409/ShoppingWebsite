import React, { useState } from 'react'
import "./Products.scss"
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import useFetch from "../../hooks/useFetch"

const Products = () => {

  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const {data, loading, error} = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked 
      ? [...selectedSubCats, value] 
      : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <h2>FILTERS</h2>
        <hr />
        <div className="filterItem">
          <h2>CATEGORIES</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input 
                type="checkbox" 
                id={item.id} 
                value={item.id} 
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <hr />
        <div className="filterItem">
          <h2>FILTER BY PRICE</h2>
          <div className="inputItem">
            <span>100</span>
            <input 
              type="range" 
              min={100} 
              max={10000} 
              onChange={(e) => setMaxPrice(e.target.value)} 
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <hr />
        <div className="filterItem">
          <h2>SORT BY</h2>
          <div className="inputItem">
            <input 
              type="radio" 
              id="asc" 
              value="asc" 
              name="price" 
              onChange={e => setSort("asc")} 
            />
            <label htmlFor="asc">Price (Low to High)</label>
          </div>
          <div className="inputItem">
            <input 
              type="radio" 
              id="desc" 
              value="desc" 
              name="price" 
              onChange={e => setSort("desc")} />
            <label htmlFor="desc">Price (High to Low)</label>
          </div>
        </div>
        <hr />
      </div>
      <div className="right">
        {/* <img
            className="catImg"
            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          /> */}
          <List 
            catId={catId} 
            maxPrice={maxPrice} 
            sort={sort} 
            subCats={selectedSubCats}
          />
      </div>
    </div>
  )
}

export default Products
