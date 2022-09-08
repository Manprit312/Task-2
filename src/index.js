import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Navbar";
import Body from "./Body";
import Carousecomp from "./Carousel";
import Image from "./Image";
import reportWebVitals from "./reportWebVitals";
import Card from "./Cards";
import Customer from "./Customers";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Body />
    <Card />
    <Image />
    <Carousecomp />
    <Customer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
