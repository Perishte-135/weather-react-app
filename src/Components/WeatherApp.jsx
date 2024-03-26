import React, {useState} from 'react';
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
  const [inputValue, setInputValue] = useState('');
  const [weatherData, setWeatherData] = useState('');
  const [errorText, setErrorText] = useState("");
  const API_KEY = "981449d42dee0d5e8e44fd764e52bd2c";
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  }

  const handleSearchCity = async() => {
    if(inputValue === "") {
      const error = document.querySelector('.error_text');
      error.style.display = "block";
      setErrorText("Please fill in the City name!");
      return;
    }
    try {
      if(inputValue !== "") {
        const error = document.querySelector('.error_text');
        error.style.display = "none";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}`;
        const response = await fetch(url);
        if (response.status === 404) {
          const error = document.querySelector('.error_text');
          error.style.display = "block";
          setErrorText("City not found! Try again");
          return;
        }
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
        console.log(weatherData);
      }
    } catch(err) {
      const error = document.querySelector('.error_text');
      error.style.display = "block";
      setErrorText("Error happened while fetching weather data!", err);
    }
  }

  //to get date from unix time
  const months = [
    "Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug",
    "Sep", "Oct", "Nov", "Dec"
  ];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const unixTime = weatherData.dt;
  const milliseconds = unixTime * 1000;
  const date = new Date(milliseconds);
  const year = date.getFullYear();
  const monthIndex = date.getMonth(); // Month starts from 0
  const day = date.getDate();
  const monthName = months[monthIndex];
  const dayOfWeekIndex = date.getDay();
  const dayOfWeekName = daysOfWeek[dayOfWeekIndex];
  //to get time
  const hours = date.getHours();
  const minutes = date.getMinutes();
  let adjustedHours = hours + weatherData.timezone;
  if (adjustedHours < 0) {
    adjustedHours += 24;
  } else if (adjustedHours >= 24) {
    adjustedHours -= 24;
  }

// Format the adjusted time
  const adjustedFormattedHours = adjustedHours % 12 || 12;
  const adjustedAmOrPm = adjustedHours >= 12 ? 'PM' : 'AM';
  const adjustedTime = `${adjustedFormattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${adjustedAmOrPm}`;
  const dateString = `${dayOfWeekName} | ${day} ${monthName} ${year}`;


  return(
    <div className="container">
      <div className="top-content">
        <div className="info-content">
          <div className="error_text">{errorText}</div>
          <div className="location-wrap">
            <i className="location"></i>
            <input type="text" placeholder="New York" className="cityName" value={inputValue} onChange={handleInputValue} />
            <img src={arrow_icon} alt="arrow" className="arrow" onClick={handleSearchCity} />
          </div>
          <h3 className="weather_condition">{weatherData && weatherData.weather && weatherData.weather.length > 0 ? weatherData.weather[0].main : ''}</h3>
          {weatherData && weatherData.main && typeof weatherData.main.temp !== 'undefined' && (
            <h2 className="temp">{Math.ceil(weatherData.main.temp - 273)}°C</h2>
          )}
          <p className="date">
            {dateString}
            {/*{weatherData.dt}*/}
          </p>
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
              <p className="center_text">{dayOfWeekName}</p>
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
            <p className="time_text">
              {adjustedTime} GMT
            </p>
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
              {weatherData && weatherData.main && typeof weatherData.main.temp !== 'undefined' && (
                <p className="detail">{Math.ceil(weatherData.main.feels_like - 273)}°C</p>
              )}
            </div>
            <div className="wind_block">
              <div className="union_block">
                <i className="wind_icon"></i>
                <p className="subj">Wind</p>
              </div>
              <p className="detail">{weatherData && weatherData.wind && typeof weatherData.wind.speed !=='undefined'? `${weatherData.wind.speed} km/hr` : ''}</p>
            </div>
            <div className="rain_block">
              <div className="union_block">
                <i className="rain_icon"></i>
                <p className="subj">Chance of rain</p>
              </div>
              <p className="detail">{weatherData && weatherData.main && typeof weatherData.main.humidity!=='undefined'? `${weatherData.main.humidity} %` : ''}</p>
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