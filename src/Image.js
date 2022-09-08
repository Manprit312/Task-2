import React from "react";
import { PlayFill } from "react-bootstrap-icons";
export default function Image() {
  return (
    <>
      <div
        className="backimage"
        style={{
          backgroundImage: `src("./group-diverse-people-having-business-meeting 1.png)`,
        }}
      >
        <div className="back__">
          <h3 className="back_para">
            Company full ecosystem of solutions address the critical office
            process making them easier to accomplish
          </h3>
        </div>
        <div className=" video_">
          <div className="ellipse">
            <PlayFill className="play" />
          </div>
          <span className="watch"> Watch Video</span>
          <span className="underlined">
            LEARN MORE <hr />
          </span>
        </div>
      </div>
    </>
  );
}
