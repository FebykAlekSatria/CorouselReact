import React, { useEffect, useState } from "react";
import "../style.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Corousel() {
        const settings = {
          dots: true,
          autoplay: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        };
  return (
    <div className="container">
    <Slider {...settings}>
    <div><img src={'https://images.unsplash.com/photo-1588250318414-908688966feb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'} alt="Credit to Joshua Earle on Unsplash"/></div>
    <div><img src={'https://images.unsplash.com/photo-1588250318414-908688966feb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'} alt="Credit to Joshua Earle on Unsplash"/></div>
    {/* <div><img src={require('./images/002.PNG')} alt="Credit to Alisa Anton on Unsplash"/></div>
    <div><img src={require('./images/003.PNG')} alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
    <div><img src={require('./images/004.PNG')} alt="Credit to Pierre Châtel-Innocenti on Unsplash"/></div>
    <div><img src={require('./images/005.PNG')} alt="Credit to Richard Nolan on Unsplash"/></div>
    <div><img src={require('./images/006.PNG')} alt="Credit to Cristina Gottardi on Unsplash"/></div> */}
    </Slider>
  </div>
  );
}
