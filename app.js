const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')
const nextYearContainer = document.querySelector('#year')

const nextYear = new Date().getFullYear() + 1 //Ano atual + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

nextYearContainer.textContent = nextYear

const updateCountdown = () => {
  const currentTime = new Date()
  const difference = newYearTime - currentTime
  const days = Math.floor(difference / 1000 / 60 / 60 / 24) //dia
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24 //hora
  const minutes = Math.floor(difference / 1000 / 60) % 60 //minutos
  const seconds = Math.floor(difference / 1000) % 60 //segundos

  secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
  minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
  hoursContainer.textContent = hours < 10 ? '0' + hours : hours
  daysContainer.textContent = days < 10 ? '0' : days
}

setTimeout(() => {
  spinnerLoading.remove()
  countdownContainer.style.display = 'flex'
}, 1000)

setInterval(updateCountdown, 1000)
