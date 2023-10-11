/* 

  Prabesh Bhattarai = 104085535
   */ 

import React from 'react'
import Layout from '../components/Layout'
import './Signin.css'; // Import the CSS file

const Signin = () => {
  return (
    <Layout>
      <div className="wrapper login">
        <div className="container">
          <div className="col-left">
            <div className="login-text">
              <h2>Hackon</h2>
              <p>Welcome sign in with your account</p>
            </div>
          </div>
          <div className="col-right">
            <div className="login-form">
              <form >
                <div className="input-group">
                  <label htmlFor="username">Email Address/Username</label> {/* Used htmlFor instead of for */}
                  <input type="text" id="username" placeholder="Username or Email" required />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password</label> {/* Used htmlFor instead of for */}
                  <input type="password" id="password" placeholder="Password" required />
                </div>
                <button type="submit" className="btn-submit" >Sign In</button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Signin
