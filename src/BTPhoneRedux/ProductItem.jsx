import React from 'react'
import { useDispatch } from 'react-redux'
import { baiTapPhoneActions } from '../store/baiTapPhone/actions'

const ProductItem = ({ phone }) => {
    const dispatch = useDispatch()

    return (
        <div className="col-4">
            <div className="card">
                <img
                    className="img-fluid"
                    style={{
                        height: 400,
                    }}
                    src={phone.hinhAnh}
                    alt="..."
                />
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <button
                            className="btn btn-success"
                            onClick={() => {
                                dispatch(baiTapPhoneActions.handleCarts(phone))
                            }}
                        >
                            Add To Cart
                        </button>
                        <button
                            className="btn btn-warning"
                            onClick={() => {
                                dispatch(baiTapPhoneActions.handleProductDetail(phone))
                            }}
                        >
                            Detail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
