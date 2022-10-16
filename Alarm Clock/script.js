let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let amPm = document.getElementById("amPm");
let audio = new Audio("sound/ringtone.mp3");
let alarmTime;

setInterval(() => {
  let date = new Date();
  let getHours = date.getHours();
  let getMinutes = date.getMinutes();
  let getSeconds = date.getSeconds();

  if (getHours >= 12) {
    amPm.innerText = `PM`;
    getHours = getHours - 12;
  } else {
    amPm.innerText = `AM`;
  }

  getHours = getHours == 00 ? `12` : getHours;
  getHours = getHours < 10 ? `0${getHours}` : getHours;
  getMinutes = getMinutes < 10 ? `0${getMinutes}` : getMinutes;
  getSeconds = getSeconds < 10 ? `0${getSeconds}` : getSeconds;

  hours.innerHTML = getHours;
  minutes.innerHTML = getMinutes;
  seconds.innerHTML = getSeconds;

  if (alarmTime === `${getHours}:${getMinutes} ${amPm.innerText}`) {
    audio.play();
    audio.loop = true;
  }
});

let setHours = document.getElementById("setHours");
let setMinutes = document.getElementById("setMinutes");
let setAmPm = document.getElementById("setAmPm");

for (let i = 1; i <= 12; i++) {
  i = i < 10 ? `0${i}` : i;
  let option = document.createElement("option");
  option.innerHTML = ` <option value="${i}">${i}</option>`;
  setHours.appendChild(option);
}
for (let i = 0; i <= 59; i++) {
  i = i < 10 ? `0${i}` : i;
  let option = document.createElement("option");
  option.innerHTML = ` <option value="${i}">${i}</option>`;
  setMinutes.appendChild(option);
}
for (let i = 0; i < 2; i++) {
  let ampm = i == 0 ? "AM" : "PM";
  let option = document.createElement("option");
  option.innerHTML = `<option value="${ampm}">${ampm}</option>`;
  setAmPm.appendChild(option);
}

let selectTime = document.querySelector(".selectTime");
let setAlarm = document.getElementById("setAlarm");
setAlarm.addEventListener("click", () => {
  setAlarmClock();
});

const setAlarmClock = () => {
  let time = `${setHours.value}:${setMinutes.value} ${setAmPm.value}`;
  if (
    time.includes("Hour") ||
    time.includes("Minute") ||
    time.includes("AM/PM")
  ) {
    return alert("Please, select a valid time to set Alarm!");
  }

  if (setAlarm.textContent === "Set Alarm") {
    alarmTime = time;
    setAlarm.textContent = "Clear Alarm";
    selectTime.classList.add("disable");
  } else {
    alarmTime = "";
    audio.pause();
    setAlarm.textContent = "Set Alarm";
    selectTime.classList.remove("disable");
  }
};
