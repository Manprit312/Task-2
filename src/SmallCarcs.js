import React from "react";
import "./index.css"
import Group from "./Group (1).png";
import { ArrowRight } from "react-bootstrap-icons";
export default function SmallCards(props) {
  return (
    <>
      <div className="smallcard">
        <img src={Group} alt="Group" />
<div className="small_title">{props.title} </div>
        
        <ArrowRight className="arroys" />
      </div>
    </>
  );
}
