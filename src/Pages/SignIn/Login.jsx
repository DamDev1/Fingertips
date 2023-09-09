import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.scss"
export default function Login() {
  return (
    <div className='login-container'>
            <div className="container">
                <div className="logo">
                    <Link to='/'>Fingertips</Link>
                </div>

                <div className="register">
                    <div className="top">
                        <div className="sign-in">
                            <Link to='/sign-in'>Sign In</Link>
                        </div>
                        <div className="sign-up">
                            <Link to='/create-account'>Create Account</Link>
                        </div>
                    </div>

                    <div className='with'>Sign in with..</div>

                    <div className="other-mean">
                        <div className="google">
                            <div className="google-icon">

                            </div>
                            <span>Google</span>
                        </div>
                    </div>
                    <div className='with'>or sign in using your email address</div>

                    <form>
                        <div className='email'>
                            <label htmlFor="email">Email</label>
                            <input type="email" required />
                        </div>
                        <div className='password'>
                            <label htmlFor="password">Password</label>
                            <input type="password" required />
                        </div>
                        <div className="forgot-pass">
                            <Link>Fogot Password?</Link>
                        </div>
                        <div className="submit">
                            <button>Login</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
  )
}
