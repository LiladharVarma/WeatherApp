import React, { useEffect, useState } from "react";
import Search from "./Search";
import cloudSun from "../images/cloudsun2.png";
import cloudRain from "../images/cloudRain.png";
import cloudHardrain from "../images/cloudHardrain.png";

function Card() {
  //to store the inputText coming from Search Component
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(false);

  //Actual data we are going to display
  const [data, setData] = useState({
    cityName: "",
    description: "",
    temperature: "",
    humidity: "",
    wind: "",
  });

  //getting input query from search component

  function getData(inputText, isSearched) {
    console.log("input Card :", inputText);
    setQuery(inputText);
    setSearch(isSearched);
  }

  //required api parameters

  const apiId = "1d876bafc6abc49a4536ba998fa12b68";
  const openWeatherApi = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=Metric&appid=${apiId}`;

  //fetching data from api
  useEffect(() => {
    fetch(openWeatherApi)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data !== null && data.list.length > 0) {
          setData({
            cityName: data.city.name,
            description: data.list[0].weather[0].description,
            temperature: data.list[0].main.temp,
            humidity: data.list[0].main.humidity,
            wind: data.list[0].wind.speed,
          });
        }
      })
      .catch((error) => {
        console.error("error fetching weather Data ", error);
      });
  }, [query,search]);

  return (
    <div className="card">
      <Search onSearch={getData} />

      {/* {search ? 
        <div className="main-card">
        
        <h1>{data.cityName}</h1>
        <h1>{data.description}</h1>
        <h1>{data.temperature}°C</h1>
        <h1>{data.humidity}%</h1>
        <h1>{data.wind}m/s</h1>
      </div>:
      null} */}

      {search ? (
        <div className="main-card">
          <div className="icon-container">
            <img src={data.description === "light rain" || data.description === "rain"? cloudRain : cloudSun } alt="CloudImages" />
          </div>

          <h1 className="heading">{data.cityName}</h1>
          <h2 className="description">{data.description}</h2>

          <div className="paramerters">
            <div className="items">
              <h3>{data.temperature}°C</h3>
              <p>temperature</p>
            </div>
            <div className="items">
              <h3>{data.humidity}%</h3>
              <p>humidity</p>
            </div>
            <div className="items">
              <h3>{data.wind}m/s</h3>
              <p>wind speed</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Card;
