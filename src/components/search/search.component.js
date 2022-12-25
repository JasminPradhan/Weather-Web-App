import React, {useEffect, useState} from "react";
import CurrentCard from "../current-weather/current-weather.component";
import { ForecastCard } from "../forcast-weather/forecast-weather.component";
import { CiSearch } from "react-icons/ci";
import "./search.style.scss"

const Search =()=>{
    const [currentData, setCurrentData]=useState([]);
    const [forecastData, setForecastData]=useState([]);
    const [query,setQuery] = useState("Bhubaneswar");
    const [error,setError] = useState("");

useEffect(()=>{
    const weatherInfo=async(e)=>{
        await fetch(`${process.env.REACT_APP_API_URL}/weather?q=${query}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then((res)=>res.json())
        .then((res)=>setCurrentData(res))

        await fetch(`${process.env.REACT_APP_API_URL}/forecast?q=${query}&cnt=5&appid=${process.env.REACT_APP_API_KEY}`)
        .then((res)=>res.json())
        .then((res)=>setForecastData(res))
    }
    weatherInfo();
},[query])

    return(
        <div className="weather-comp">
        <form onSubmit={(e)=>{
            e.preventDefault();
        }}>
            <div className="search-bar">
                <input
                type="text"
                placeholder="search city"
                onChange={(e)=>{
                    e.stopPropagation();
                    e.nativeEvent.stopImmediatePropagation();
                    setQuery(e.target.value)}
                }
                />
                <div className="btn">
                    <button type="submit" value={query}><CiSearch/></button>
                </div>
            </div>
        <CurrentCard 
        currentData={currentData} 
        />
        <ForecastCard forecastData={forecastData}/>
        </form>
        </div>
    )
}

export default Search