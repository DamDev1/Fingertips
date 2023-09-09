import React, { useEffect, useState } from 'react'
import "./FeaturedProduct.scss"

export default function FeaturedProduct() {
    const [products, getProducts] = useState([])
    const featuredData = [
        {
            "id": "1",
            "productName": "DJI Mavic Air 2 Pro Combo Drone",
            "product_image": "https://i0.wp.com/motta.uix.store/wp-content/uploads/2022/09/1-18.jpg?fit=1400%2C1400&ssl=1",
            "price": "₦70,000",
            "old_price": "₦100,000",
            "seller": {
                "seller_name": "Feed cho"
            },
            "review": "2"
        },
        {
            "id": "2",
            "productName": "JOBY GripTight PRO TelePod Tripod",
            "product_image": "https://i0.wp.com/motta.uix.store/wp-content/uploads/2022/09/1-15.jpg?fit=1400%2C1400&ssl=1",
            "price": "₦50,000",
            "old_price": "₦80,000",
            "seller": {
                "seller_name": "Zoon Shop"
            },
            "review": "2"
        },
        {
            "id": "3",
            "productName": "Silicone Pouch Baby Bottle, Air-Free Feeding, Multi Pack, 4",
            "product_image": "https://i0.wp.com/motta.uix.store/wp-content/uploads/2022/09/1-16.jpg?fit=1400%2C1400&ssl=1",
            "price": "₦5,000",
            "old_price": "₦10,000",
            "seller": {
                "seller_name": "Zoon Shop"
            },
            "review": "2"
        },
        {
            "id": "4",
            "productName": "Galaxy Watch Active 2 Aluminum Smart Watch",
            "product_image": "https://i0.wp.com/motta.uix.store/wp-content/uploads/2022/09/1-6.jpg?fit=1400%2C1400&ssl=1",
            "price": "₦5,000",
            "old_price": "₦10,000",
            "seller": {
                "seller_name": "Zoon Shop"
            },
            "review": "2"
        },
        {
            "id": "4",
            "productName": "1TB Gaming Console – Wireless Game Pad – Black",
            "product_image": "https://i0.wp.com/motta.uix.store/wp-content/uploads/2022/08/1-4.jpg?fit=1400%2C1400&ssl=1",
            "price": "₦5,000",
            "old_price": "₦10,000",
            "seller": {
                "seller_name": "Zoon Shop"
            },
            "review": "2"
        },

    ]

    useEffect(() => {
        getProducts(featuredData)
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
