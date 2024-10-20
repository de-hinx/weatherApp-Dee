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
  let parisTime = moment().tz("America/Los_Angeles");

  dateParis.innerHTML = parisTime.format("MMMM Do YYYY");
  timeParis.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}
setInterval(updateTime, 1000);
