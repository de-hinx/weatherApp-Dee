// alert(`Hello`);
function updateTime() {
  let losAngeles = document.querySelector("#los-angeles");

  let dateLosAng = losAngeles.querySelector(".date");
  let timeLosAng = losAngeles.querySelector(".time");
  let losAngTime = moment().tz("America/Los_Angeles");

  dateLosAng.innerHTML = losAngTime.format("MMMM Do YYYY");
  timeLosAng.innerHTML = losAngTime.format("h:mm:ss [<small>]A[</small>]");

  let newParis = document.querySelector("#paris");

  let dateParis = newParis.querySelector(".date");
  let timeParis = newParis.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  dateParis.innerHTML = parisTime.format("MMMM Do YYYY");
  timeParis.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}
setInterval(updateTime, 1000);

function updateCity(event) {
  let newTimezone = event.target.value;
  let cityTime = moment().tz(newTimezone);
  let cities = document.querySelector(".cities");
  cities.innerHTML = `<div class="flex">
        <div class="drop-down">
          <div class="city">${newTimezone}</div>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
      </div>`;

  if (newTimeZone === current) {
    newTimeZone = moment.tz.guess();
  }
}

let selectCity = document.querySelector("#search-city");
selectCity = addEventListener("change", updateCity);
