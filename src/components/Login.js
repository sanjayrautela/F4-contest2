import React, { useState } from "react";

function Login({setUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      setUser(data);
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("id", JSON.stringify(data.id));
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Login</h1>
      <form className="form">
        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            value={username}
            id="username"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value.trim())}
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={password}
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value.trim())}
            required
          />
        </label>
        <button className="login" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;