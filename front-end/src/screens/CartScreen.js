import React from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom";

export default function CartScreen(props) {
    const params = useParams();
    const productId = params.id;
    const {search} =useLocation();
    const qtyInUrl = new URLSearchParams(search).get('qty');
    const qty = qtyInUrl?Number(qtyInUrl):1
    ? Number(props.location.search.split('=')[1])
    : 1;
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : ProductID: {productId} Qty: {qty}
      </p>
    </div>
  );
}