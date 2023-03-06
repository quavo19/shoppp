import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'

export default function FeaturedProducts() {
  return (
    <div>
        <div className="Heading-title">
        <h1>Featured Products</h1>
        </div>
        <div className="row center">
    <div className="card">
      <Link to={`/product`}>
        <img className="medium" src="watches/blue.png" alt='a watch' />
      </Link>
      <div className="card-body">
        <Link to={`/product`}>
          <h2>Apple Watch</h2>
        </Link>
        <Rating
          rating={5}
          numReviews={5}
        ></Rating>
      </div>
    </div>
    <div className="card">
      <Link to={`/product`}>
        <img className="medium" src="13.png" alt='a watch' />
      </Link>
      <div className="card-body">
        <Link to={`/product`}>
          <h2>Apple Watch</h2>
        </Link>
        <Rating
          rating={4}
          numReviews={13}
        ></Rating>
      </div>
    </div>
    <div className="card">
      <Link to={`/product`}>
        <img className="medium" src="watches/yellow.png" alt='a watch' />
      </Link>
      <div className="card-body">
        <Link to={`/product`}>
          <h2>Apple Watch</h2>
        </Link>
        <Rating
          rating={5}
          numReviews={10}
        ></Rating>
      </div>
    </div>
    </div>
    </div>
  )
}
