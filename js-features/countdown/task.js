/*const timer = document.getElementById("timer");
let timerID;
timerID = setInterval(() => {
  if (timer.textContent > 0) {
    return timer.textContent--;
  }
  alert("Вы победили в конкурсе!");
  clearInterval(timerID);
  return (timer.textContent = 59);
}, 1000);*/

const timer = document.getElementById("timer");
let a = document.getElementById("file");
let hours = Number(timer.textContent.slice(0, 2));
let minutes = Number(timer.textContent.slice(3, 5));
let seconds = Number(timer.textContent.slice(6, 8));
let render = function (template = "h:m:s") {
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }

  timer.textContent = template
    .replace("h", hours)
    .replace("m", minutes)
    .replace("s", seconds);
};

timerID = setInterval(() => {
  hours = Number(timer.textContent.slice(0, 2));
  minutes = Number(timer.textContent.slice(3, 5));
  seconds = Number(timer.textContent.slice(6, 8));
  if (seconds > 0) {
    seconds--;
  } else if (seconds === 0 && minutes > 0) {
    seconds = 59;
    minutes--;
  } else if (seconds === 0 && minutes === 0 && hours > 0) {
    seconds = 59;
    minutes = 59;
    hours--;
  } else if (seconds === 0 && minutes === 0 && hours == 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(timerID);
    seconds = 59;
    minutes = 59;
    hours = 59;

    a.click();
  }

  render();
}, 1000);
