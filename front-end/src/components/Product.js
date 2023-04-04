import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <p className="Description-product">{product.description}</p>
        <div className="Price-Bag">
          <h3>${product.price}</h3>
          <div className="bag-item">
          <Link to={`/product/${product._id}`}>
              <h5>Add to Cart</h5>
              <i class="fa fa-shopping-bag"></i>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}