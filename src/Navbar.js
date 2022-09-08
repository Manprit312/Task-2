import React from "react";
import "./App.css";
import { useState } from "react";
import { List } from "react-bootstrap-icons";
import { ChevronDown } from "react-bootstrap-icons";
export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  function Modal() {
    return (
      <>
        <div className="list_disp">
        <div className="nav_links_">
          <div className="products_">
            PRODUCTS <ChevronDown className="down" />
          </div>
          <div className="success_">SUCCESS STORIES</div>
        </div>
        <div className="btn_">
          <button className="cont__">CONTACT SALES</button>
          <button className="getstart_">GET STARTED</button>
        </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="navbar">
        <div className="logo">Any Logo</div>
        <div className="nav_links">
          <div className="products">
            PRODUCTS <ChevronDown className="down" />
          </div>
          <div className="success">SUCCESS STORIES</div>
        </div>
        <div className="btn">
          <button className="cont_">CONTACT SALES</button>
          <button className="getstart">GET STARTED</button>
        </div>
        <List
          className="list"
          onClick={() => {
              setShowModal(true);
              if (showModal === true) {
                  setShowModal(false);
                }
            }}
            />
      </div>
            {showModal && Modal()}
    </>
  );
}
