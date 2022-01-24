$(document).ready(function () {
  // $(this).scrollTop(0);

  const topArrow = () => {
    $(window).scrollTop(0);
  };

  $(".topArrow").click(function () {
    topArrow();
  });

  // geolocation part
  let show = document.getElementById("weather");
  function geolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geo Not Supported");
    }
  }

  function showPosition(data) {
    if (data) {
      $("#we-ui").css("opacity", "1");
    }
    // x.innerText = `Latitude is ${data.coords.latitude}, longitude is ${data.coords.longitude}`;
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    var url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=-37.575481&lon=144.9017411&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    // var url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${data.coords.latitude},${data.coords.longitude}&key=`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log("check", data);
        document.getElementById("country-name").innerText = data.city.country;
        document.getElementById("city-name").innerText = data.city.name;
        /*data.list.map((item) => {
    console.log(item.temp.day)
    y.innerText=`${item.temp.day}°C and ${item.weather[0].description}`
    z.innerHTML=`<img class='card-img-top' src='https://openweathermap.org/img/w/${item.weather[0].icon}.png'
        alt='weather' />`
    })*/
        data.list.map((item) => {
          // console.log(item);
          document.getElementById("min-tem").innerText = item.temp.min;
          document.getElementById("max-tem").innerText = item.temp.max;
          document.getElementById("desc").innerText =
            item.weather[0].description;
        });
      });
  }

  // window.onload = geolocation();

  $("#weather-button").click(function () {
    $(".mainContainer").toggle("slow");
  });
});
