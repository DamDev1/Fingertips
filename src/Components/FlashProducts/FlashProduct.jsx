import React, { useEffect, useState } from 'react'
import "./FlashProduct.scss"

export default function FlashProduct() {
    const [products, getProducts] = useState([])
    const flashData = [
        {
            "id": "1",
            "productName": "Slate Series 33 Inch French Door Refrigerator Slate",
            "product_image": "https://i0.wp.com/motta.uix.store/wp-content/uploads/2022/09/1-114.jpg?resize=300%2C300&ssl=1",
            "price": "₦500,000",
            "old_price": "₦700,000",
            "seller": {
                "seller_name": "Dev Shop"
            },
            "review": "2"
        },
        {
            "id": "2",
            "productName": "MacBook Pro 16 with Retina Display (Space Gray)",
            "product_image": "https://i0.wp.com/motta.uix.store/wp-content/uploads/2022/09/1-58.jpg?fit=1400%2C1400&ssl=1",
            "price": "₦900,000",
            "old_price": "₦1,000,000",
            "seller": {
                "seller_name": "Zoon Shop"
            },
            "review": "2"
        },
        {
            "id": "2",
            "productName": "MacBook Pro 16 with Retina Display (Space Gray)",
            "product_image": "https://i0.wp.com/motta.uix.store/wp-content/uploads/2022/09/1-58.jpg?fit=1400%2C1400&ssl=1",
            "price": "₦900,000",
            "old_price": "₦1,000,000",
            "seller": {
                "seller_name": "Zoon Shop"
            },
            "review": "2"
        },

        {
            "id": "2",
            "productName": "MacBook Pro 16 with Retina Display (Space Gray)",
            "product_image": "https://i0.wp.com/motta.uix.store/wp-content/uploads/2022/09/1-58.jpg?fit=1400%2C1400&ssl=1",
            "price": "₦900,000",
            "old_price": "₦1,000,000",
            "seller": {
                "seller_name": "Zoon Shop"
            },
            "review": "2"
        },

        {
            "id": "2",
            "productName": "MacBook Pro 16 with Retina Display (Space Gray)",
            "product_image": "https://i0.wp.com/motta.uix.store/wp-content/uploads/2022/09/1-58.jpg?fit=1400%2C1400&ssl=1",
            "price": "₦900,000",
            "old_price": "₦1,000,000",
            "seller": {
                "seller_name": "Zoon Shop"
            },
            "review": "2"
        },
    ]

    useEffect(() => {
        getProducts(flashData)
    }, [])

    return (
        <>
            {products.map((product) => (
                <div className="product-container" key={product.id}>
                    <div className="product-image">
                        <img src={product.product_image} alt="" />
                    </div>
                    <div className="product-details">
                        <span className='product-name'>{product.productName}</span>
                        <div className="prices">
                            <div className="new">{product.price}</div>
                            <div className='old'><strike>{product.old_price}</strike></div>
                        </div>
                        <div className="seller">
                            <div className="sellerLogo"></div>
                            <div className="seller-name">
                                {product.seller.seller_name}
                            </div>
                        </div>
                    </div>
                    <div className="cart-buy">
                        <button>Add to cart</button>
                        <button>Buy Now</button>
                    </div>
                </div>
            ))}
        </>
    )
}
