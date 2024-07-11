import React from "react";
import "./App.css";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="mt-20">
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
