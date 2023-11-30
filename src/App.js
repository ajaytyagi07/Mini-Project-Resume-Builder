import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { auth } from "./firebase";
import Body from "./components/Body/Body";
import About from "./components/About/About";
import Footer from "./Footer/Footer";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <div className="App">
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route path="/login" element={<Login updateUser={updateUser} />} />
          <Route path="/signup" element={<Signup updateUser={updateUser} />} />
          <Route path="/" element={<Home name={user ? user.displayName : ""} />} />
          <Route path="/homepage" element={<Home name={user ? user.displayName : ""}  />} />
          <Route path="/templates" element={<Body updateUser={updateUser} />} />
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;