import React from "react";

const Login = () => {
  return (
    <form className="login">
      <h1>Logga in</h1>
      <div className="login__input">
        <label htmlFor="">Användarnamn</label>
        <input type="text" />
      </div>
      <div className="login__input">
        <label htmlFor="">Lösenord</label>
        <input type="password" />
      </div>
      <input type="submit" value="Logga in" />
    </form>
  );
};

export default Login;
