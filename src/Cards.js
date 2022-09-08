import React from "react";
import Vector from "./isometric 1.png";
import Vectorsec from "./isometric1 1.png";
import "./App.css";
import { ArrowRight } from "react-bootstrap-icons";
import Cardbundle from "./Cards_pack";
import SmallCards from "./SmallCarcs";
import Cardinfo from "./Card_info";

export default function Card(){

return (<>
<div className="card_disp">
        <div className="card_first_row">
    <Cardinfo  head="Access Cloud" info="Unique and powerful suite of software to run your entire business"/>
    
          <div className="card">
            <Cardbundle title="Meeting management" about="Unique and powerful suite of software to run your entire business"
             />
             <Cardbundle title="Pantry  management" about="Unique and powerful suite of software to run your entire business"
             />
             <div className="card_one_col">
             <SmallCards title="Asset Tracking"/>
             <img  className="vector" src={Vector} alt=""/>
             <SmallCards title="Visitor Management"/>
             </div> 
          </div>
             <p className="_para">Explore All access to cloud features <ArrowRight className="right"/></p>
        </div>

        <div className="card_second_row">
       <div className="second_card_head"> <Cardinfo  head="Access Cloud" info="Unique and powerful suite of software to run your entire business"/></div>
    
          <div className="card">
          <div className=" image_"><img  className="vector2" src={Vectorsec} alt="ty"/></div>
            <Cardbundle title="Meeting management" about="Unique and powerful suite of software to run your entire business"
             />
             <Cardbundle id="the_one" title="Pantry  management" about="Unique and powerful suite of software to run your entire business"
             />
             <div className="card_one_col">
             <SmallCards title="Asset Tracking"/>
             
             <SmallCards title="Visitor Management"/>
             </div> 
          </div>
             <p className="_para2">Explore All access to cloud features <ArrowRight className="right"/> </p>
        </div>
      </div>
      
      
      
      
      
      </>)
      
      





}
