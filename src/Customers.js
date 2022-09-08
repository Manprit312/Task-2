import React from "react";
import vehere from "./vehere 1.png";
import aipl from "./aipl-logo 1.png";
import yesbank from "./Yes_Bank_logo 1.png";
import writer from "./writer 1.png";
import dp from "./dps 1.png";
import { ArrowRight } from "react-bootstrap-icons";
export default function Customer() {
  return (
    <>
      <div className="customer">
        <img className="custo" src={aipl} alt="aipl" />
        <img className="custo" src={vehere} alt="aipl" />
        <img className="custo" src={yesbank} alt="aipl" />
        <img className="custo" src={writer} alt="aipl" />
        <img className="custo" src={dp} alt="aipl" />
      </div>

      <p className="_para2">
        {" "}
        Read All Customer Stories <ArrowRight />
      </p>
    </>
  );
}
