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

localStorage.setItem('It\'s a secret to everybody.', '10th enemy has the bomb.')
//Both are quotes from the original Legend of Zelda on NES


//Week 6
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

const prev = document.querySelector('#prev')
prev.addEventListener('click', event => {
    if (currentImage >= 1) 
        {
            currentImage -= 1
            showImages()
        } else {
            currentImage = 4
            showImages()
        }
})
const next = document.querySelector('#next')
next.addEventListener('click', event => {
    if (currentImage <= 4) 
        {
            currentImage += 1
            showImages()
        } else {
            currentImage = 1
            showImages()
        }
})

setInterval(() => {
    if (currentImage <= 4) 
        {
            currentImage += 1
            console.log('currentImageSetInterval currentImage ID <= 4')
            showImages()
        } else {
            currentImage = 1
            console.log('currentImageSetInterval loop Pass')
            showImages()
        }
}, 5000)
showImages()

//End Week 6