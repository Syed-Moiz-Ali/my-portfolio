import "./App.scss";
import "../src/scss/Responsive.scss"
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Navigation from "./components/Navigation/Navigation";


import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout /> } >
          
            <Route index element={<Home />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="About" element={<About />} />
          
            
          </Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Navigation /> } >
          
            <Route index element={<Home />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="About" element={<About />} />
          
            
          </Route>
        </Routes>
      </BrowserRouter>
          
    </>
  );
}

export default App;
