import React from 'react'
import "./Register.scss"
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className='register-container'>
            <div className="container">
                <div className="logo">
                    <Link to='/'>Fingertips</Link>
                </div>

                <div className="register">
                    <div className="top">
                        <div className="sign-in">
                            <Link to="/sign-in">Sign In</Link>
                        </div>
                        <div className="sign-up">
                            <Link to='/create-account'>Create Account</Link>
                        </div>
                    </div>

                    <div className='with'>Sign up with..</div>

                    <div className="other-mean">
                        <div className="google">
                            <div className="google-icon">

                            </div>
                            <span>Google</span>
                        </div>
                    </div>
                    <div className='with'>or sign up using your email address</div>

                    <form>
                        <div className='email'>
                            <label htmlFor="email">Email</label>
                            <input type="email" required />
                        </div>
                        <div className='password'>
                            <label htmlFor="password">Password</label>
                            <input type="password" required />
                        </div>
                        <div className="policy">
                            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                        </div>
                        <div className="submit">
                            <button>Register</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
