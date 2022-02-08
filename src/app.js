// JS for hamburger menu dropdown

const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('navList')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)


// JS for flip card functionality 

const cards = document.querySelectorAll('.project-card');

function flipCard() {
    this.classList.toggle("flipCard");
}
cards.forEach((card) => card.addEventListener("click", flipCard))