import React from 'react'
import Welcome from '../../Components/Welcome/Welcome'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./Home.scss"
import FlashProduct from '../../Components/FlashProducts/FlashProduct'
import FeaturedProduct from '../../Components/FeaturedProduct/FeaturedProduct'

export default function Home() {
    return (
        <div>
            <Welcome />
            <main>
                <div className="showcase">
                    <div className="sideBar">
                        <Sidebar />
                    </div>
                    <div className="product-categories">
                        <div className="category"></div>
                        <div className="category"></div>
                        <div className="category"></div>
                        <div className="category"></div>
                    </div>
                </div>

                <div className="services-container">
                    <div className="service-content">
                        <div className="service-icon">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>free-shipping</title><path d="M32 19.8c0-1.37-0.8-2.56-2-3.23v-3.87l-3.13-4.7h-4.87v-3h-19v2h17v11h7.81c1.21 0 2.19 0.81 2.19 1.8v3.2h-3.15c-0.44-1.57-1.87-2.72-3.57-2.72s-3.12 1.15-3.57 2.71h-10.42c-0.44-1.56-1.87-2.71-3.57-2.71-2.050 0-3.72 1.67-3.72 3.72s1.67 3.72 3.72 3.72c1.71 0 3.14-1.16 3.57-2.73h10.41c0.44 1.57 1.87 2.73 3.57 2.73s3.13-1.16 3.57-2.72h5.16v-5.2zM5.72 25.72c-0.95 0-1.72-0.77-1.72-1.72s0.77-1.72 1.72-1.72 1.73 0.77 1.73 1.72-0.78 1.72-1.73 1.72zM23.28 25.72c-0.95 0-1.72-0.77-1.72-1.72s0.77-1.72 1.72-1.72 1.72 0.77 1.72 1.72-0.77 1.72-1.72 1.72zM25.42 16h-3.42v-6h3.8l2.2 3.3v2.7h-2.58z"></path><path d="M0 11h9.53v2h-9.53v-2z"></path><path d="M6 16h10.89v2h-10.89v-2z"></path></svg></span>
                        </div>
                        <div className="service-content-title">
                            <h4>Fast, Free Shipping</h4>
                            <p>On order over $50</p>
                        </div>
                    </div>

                    <div className="service-content">
                        <div className="service-icon">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>next-day-delivery</title><path d="M29 16c0 7.17-5.83 13-13 13s-13-5.83-13-13c0-7.17 5.83-13 13-13 3.6 0 6.94 1.44 9.38 4h-3.38v2h7v-7h-2v3.82c-2.83-3.080-6.76-4.82-11-4.82-8.27 0-15 6.73-15 15s6.73 15 15 15c8.27 0 15-6.73 15-15h-2z"></path><path d="M15 7.34v9.24l5.8 2.9 0.9-1.79-4.7-2.35v-8z"></path></svg>
                            </span>
                        </div>
                        <div className="service-content-title">
                            <h4>Next Day Delivery</h4>
                            <p>On order over $50</p>
                        </div>
                    </div>

                    <div className="service-content">
                        <div className="service-icon">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>low-price</title><path d="M16 32c-1.020 0-2.050-0.32-2.92-0.95l-0.81-0.59c-0.51-0.37-1.12-0.57-1.75-0.57h-1c-2.16 0-4.060-1.38-4.72-3.43l-0.31-0.96c-0.2-0.6-0.57-1.12-1.080-1.49l-0.81-0.59c-1.75-1.27-2.47-3.5-1.8-5.55l0.31-0.95c0.2-0.6 0.2-1.24 0-1.84l-0.31-0.95c-0.67-2.050 0.060-4.28 1.8-5.55l0.8-0.59c0.52-0.38 0.89-0.89 1.090-1.49l0.31-0.95c0.67-2.050 2.57-3.43 4.72-3.43h1c0.63 0 1.24-0.2 1.75-0.57l0.81-0.59c1.75-1.27 4.090-1.27 5.84 0l0.81 0.59c0.51 0.37 1.12 0.57 1.75 0.57h1c2.16 0 4.060 1.38 4.72 3.43l0.31 0.95c0.2 0.6 0.57 1.12 1.080 1.49l0.81 0.59c1.75 1.27 2.47 3.5 1.8 5.55l-0.31 0.95c-0.2 0.6-0.2 1.24 0 1.84l0.31 0.95c0.67 2.050-0.060 4.28-1.8 5.55l-0.81 0.59c-0.51 0.37-0.89 0.89-1.080 1.49l-0.31 0.95c-0.67 2.050-2.56 3.43-4.72 3.43h-1c-0.63 0-1.24 0.2-1.75 0.57l-0.81 0.59c-0.87 0.64-1.9 0.96-2.92 0.96zM9.52 4.1c-1.29 0-2.43 0.83-2.83 2.060l-0.31 0.95c-0.33 1-0.95 1.86-1.8 2.48l-0.81 0.59c-1.050 0.76-1.48 2.1-1.080 3.33l0.31 0.95c0.33 1 0.33 2.070 0 3.070l-0.31 0.95c-0.4 1.23 0.030 2.57 1.080 3.33l0.81 0.59c0.85 0.62 1.48 1.48 1.8 2.48l0.31 0.95c0.4 1.23 1.54 2.060 2.83 2.060h1c1.060 0 2.070 0.33 2.92 0.95l0.81 0.59c1.050 0.76 2.46 0.76 3.5 0l0.81-0.59c0.85-0.62 1.86-0.95 2.92-0.95h1c1.29 0 2.43-0.83 2.83-2.060l0.31-0.95c0.33-1 0.95-1.86 1.8-2.48l0.81-0.59c1.050-0.76 1.48-2.1 1.080-3.33l-0.31-0.95c-0.33-1-0.33-2.060 0-3.070l0.31-0.95c0.4-1.23-0.030-2.57-1.080-3.33l-0.81-0.59c-0.85-0.62-1.48-1.48-1.8-2.48l-0.31-0.95c-0.4-1.23-1.54-2.060-2.83-2.060h-1c-1.060 0-2.060-0.33-2.92-0.95l-0.81-0.59c-1.050-0.76-2.46-0.76-3.5 0l-0.81 0.59c-0.85 0.62-1.86 0.95-2.92 0.95h-1z"></path><path d="M16 26c-5.51 0-10-4.49-10-10s4.49-10 10-10c5.51 0 10 4.49 10 10s-4.49 10-10 10zM16 8c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z"></path><path d="M15.56 21.29v-1.28c-1.67-0.23-2.46-1.44-2.57-2.46l1.49-0.36c0.070 0.76 0.58 1.45 1.68 1.45 0.78 0 1.24-0.37 1.24-0.9 0-0.41-0.3-0.72-0.9-0.85l-1.1-0.24c-1.29-0.29-2.1-1.1-2.1-2.25 0-1.27 0.98-2.21 2.27-2.41v-1.28h1.22v1.32c1.38 0.25 1.98 1.21 2.15 2.010l-1.48 0.42c-0.070-0.42-0.38-1.12-1.37-1.12-0.77 0-1.19 0.44-1.19 0.94 0 0.37 0.26 0.68 0.83 0.8l1.090 0.25c1.51 0.34 2.2 1.24 2.2 2.32 0 1.1-0.79 2.12-2.23 2.35v1.29h-1.23z"></path></svg>
                            </span>
                        </div>
                        <div className="service-content-title">
                            <h4>Low Price Guarantee</h4>
                            <p>On order over $50</p>
                        </div>
                    </div>

                    <div className="service-content">
                        <div className="service-icon">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>satisfaction</title><path d="M25 27.93h-11.020c-2.2 0-3.98-1.83-3.98-4.090v-10.020c0-0.87 0.28-1.74 0.79-2.44l4.63-6.38c0.33-0.46 0.75-0.83 1.23-1.12 1.26-0.73 2.75-0.71 3.99 0.040 1.22 0.74 1.95 2.060 1.95 3.51v3.59h5.42c1.3 0 2.52 0.65 3.27 1.75 0.73 1.080 0.92 2.47 0.49 3.71l-3.020 8.73c-0.56 1.63-2.070 2.72-3.75 2.72zM18.61 5.35c-0.33 0-0.65 0.090-0.96 0.26-0.24 0.14-0.45 0.33-0.62 0.56l-4.63 6.38c-0.26 0.37-0.4 0.82-0.4 1.27v10.030c0 1.15 0.89 2.090 1.98 2.090h11.020c0.83 0 1.58-0.55 1.86-1.37l3.020-8.73c0.22-0.65 0.13-1.37-0.25-1.93-0.37-0.55-0.97-0.87-1.61-0.87h-5.63c-0.99 0-1.79-0.82-1.79-1.82v-3.77c0-0.75-0.37-1.43-0.99-1.81-0.32-0.19-0.66-0.29-1-0.29z"></path><path d="M4 28.64c-2.21 0-4-1.79-4-4v-12c0-2.21 1.79-4 4-4s4 1.79 4 4v12c0 2.21-1.79 4-4 4zM4 10.64c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2s2-0.9 2-2v-12c0-1.1-0.9-2-2-2z"></path><path d="M5 24.64c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></svg>
                            </span>
                        </div>
                        <div className="service-content-title">
                            <h4>Satisfaction Guarantee</h4>
                            <p>On order over $50</p>
                        </div>
                    </div>
                </div>

                <div className="quick-links">
                    <div className="quick-links-content"></div>
                    <div className="quick-links-content"></div>
                    <div className="quick-links-content"></div>
                </div>


                <div className="flash-products">
                    <div className="top">
                        <h2>Flash Deals</h2>
                        <div className="see-more">
                            <span>See More</span>
                        </div>
                    </div>

                    <div className="products-deal-container">
                        <FlashProduct />
                    </div>
                </div>

                <div className="shopping-for-today">
                    <div className="top">
                        <h2>What Are You Shopping Today?</h2>
                        <div className="see-more">
                            <span>See All</span>
                        </div>
                    </div>

                    <div className="shopping-container">
                        <div className="col-top">
                            <div className="shopping"></div>
                            <div className="shopping"></div>
                            <div className="shopping"></div>
                        </div>
                        <div className="col-two">
                            <div className="shopping">
                                <div className="col-1">
                                    <div className="image"></div>
                                    <div className="name">
                                        <h4>Car</h4>
                                        <span>See More</span>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="image"></div>
                                    <div className="name">
                                        <h4>Watch</h4>
                                        <span>See More</span>
                                    </div>
                                </div>
                            </div>
                            <div className="shopping">
                                <div className="col-1">
                                    <div className="image"></div>
                                    <div className="name">
                                        <h4>Car</h4>
                                        <span>See More</span>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="image"></div>
                                    <div className="name">
                                        <h4>Watch</h4>
                                        <span>See More</span>
                                    </div>
                                </div>
                            </div>
                            <div className="shopping">
                                <div className="col-1">
                                    <div className="image"></div>
                                    <div className="name">
                                        <h4>Car</h4>
                                        <span>See More</span>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="image"></div>
                                    <div className="name">
                                        <h4>Watch</h4>
                                        <span>See More</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flash-products">
                    <div className="top">
                        <h2>Featured Product</h2>
                        <div className="see-more">
                            <span>See More</span>
                        </div>
                    </div>

                    <div className="products-deal-container">
                        <FeaturedProduct/>
                    </div>
                </div>
            </main>
        </div>
    )
}
