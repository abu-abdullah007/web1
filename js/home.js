const navButton = document.querySelector('#hiddenNavBtn')
const hiddenNavBar = document.querySelector('.hidden-navbar')
const hiddenNavList = document.querySelector('.hidden-nav-list')
const hideRemoveBtn = document.querySelector('#hide-remove')

const hideRemoveButton = document.querySelector('#slider-active-button')
const parentSideBar = document.querySelector('.side-slide-box')
const mainSlider = document.querySelector('.slider-box')
const hideAddButton = document.querySelectorAll('.card-box h1')
const cardBoxes = document.querySelectorAll('.card-box')
const mainSliderDisplay = document.querySelector('.slider-center-lower')
const hiddenButton = document.querySelector('.hidden-button')
const body = document.body

const sliderLowerBoxes = document.querySelectorAll('.slider-lower-box')

navButton.addEventListener("click",()=>{
    hiddenNavBar.classList.add('show-hidden')
    hiddenNavList.classList.add('side-hide')
})

hideRemoveBtn.addEventListener("click",()=>{
    hiddenNavBar.classList.remove('show-hidden')
    hiddenNavList.classList.remove('side-hide')
})

hideAddButton.forEach((hideAbb,index)=>{
    hideAbb.addEventListener("click",()=>{
        parentSideBar.classList.add('side-active')
        setTimeout(()=>{
            mainSlider.classList.add('slider-active')
            body.classList.add('body-active')
        },10)

        sliderLowerBoxes.forEach((sliderLower,index)=>{
            setTimeout(()=>{
                sliderLower.classList.remove('side-transform')
            },index * 600)
        })
    })
})

hideRemoveButton.addEventListener("click",()=>{
    mainSlider.classList.remove('slider-active')
    mainSlider.classList.add('slide-hidden-active')
    setTimeout(()=>{
        mainSlider.classList.remove('slide-hidden-active')
        parentSideBar.classList.remove('side-active')
        body.classList.remove('body-active')
    },300)

    sliderLowerBoxes.forEach((sliderLower,index)=>{
        setTimeout(()=>{
            sliderLower.classList.add('side-transform')
        },index * 200)
    })
})