let homeScore = 0
let guestScore = 0

let scoreHome = document.getElementById('score-home')
let scoreGuest = document.getElementById('score-guest')

function add1Home() {
    scoreHome.textContent = homeScore += 1
}

function add2Home() {
    scoreHome.textContent = homeScore += 2
}

function add3Home() {
    scoreHome.textContent = homeScore += 3
}

function add1Guest() {
    scoreGuest.textContent = guestScore += 1
}

function add2Guest() {
    scoreGuest.textContent = guestScore += 2
}

function add3Guest() {
    scoreGuest.textContent = guestScore += 3
}

function resetGame() {
    homeScore = 0
    guestScore = 0
    scoreGuest.textContent = 0
    scoreHome.textContent = 0
}