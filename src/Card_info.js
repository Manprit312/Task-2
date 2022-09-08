import React from "react";
export default function Cardinfo(props){
return(
<>
<div className="cardsdisp_head">
    <h2>{props.head}</h2>
    <p className="card_disp_para">{props.info}</p>
    </div>
</>

)

}