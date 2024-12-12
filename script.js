let cityInput = document.getElementById('city_input'),
searchBtn = document.getElementById('searchBtn'),
api_key = 'c014a189f4ff662dc25e56c2b086ae08';

function getWeatherDetails(name, lat, lon, country, state){
    letFORECAST_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid={api_key}`,
    WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={api_key}`,
    days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ],
    months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];

    fetch(WEATHER_API_URL).then(res => res.json()).then(data => {
        console.log(data);
    }).catch(() => {
        alert('Failed to fetch current weather');
    });
}

function getCityCoordinates(){
    let cityName = cityInput.value.trim();
    cityInput.value = '';
    if(!cityName) return;
    let GEOCODING_API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid={api_key}`;
    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
        let {name, lat, lon, country, state} = data[0];
        getWeatherDetails(name, lat, lon, country, state);
    }).catch(() => {
        alert(`Failed to fetch coordinates of ${cityName}`);
    });
}

searchBtn.addEventListener('click', getCityCoordinates);