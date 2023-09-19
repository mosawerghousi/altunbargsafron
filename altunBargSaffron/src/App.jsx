import React, { useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Products } from "./components/products";
import { Contact } from "./components/contact";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  useEffect(()=> {
    document.title = "Saffron_Website";
  },[]);

  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Products />
      <Contact  />
    </div>
  );
};

export default App;
