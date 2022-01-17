import React from 'react'
import formatCurrency from '../util'

const Product = ({ product }) => {

    return (
        <div>
            <ul className='products'>
                {product.map((product) => (
                    <li key={product._id}>
                        <div className='product'>
                            <a href={"#" + product._id}>
                                <img src={product.image} alt={product.title} />
                                <p>
                                    {product.title}
                                </p>
                            </a>
                            <div className='product-price'>
                                <div><strong>{formatCurrency(product.price)}</strong></div>
                                <button className='button primary'>Add To Cart</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Product
