import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({type}) => {

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1> 
        <p>
          Welcome to our e-commerce clothing website, your one-stop destination
          for fashion-forward individuals seeking the latest trends and 
          timeless styles. We take pride in offeringa diverse collection
          of {type} products that cater to all genders and ages.
        </p>
      </div>
      <div className="bottom">
        {error 
          ? "Something went wrong!" 
          : loading 
          ? "loading" 
          : data?.map((item) =>
            <Card item={item} key={item.id} /> 
        )}
      </div>  
    </div>
  )
}

export default FeaturedProducts;
