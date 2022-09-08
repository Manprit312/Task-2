import React from "react";
import Group from "./Group (1).png";
import "./index.css"
import { ArrowRight } from "react-bootstrap-icons";
export default function Cardbundle(props) {
  return (
    <>
      <div className="cards ">
        <img src={Group} alt="Group" className="group" />
        <div className="card_title">{props.title}</div>
        <p className="card_para">{props.about}</p>
        <ArrowRight className="arroy" />
      </div>
    </>
  );
}
