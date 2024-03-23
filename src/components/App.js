import React, { useState } from "react";
import Login from "./Login.js";
import Profile from "./Profile.js";

function App() {
  const [user, setUser] = useState(null);
  return <>{user === null ? <Login setUser={setUser} /> : <Profile />}</>;
}

export default App;