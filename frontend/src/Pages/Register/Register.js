import React from 'react'

const Register = () => {
  return (

    <div className="banner register">
      <div className="register_container">
        <h1>Register </h1>
        <input type="text" placeholder='Username' />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder='Confirm Password' />
        <button type="Submit" className="submit">
          Register
        </button>
      </div>
    </div>
  );

}
export default Register



