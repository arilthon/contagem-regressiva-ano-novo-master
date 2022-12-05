const secondsContainer = document.querySelector("#seconds");
const minutesContainer = document.querySelector("#minutes");
const hoursContainer = document.querySelector("#hours");
const daysContainer = document.querySelector("#days");
const spinnerLoading = document.querySelector("#loading");
const countdownContainer = document.querySelector("#countdown");
const nextYearContainer = document.querySelector("#year");

const nextYear = new Date().getFullYear() //+ 1; //Ano atual + 1
const newYearTime = new Date(`december 24 ${nextYear} 00:00:00`);

nextYearContainer.textContent = `Natal dos Lopes`//nextYear;

const getTimeUnit = (unit) => (unit < 10 ? "0" + unit : unit);

const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
  secondsContainer.textContent = getTimeUnit(seconds);
  minutesContainer.textContent = getTimeUnit(minutes);
  hoursContainer.textContent = getTimeUnit(hours);
  daysContainer.textContent = getTimeUnit(days);
};

const updateCountdown = () => {
  const currentTime = new Date();
  const difference = newYearTime - currentTime;
  const days = Math.floor(difference / 1000 / 60 / 60 / 24); //dia
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24; //hora
  const minutes = Math.floor(difference / 1000 / 60) % 60; //minutos
  const seconds = Math.floor(difference / 1000) % 60; //segundos

  insertCountdownValues({ days, hours, minutes, seconds });
};

const handleCountDisplay = () => {
  spinnerLoading.remove();
  countdownContainer.style.display = "flex";
};

setTimeout(handleCountDisplay, 1000);

setInterval(updateCountdown, 1000);
