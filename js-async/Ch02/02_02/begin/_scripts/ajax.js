function get(url) {
    return new Promise((resolve, reject) => {
        let httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', url);
        httpRequest.onload = function() {
            if (httpRequest.status === 200) {
                resolve(httpRequest.responseText);
            } else {
                reject(Error(httpRequest.status));
            }
        }
        httpRequest.onerror = () => {
            reject(Error('Network Error'));
        }
        httpRequest.send();
    })
};

function successHandler(data) {
    const dataObj = JSON.parse(data);
    const weatherDiv = document.querySelector('#weather');
    const div = `
        <h2 class="top">
        <img
            src="http://openweathermap.org/img/w/${dataObj.weather[0].icon}.png"
            alt="${dataObj.weather[0].description}"
            width="50"
            height="50"
        />${dataObj.name}
        </h2>
        <p>
        <span class="tempF">${tempToF(dataObj.main.temp)}&deg;</span> | ${dataObj.weather[0].description}
        </p>
    `
    return div
}

function failHandler(status) {
    console.log(status);
}

function tempToF(kelvin) {
    return ((kelvin - 273.15) * 1.8 + 32).toFixed(0);
}

document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '58748f2a8d98a84d9e4428c1fa051d70';
    const weatherDiv = document.querySelector('#weather');

    const locations = [
        'los+angeles,us',
        'san+francisco,us',
        'lone+pine,us',
        'mariposa,us'
    ];

    const urls = locations.map(location => {
        return `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;
    })
    // const apiKey = '';
    // get(url, successHandler, failHandler);
    // console.log(get(url));
    Promise.all([get(urls[0]), get(urls[1]), get(urls[2]), get(urls[3])])
        .then(responses => { //this equates to the resolve of the new Promise
            return responses.map(response => {
                return successHandler(response);
            })
        })
        .then(literals => {
            weatherDiv.innerHTML = `<h1>Weather</h1>${literals.join('')}`;
        })
        .catch(status=> { // this equates to the rject of the new Promise
            failHandler(status);
        })
        .finally( () => {
            weatherDiv.classList.remove('hidden');
        });
});