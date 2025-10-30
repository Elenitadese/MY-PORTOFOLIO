// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Values from "./components/Values";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

import CursorFollower from "./components/CursorFollower/CursorFollower";

function App() {
  return (
    <div className="App">
      <CursorFollower />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Values />
      <Projects />
      
      {/* <Process /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
