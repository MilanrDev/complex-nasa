// kev s. helped me


  const url = 'https://data.nasa.gov/resource/gvk9-iz74.json'


  fetch(url)
  .then(res => res.json())
  .then(data => {
    // this loop itterates through the list of facilities
    for (let i = 0; i < 3; i++) {
      let longitude = data[i].location.longitude
      let latitude = data[i].location.latitude
      const facility = document.createElement('li')

      let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&long=${longitude}
      &appid=9189954300d2f0634806dcd19bcd8d45`

// this is a nested fetch
  fetch(weatherUrl)
  .then(res => res.json())
  .then(dataWeather => {
    console.log(dataWeather)

    console.log(dataWeather.main.temp)
    const temps = document.createTextNode(data[i].center+dataWeather.main.temp)
    facility.appendChild(temps)
    document.querySelector('ul').appendChild(facility)

      })
    }
  })
