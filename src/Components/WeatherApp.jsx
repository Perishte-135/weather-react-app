import React from 'react';
import './WeatherApp.css';
import cloud_icon from './Assets/img/cloud (1).png';
import avatar_icon from './Assets/img/avatar (2).png';
import first_activity from './Assets/img/Rectangle 15.png';
import second_activity from './Assets/img/Rectangle 16.png';
import third_activity from './Assets/img/Rectangle 17.png';
import fourth_activity from './Assets/img/Rectangle 18.png';
import graphic_img from './Assets/img/24hrs forecast.png' ;
import cloud from './Assets/icons/308.svg';
import Slider from "react-slick";
import sun_icon from './Assets/icons/113.svg';
import clear_icon from './Assets/icons/117.svg';
import rainy_icon from './Assets/icons/icon (1).svg';
import thunder_icon from './Assets/icons/389.svg'
import arrow_icon from './Assets/img/arrow.png';
const WeatherApp = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return(
    <div className="container">
      <div className="top-content">
        <div className="info-content">
          <div className="location-wrap">
            <i className="location"></i>
            <p className="cityName">New York</p>
            <img src={arrow_icon} alt="arrow" className="arrow" />
          </div>
          <h3 className="weather_condition">Cloudy</h3>
          <h2 className="temp">26°C</h2>
          <p className="date">Sunday | 12 Dec 2023</p>
        </div>
        <div className="image_content">
          <img src={cloud_icon} alt="weather-condition-icon" />
        </div>
      </div>
      <div className="main_content">
        <div className="menu_content">
          <img src={avatar_icon} alt="avat" className="avatar" />
          <i className="weather_icon"></i>
          <p className="menu_text">weather</p>
          <i className="explore_icon"></i>
          <p className="menu_text">explore</p>
          <i className="location_icon"></i>
          <p className="menu_text">cities</p>
          <i className="settings_icon"></i>
          <p className="menu_text">settings</p>
        </div>
       <div className="middle-content">
         <div className="activities-content">
           <div className="title-wrap">
             <i className="love_icon"></i>
             <p className="title_text">Activities in your area</p>
           </div>
           <div className="images_wrap">
             <div className="image_wrap">
               <img src={first_activity} alt="first_activity" className="activity_img" />
               <p className="activity_text">2km away</p>
             </div>
             <div className="image_wrap">
               <img src={second_activity} alt="second_activity" className="activity_img" />
               <p className="activity_text">1.5km away</p>
             </div>
             <div className="image_wrap">
               <img src={third_activity} alt="third_activity" className="activity_img" />
               <p className="activity_text">3km away</p>
             </div>
             <div className="image_wrap">
               <img src={fourth_activity} alt="fourth_activity" className="activity_img" />
               <p className="activity_text">500m away</p>
             </div>
           </div>
       </div>
         <div className="graphic_block">
           <img src={graphic_img} alt="graphic" />
         </div>
       </div>
        <div className="detailed_content">
          <Slider {...settings}>
            <div className="block">
              <p className="end_text">Fri</p>
              <img src={cloud} alt="icon" className="first_cond"/>
            </div>
            <div className="block">
              <p className="middle_text">Sat</p>
              <img src={sun_icon} alt="icon" className="second_cond"/>
            </div>
            <div className="block">
              <p className="center_text">Sun</p>
              <img src={clear_icon} alt="icon" className="third_cond"/>
            </div>
            <div className="block">
              <p className="middle_text">Mon</p>
              <img src={rainy_icon} alt="icon" className="fourth_cond"/>
            </div>
            <div className="block">
              <p className="end_text">Tue</p>
              <img src={thunder_icon} alt="icon" className="fifth_cond"/>
            </div>
          </Slider>
          <div className="time_block">
            <i className="time"></i>
            <p className="time_text">8:00PM GMT</p>
          </div>
          <div className="air_conditions_block">
            <div className="detail_title">
              <h2>AIR CONDITIONS</h2>
            </div>
            <div className="temp_block">
              <div className="union_block">
                <i className="temp_icon"></i>
                <p className="subj">Real Feel</p>
              </div>
              <p className="detail">30°</p>
            </div>
            <div className="wind_block">
              <div className="union_block">
                <i className="wind_icon"></i>
                <p className="subj">Wind</p>
              </div>
              <p className="detail">0.8 km/hr</p>
            </div>
            <div className="rain_block">
              <div className="union_block">
                <i className="rain_icon"></i>
                <p className="subj">Chance of rain</p>
              </div>
              <p className="detail">2 %</p>
            </div>
            <div className="uv_block">
              <div className="union_block">
                <i className="uv_icon"></i>
                <p className="subj">UV Index</p>
              </div>
              <p className="detail">4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp;