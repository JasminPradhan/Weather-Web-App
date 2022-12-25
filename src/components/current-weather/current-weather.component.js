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
    const min=get(['currentData','main','temp_min'],props)
    const max=get(['currentData','main','temp_max'],props)
    const icon = get(['currentData','weather',0,'icon'],props)
    const des = get(['currentData','weather',0,'description'],props)
    const sunrise=(get(['currentData','sys','sunrise'],props))
    const sunset=(get(['currentData','sys','sunset'],props))

console.log(props)
    if(!props)
    {
        return(<div>Nothing to display</div>)
    }
    if(props.cod===404)
    {
        return(<div>country doesnt exits</div>)
    }
    // const weather= props.dat
    else{
        return(
            //     if(props.cod===400)
            //     {
        
            //     }
                <div className="current-card">
                    <div>
                        <div className="description">
                            <div className="left-dir">
                                <h1 className="city">{city}</h1>
                                <div>{des}</div>
                            </div>
                            <div>
                                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}/>
                                
                            </div>
                        </div>
        
        
                    <div className="temperature">
                        <label>Temperature</label>{temp}
                    </div>
                    <div className="max-min">
                            <div><label>Min</label>{min}</div>
                            <div><label>Max</label>{max}</div>                            
                        </div>
                        
                    </div>
                    <div>
                        <span><label>Sunrise:</label>{moment.utc(sunrise,'X').add(timezone,'seconds').format('HH:mm a')}</span>
                        <span><label>Sunset:</label>{moment.utc(sunset,'X').add(timezone,'seconds').format('HH:mm a')}</span>
                    </div>
                </div>
            )

    }
    
}

export default CurrentCard