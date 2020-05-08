//DOM SELECTORS
const header = document.querySelector("header")
const titleColour = document.querySelector("h1 span")
const newColours = document.querySelector("#new-colours")
const easyMode = document.querySelector("#easy")
const hardMode = document.querySelector("#hard")
let cards = document.querySelectorAll(".card")

//FUNCTIONS
let randomColourIndex = () => Math.floor(Math.random() * 256)
let randomCardIndex = () => Math.floor(Math.random() * 6)
let randomCardIndexEasy = () => Math.floor(Math.random() * 3)
let randomColour = () => `(${randomColourIndex()}, ${randomColourIndex()}, ${randomColourIndex()})`
let wonGame = () => {
    cards.forEach((elem) => {
        elem.style.background = `rgb${mainColour}`
        header.style.background = `rgb${mainColour}`
    })
}
let newGame = () => {
    //New random colour and card
    mainColour = randomColour()
    mainCard = randomCardIndex()
    //Ensure that main card is between 1-3 for easy mode
    if (easyMode.classList.contains("active")) { mainCard = randomCardIndexEasy()}
    //change h1 element to display rgb value
    titleColour.textContent = mainColour
    //change header colour back to default
    header.style.background = "#3B76AD"
    //Increment game count
    gameCount++

    cards.forEach((elem, i) => {
        if (i !== mainCard) {
            elem.style.background = elem.style.color = `rgb${randomColour()}`
        } else {
            elem.style.background = elem.style.color = `rgb${mainColour}`
        }
        console.log(elem.style.color)
        if (gameCount === 1) {
            elem.addEventListener("click", () => {
                if (elem.style.color === `rgb${mainColour}`) {
                    wonGame()
                } else {
                    console.log("Wrong")
                }
            })
        }
    })
}
let updateMode = () => {
    if (easyMode.classList.contains("active")) {
        //Easy Mode Code
        for(var i = 3; i < 6; i++) {
            cards[i].classList.remove("card")
            cards[i].style.background = "#1F1F1F"
        }
        cards = document.querySelectorAll(".card")
        newGame()
    } else {
        //Hard Mode Code
        let fullCards = document.querySelectorAll(".colour-grid div")
        for (var i = 0; i < 6; i++) {
            if (!(fullCards[i].classList.contains("card"))){
                fullCards[i].classList.add("card")
            }
        }
        cards = document.querySelectorAll(".card")
        newGame()
    }
}

//MAIN
let mainColour = randomColour()
let mainCard = randomCardIndex()
let gameCount = 0
titleColour.textContent = mainColour
hardMode.classList.add("active")

newGame()

hardMode.addEventListener("click", () => {
    if (!(hardMode.classList.contains("active"))){
        //Not Active
        easyMode.classList.remove("active")
        hardMode.classList.add("active")
        updateMode()
    } 
})

easyMode.addEventListener("click", () => {
    if (!(easyMode.classList.contains("active"))) {
        //Not Active
        hardMode.classList.remove("active")
        easyMode.classList.add("active")
        updateMode()
    }
})

newColours.addEventListener("click", () => {
    newGame()
})