import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.scss"

export default function Footer() {
    return (
        <footer>
            {/* <hr /> */}
            <div className="col">
                {/* <div className="col-top">
                    <div className="nav-link-container">
                        <ul className='nav-links'>
                            <li className='menu-link'><Link>Vehicles</Link></li>
                            <li className='menu-link'><Link>Property</Link></li>
                            <li className='menu-link'><Link>Mobile Phone & Tablets</Link></li>
                            <li className='menu-link'><Link>Electronics</Link></li>
                            <li className='menu-link'><Link>Home, Furniture & Appliances</Link></li>
                            <li className='menu-link'><Link>Fashion</Link></li>
                            <li className='menu-link'><Link>Sport, Art & Outdoors</Link></li>
                            <li className='menu-link'><Link>Services</Link></li>
                            <li className='menu-link'><Link>Pet</Link></li>
                            <li className='menu-link'><Link>Babies</Link></li>
                            <li className='menu-link'><Link>Foods</Link></li>
                        </ul>
                    </div>
                </div> */}

                <div className="main-footer">
                    <div className="row-one">
                        <h3>Our Mission</h3>
                        <p>The naira is the currency of Nigeria. One naira is divided into 100 kobo. The Central Bank of Nigeria is the sole issuer of legal tender money throughout the Federal Republic of Nigeria.</p>
                        <div className="social-icon">
                            <div className="facebook media"></div>
                            <div className="instagram media"></div>
                            <div className="youtube media"></div>
                        </div>
                    </div>
                    <div className="row-two">
                        <h4>Shop</h4>
                        <ul>
                            <li className='menu-link'><Link>Vehicles</Link></li>
                            <li className='menu-link'><Link>Property</Link></li>
                            <li className='menu-link'><Link>Mobile Phone & Tablets</Link></li>
                            <li className='menu-link'><Link>Electronics</Link></li>
                            <li className='menu-link'><Link>More</Link></li>
                        </ul>
                    </div>

                    <div className="row-two">
                        <h4>Sell</h4>
                        <ul>
                            <li className='menu-link'><Link>Sell On Fingertips</Link></li>
                            <li className='menu-link'><Link>Tearms</Link></li>
                            <li className='menu-link'><Link>Forums</Link></li>
                            <li className='menu-link'><Link>Affiliate Programs</Link></li>
                        </ul>
                    </div>

                    <div className="row-three">
                        <h4>About</h4>
                        <ul>
                            <li className='menu-link'><Link>Fingertips, Inc</Link></li>
                            <li className='menu-link'><Link>Policies</Link></li>
                            <li className='menu-link'><Link>Investors</Link></li>
                            <li className='menu-link'><Link>Career</Link></li>
                            <li className='menu-link'><Link>Press</Link></li>
                            <li className='menu-link'><Link>Impact</Link></li>
                        </ul>
                    </div>

                    <div className="row-three">
                        <h4>About</h4>
                        <ul>
                            <li className='menu-link'><Link>Help Centre</Link></li>
                            <li className='menu-link'><Link>Privacy Setting</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}
