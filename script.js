// Biodiversity Buttons

const bioHidden = document.getElementById('biodiversity-hidden');
const btnBioMore = document.getElementById('biodiversity-more');
const btnBioLess = document.getElementById('biodiversity-less');

// when click on button "See more" 
// - display the second container and the button "See less"
// - hide button "See more"
btnBioMore.addEventListener('click',() => {

    bioHidden.classList.remove("hidden");
    btnBioLess.classList.remove("hidden");
    btnBioMore.classList.add("hidden");
})

// when click on button "See less" 
// - hide the second container and the button "See less"
// - display the button "See more"
btnBioLess.addEventListener('click', () => {

    bioHidden.classList.add("hidden");
    btnBioLess.classList.add("hidden");
    btnBioMore.classList.remove("hidden");
})


// Strategy Buttons

const strategyHidden = document.getElementById('strategy-hidden');
const btnStratMore = document.getElementById('strategy-more');
const btnStratLess = document.getElementById('strategy-less');

// when click on button "See more" 
// - display the second container and the button "See less"
// - hide button "See more"
btnStratMore.addEventListener('click',() => {

    strategyHidden.classList.remove("hidden");
    btnStratLess.classList.remove("hidden");
    btnStratMore.classList.add("hidden");
})

// when click on button "See less" 
// - hide the second container and the button "See less"
// - display the button "See more"
btnStratLess.addEventListener('click', () => {

    strategyHidden.classList.add("hidden");
    btnStratLess.classList.add("hidden");
    btnStratMore.classList.remove("hidden");
})





// Gallery Slides

const slides = document.querySelectorAll('.slide');

for(const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveSlides();
        slide.classList.add('active');
    })
}

function clearActiveSlides() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    })
}
