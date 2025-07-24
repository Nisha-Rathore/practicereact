import React from "react";
import "./App.css";
import Content from "./components/pages/Content";
import Navbar from "./components/pages/Navbar";
import Women from "./components/pages/Women";
import Kids from "./components/pages/Kids";
import Men from "./components/pages/Men";
import Categories from "./components/pages/Categories";
import Casual from "./components/pages/Casual";
import Footwear from "./components/pages/Footwear.js";
import Activewear from "./components/pages/Activewear.js";
import Westernwear from "./components/pages/Westernwear.js";
import Footer from "./components/Footer.js";
import Slider from "./components/pages/Slide.js";

function App({ title }) {
  return (
    <>
      <Navbar />
      <Content />
      <div
        style={{
          fontWeight: "bold",
          fontSize: "30px",
          margin: "16px 0",
          padding: "50px 30px",
        }}
      >
        RISING STARS
      </div>
      <div className="text-center mt-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-600 font-bold text-2xl">
          Welcome to our store!
        </p>
      </div>
      <div className="p-5 mx-auto">
        <h2 className="text-xl font-semibold p-5 mb-4">Men's Products</h2>
        <Men />
        <div>
          <h2 className="text-xl font-semibold p-5 mt-8 mb-4">
            Women's Products
          </h2>
          <Women />
        </div>
        <div>
          <h2 className="text-xl font-semibold p-5 mt-8 mb-4">
            Kids's Products
          </h2>
          <Kids />
        </div>
        <h1 className="text-4xl font-bold p-10 mb-4">Shop By Category</h1>
        <h2 className="text-2xl font-semibold p-5 mb-4">Ethnic Wear</h2>
        <Categories />
        <h2 className="text-2xl font-semibold p-5 mb-4">Casual Wear</h2>
        <Casual />
        <h2 className="text-2xl font-semibold p-5 mb-4">Footwear</h2>
        <Footwear />
        <h2 className="text-2xl font-semibold p-5 mb-4">Activewear</h2>
        <Activewear />
        <h2 className="text-2xl font-semibold p-5 mb-4">Westernwear</h2>
        <Westernwear />
        <Footer />
        <Slider />
      </div>
    </>
  );
}

export default App;
