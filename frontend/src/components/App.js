import React, { useReducer, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./MovieCard";
import Search from "./Search";
import Profile from "./Profile";
import Main from "./Main";
import Home from "./Home"

const App = () => (
    <div>
      <Header />
      <Main />
    </div>
  )
  
export default App
  