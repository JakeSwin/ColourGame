//DOM SELECTORS
const header = document.querySelector("header")
const titleColour = document.querySelector("h1 span")
const cards = document.querySelectorAll(".card")
const newColours = document.querySelector("#new-colours")
const easyMode = document.querySelector("#easy")
const hardMode = document.querySelector("#hard")

//FUNCTIONS
let randomColourIndex = () => Math.floor(Math.random() * 256)
let randomCardIndex = () => Math.floor(Math.random() * 6)
let randomColour = () => `(${randomColourIndex()}, ${randomColourIndex()}, ${randomColourIndex()})`
let wonGame = () => {
    cards.forEach((elem) => {
        elem.style.background = `rgb${MainColour}`
        header.style.background = `rgb${MainColour}`
    })
}

//MAIN
let MainColour = randomColour()
let MainCard = randomCardIndex()
titleColour.textContent = MainColour

cards.forEach((elem, i) => {
    if (i !== MainCard) {
        elem.style.background = elem.style.color = `rgb${randomColour()}`
    } else {
        elem.style.background = elem.style.color = `rgb${MainColour}`
    }
    console.log(elem.style.color)
    elem.addEventListener("click", () => {
        if (elem.style.color === `rgb${MainColour}`) {
            wonGame()
        } else {
            console.log("Wrong")
        }
    })
})