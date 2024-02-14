import React,{useState} from "react";
import Weather from "./Component/Weather";

const App = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const receiveWeatherData = (data) => {
    setWeatherInfo(data);
  };

  // Determine background color based on temperature
  const code = weatherInfo;

  let bgImg = "bg-main";

  switch(code) {

    case 1000:
    bgImg = "bg-sunny";
    break;
    
    case 1003:
    bgImg = "bg-partly-cloudy";
    break;
    
    case 1006:
    bgImg = "bg-cloudy";
    break;
    
    case 1009:
    bgImg = "bg-overcast";
    break;
    
    case 1030:
    bgImg = "bg-mist";
    break;
    

    case 1066:
    bgImg = "bg-snowy";
    break;
    
    case 1069:
    bgImg = "bg-cloudy";
    break;

    case 1114:
    bgImg = "bg-blowing-snow";
    break;

    case 1117:
    bgImg = "bg-blizzard";
    break;

    case 1063:
    bgImg = "bg-rain";
    break;

    case 1115:
    bgImg = "bg-fog";
    break;


    default:
    bgImg = "bg-main"
    }
      

 return(
  <div className= {` flex flex-col gap-10 justify-center items-center h-screen ${bgImg} bg-cover bg-center`}>
    <h1 className="text-center text-3xl font-medium ">Mausam Vibhag</h1>
    <Weather receiveWeatherData={receiveWeatherData}/>
    <div >
      <h2 className="text-lg">
        Made with 💌 by Durgesh Gupta
      </h2>
    </div>
  </div>
 )
};

export default App;
