

let btnDarkMode = document.querySelector(".btn-dark-mode")
let countriesSearchInput = document.querySelector(".countries-search-input")

btnDarkMode.addEventListener('click',() => {
    document.body.classList.add('dark-mode')
    // countriesSearchInput.styles.background-image.add('url')
    changeBg()
})

btnDarkMode.addEventListener('click',() => {
    
    

   
    // countriesSearchInput.styles.background-image.add('url')
   
})


function changeBg() {
    countriesSearchInput.style.backgroundImage = './images/icon-search-white.svg';
}