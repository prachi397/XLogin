import React, { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const [error, setError] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    if (userName === "username" && password === "password") {
      setError("");
      setIsValidated(true);
    } else {
      setError("Invalid username or password");
    }
  }
  return (
    <div>
      <h1>Login Page</h1>
      {!isValidated ? (
        <form onSubmit={handleFormSubmit}>
            {error && <p>{error}</p>}
          <div>
            <label>UserName</label>
            <input
              type="text"
              placeholder="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <h3>Welcome, user!</h3>
      )}
    </div>
  );
};
export default Login;
