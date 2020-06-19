//SELECTION
let date = document.getElementById('date')
let submit = document.getElementById('submit')

let endnote = document.querySelector(".endnote")
//INTRO-POPUPS SELECTION
let gotoBtn = document.querySelector('.goto')
let introDiv = document.querySelector('.open')

//SUBMISSIONS POPUPS SELECTION
let closeBtn = document.querySelector('.close')
let resultDiv = document.querySelector('.results-div')
let result = document.querySelector('.result')
let aries = document.querySelector('.aries')
let aquarius = document.querySelector('.aquarius')
let capricorn = document.querySelector('.capricorn')
let cancer = document.querySelector('.cancer')
let gemini = document.querySelector('.gemini')
let leo = document.querySelector('.leo')
let libra = document.querySelector('.libra')
let pisces = document.querySelector('.pisces')
let sagittarius = document.querySelector('.sagittarius')
let scorpio = document.querySelector('.scorpio')
let taurus = document.querySelector('.taurus')
let virgo = document.querySelector('.virgo')

//FUNCTIONS
function showResult (e) {
    e.preventDefault()
    if(date.value === 'Aries') {
        resultDiv.classList.add('active') 
        aries.classList.add('show')
    } else if (date.value === 'Aquarius') {
        resultDiv.classList.add('active') 
        aquarius.classList.add('show')
    } else if (date.value === 'Cancer'){
        resultDiv.classList.add('active') 
        cancer.classList.add('show')
    } else if (date.value === 'Capricorn') {
        resultDiv.classList.add('active') 
        capricorn.classList.add('show')
    } else if (date.value === 'Gemini'){
        resultDiv.classList.add('active') 
        gemini.classList.add('show')
    } else if (date.value === 'Leo') {
        resultDiv.classList.add('active') 
        leo.classList.add('show')
    } else if (date.value === 'Libra'){
        resultDiv.classList.add('active') 
        libra.classList.add('show')
    } else if (date.value === 'Pisces') {
        resultDiv.classList.add('active') 
        pisces.classList.add('show')
    } else if (date.value === 'Sagittarius'){
        resultDiv.classList.add('active') 
        sagittarius.classList.add('show')
    } else if (date.value === 'Scorpio') {
        resultDiv.classList.add('active') 
        scorpio.classList.add('show')
    } else if (date.value === 'Taurus'){
        resultDiv.classList.add('active') 
        taurus.classList.add('show')
    } else if (date.value === 'Virgo') {
        resultDiv.classList.add('active') 
        virgo.classList.add('show')
    } 
}

//EVENTS
gotoBtn.addEventListener('click', function () {
    introDiv.classList.add('inactive')
})
closeBtn.addEventListener('click', function() {
    result.classList.remove("show")
    resultDiv.classList.remove('active') 
     endnote.classList.add('showendnote') 
})
submit.addEventListener('click', showResult)

