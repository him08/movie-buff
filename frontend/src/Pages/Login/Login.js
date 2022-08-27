import React from "react"

const Login = () => {
  return (
    <div className="banner login">
      <div className="login_container">
        <h1>LOGIN WITH US </h1>
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button type="Submit" className="submit">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Login
