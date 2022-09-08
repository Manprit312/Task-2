import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import man from "./shipman-northcutt-sgZX15Da8YE-unsplash 1.png";
import BackVector from "./Vector (5).png";
export default function Carousecomp() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 375 },
      items: 3,
    },
  };
  return (
    <>
      <div className="carousel_box">
        <h2 className="__head"> The world's best workplace chooses Hipla</h2>

        <Carousel responsive={responsive}>
          <div className="suggestions">
            <div className="story">
              <img src={man} alt="story" />
            </div>
            <div className="image_cont">
              <p className="carausel_para">
                Company Stitched together Visitor Managemnet,Indoor Navigation
                ,Pantry Managemnet
              </p>
              <p className="carausel_by">
                <hr className="hr" />
                Dishant Angihotri
              </p>
              <p className="name">Director of technology, AIPL</p>

              <p className="carousel_into">
                Company ecosystem helps AIPL to setup their smart workplace,
                Company ecosystem helps AIPL to setup their smart workplace
              </p>
            </div>
          </div>

          <div className="suggestions">
            <div className="story">
              <img src={man} alt="story" />
            </div>
            <div className="image_cont">
              <p className="carausel_para">
                Company Stitched together Visitor Managemnet,Indoor Navigation
                ,Pantry Managemnet
              </p>
              <p className="carausel_by">
                <hr className="hr" />
                Dishant Angihotri
              </p>
              <p className="name">Director of technology, AIPL</p>

              <p className="carousel_into">
                Company ecosystem helps AIPL to setup their smart workplace,
                Company ecosystem helps AIPL to setup their smart workplace
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
