import React from 'react'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import phoneList from './data.json'
import Cart from './Cart'

const BTPhoneRedux = () => {
  // console.log('phoneList: ', phoneList);
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <h1>BTPhoneRedux</h1>
        <button
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#BTPhoneCart"
        >
          Giỏ Hàng
        </button>
      </div>

      <ProductList phoneList={phoneList} />

      <ProductDetail />

      <Cart />
    </div>
  )
}

export default BTPhoneRedux