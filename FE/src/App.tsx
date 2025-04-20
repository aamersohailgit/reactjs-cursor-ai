import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <main>
          <Hero />
          <Categories />
        </main>
      </div>
    </Router>
  );
}

export default App;
