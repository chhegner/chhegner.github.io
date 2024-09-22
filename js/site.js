const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const Welcome = document.querySelector('#welcome')
if (isMorning == true) { //If it's morning, do this
    Welcome.textContent = ('Good Morning')
}
if (isAfternoon == true) { //If it's afternoon, do this instead
    Welcome.textContent = ('Good Afternoon')
}
if (isEvening == true) { //If it's evening, do this.
    Welcome.textContent = ('Good Evening')
}
//No else is needed because it is impossible for time to be outside of the 24 hour range

