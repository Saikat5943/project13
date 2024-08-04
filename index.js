const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('searchBtn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description=documnent.querySelector('.descripption');
const humidity=document.getElemenById('humidity');
const wind_speed=documnet.getElementById('wind_speed');
const location_not_found=documnet.querySelector('.location-not-found');
const weather_body=document.querySelector('.weather-body');
async function checkWeather(city){
    const api_key="33a273e5e9772e5dbaba435b719d8ee5";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data=await fetch(`${url}`).then(response=>response.json());
    if(weather_data.cod===`404`){
        location_not_found.style.display="flex";
        weather_body.style.dispaly="none"
        console.log("error");
        return;
    }
    location_not_found.style.display="none";
    weather_body.style.display="flex";
    temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
    description.innerHTML=`${weather_date.weather[0].description}`;
    humidity.innerHTMl=`${weather_data.main.humidity}%`;
    wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`;
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src="cloud.png.jpg";
            break;
        case 'Clear':
            weather_img.src="clear.png.jpg";
            break;
        case 'Rain':
            weather_img.src="rain.png.jpg";
            break;
        case 'Mist':
            weather_img.src="mist.png.jpg";
            break;
        case 'Snow':
            weather_img.src="snow.png.jpg";
            break;
    }
    console.log(weather_date);
}
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});

