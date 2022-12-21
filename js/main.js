const countdown = () => {
  const countDate = new Date("Jan 03, 2023 00:00:00").getTime()
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour)
  const textMinute = Math.floor((gap % hour) / minute)
  // const textSecond = Math.floor((gap % minute) / second)
  document.querySelector(".day").innerText = textDay
  document.querySelector(".hour").innerText = textHour
  document.querySelector(".minute").innerText = textMinute
  // document.querySelector(".second").innerText = textSecond

  if (textDay === 1) {
    document.getElementById("days").innerHTML = 'Dia';
  } else {
    document.getElementById("days").innerHTML = "Dias";
  }


  if (textHour === 1) {
    document.getElementById("hour").innerHTML = 'Hora';
  } else {
    document.getElementById("hour").innerHTML = "Horas";
  }

  if (textMinute === 1) {
    document.getElementById("minutos").innerHTML = 'Minuto';
  } else {
    document.getElementById("minutos").innerHTML = "Minutos";
  }


}
setInterval(countdown, 1000)
