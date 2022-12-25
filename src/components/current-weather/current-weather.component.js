import React from "react";
import moment from "moment/moment";
import "./current-weather.style.scss"
// import Search from "../search/search.component";

const CurrentCard=(props)=>{
    const get = (p, o) =>
    (p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o))
    const city =get(['currentData','name'],props)
    const timezone =get(['currentData','timezone'],props)
    const temp=get(['currentData','main','temp'],props)
    const pressure=get(['currentData','main','pressure'],props)
    const humidity=get(['currentData','main','humidity'],props)
    const feelsLike=get(['currentData','main','feels_like'],props)
    const min=get(['currentData','main','temp_min'],props)
    const max=get(['currentData','main','temp_max'],props)
    const icon = get(['currentData','weather',0,'icon'],props)
    const des = get(['currentData','weather',0,'description'],props)
    const sunrise=(get(['currentData','sys','sunrise'],props))
    const sunset=(get(['currentData','sys','sunset'],props))
    const country=(get(['currentData','sys','country'],props))
    const speed=(get(['currentData','wind','speed'],props))

console.log(props)
        return(
                <div className="current-card">
                    
                        <div className="description">
                            <div className="left-dir">
                                <h1 className="city">{city}, {country}</h1>
                                <div>{des}</div>
                            </div>
                            <div>
                                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}/>
                                
                            </div>
                        </div>
        
        
                    <div className="temperature">
                        <label>Temperature</label>{temp}°C
                    </div>
                    <div className="max-min">
                            <div><label>Min</label>{min}°C</div>
                            <div><label>Max</label>{max}°C</div>                            
                    </div>
                    <div className="detail">
                        <div className="label">
                            <div>Feels Like:</div>
                            <div>Pressure:</div>
                            <div>Humidity:</div>
                            <div>Wind Speed:</div>
                            <div>Sunrise:</div>
                            <div>Sunset:</div>
                        </div>
                        <div className="value">
                            <div>{feelsLike}°C</div>
                            <div>{pressure}hPa</div>
                            <div>{humidity}%</div>
                            <div>{speed}m/sec</div>
                            <div>{moment.utc(sunrise,'X').add(timezone,'seconds').format('HH:mm a')}</div>
                            <div>{moment.utc(sunset,'X').add(timezone,'seconds').format('HH:mm a')}</div>
                        </div>
                    </div>
                </div>
            )
    }

export default CurrentCard