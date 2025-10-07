const APIKEY = "fd5a516e63b8ddc267df79fd5e4292b6";
const icons = document.querySelector(".icon");
const button = document.querySelector("button");

button.addEventListener('click',()=>{
    const city = document.querySelector('#inputbox').value.trim();
     if (city === ""){
        alert("pleae enter a city name");
        return;
     }
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`;

     fetch(url)
     .then((response)=>{
        if (!response.ok){
            throw new Error("city not found");
            
        }
        return response.json();
     })
     .then((data)=>{
        console.log(data);
         document.querySelector('#city').innerHTML = data.name;
            document.querySelector('#humidity').innerHTML = data.main.humidity + "%";
            document.querySelector('#wind').innerHTML = data.wind.speed + " km/h";
            document.querySelector('#temp').innerHTML = data.main.temp + "°C";
              const weatherType = data.weather[0].main.toLowerCase(); 
            if (weatherType === "rain") {
                icons.src = "images/rain.png";
            } else if (weatherType === "clouds") {
                icons.src = "images/clouds.png";
            } else if (weatherType === "clear") {
                icons.src = "images/clear.png";
            } else if (weatherType === "snow") {
                icons.src = "images/snow.png";
            } else {
                icons.src = "images/mist.png";
            }
            if (weatherType === "rain") {
               document.querySelector('#ans').innerHTML = "rainy";
            } else if (weatherType === "clouds") {
                document.querySelector('#ans').innerHTML = "cloudy";
            } else if (weatherType === "clear") {
                document.querySelector('#ans').innerHTML = "clear sky";
            } else if (weatherType === "snow") {
               document.querySelector('#ans').innerHTML = "snowy";
            } else {
               
            }


     })
     .catch((error) => {
            alert(error.message);
            console.error(error);
        });
});