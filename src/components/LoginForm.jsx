import React from "react"

function LoginForm(){
    return <div>
        <form className="form-container">
      <input className="form-item" type="text" placeholder="UserName"/>
      <input className="form-item" type="password" name="" id="" placeholder="Password"/>
      <button className = "form-item"type="submit">Login</button> 
      </form>
    </div>
}

export default LoginForm