import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Nutshell.css";

const Nutshell = () => {
  const isAuthenticated = () => sessionStorage.getItem('credentials') !== null;
  
  const [hasUser, setHasUser] = useState(isAuthenticated())

  const setUser = user => {
    sessionStorage.setItem('credentials', JSON.stringify(user))
    setHasUser(isAuthenticated())
  }
  
  const clearUser = () => {
    sessionStorage.clear()
    setHasUser(isAuthenticated())
  }
  
  return (
    <>
      <NavBar clearUser={clearUser} hasUser={hasUser} />
      <ApplicationViews setUser={setUser} hasUser={hasUser} />
    </>
  );
}

export default Nutshell;