let cityInput = document.getElementById('city_input'),
searchBtn = document.getElementById('searchBtn'),
api_key = 'c014a189f4ff662dc25e56c2b086ae08';

function getCityCoordinates(){
    let cityName = cityInput.value.trim();
    cityInput.value = '';
    if(!cityName) return;
    let GEOCODING_API_URL = 'http://api.openweathermap.org/geo/1.0/direct?q={cityName}&limit={limit}&appid={api_key}';
    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
        console.log(data);
    }).catch(() => {
        alert('Failed to fetch coordinates of ${cityName}');
    });
}

searchBtn.addEventListener('click', getCityCoordinates);