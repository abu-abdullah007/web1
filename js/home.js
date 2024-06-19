const navButton = document.querySelector('#hiddenNavBtn')
const hiddenNavBar = document.querySelector('.hidden-navbar')
const hiddenNavList = document.querySelector('.hidden-nav-list')
const hideRemoveBtn = document.querySelector('#hide-remove')


navButton.addEventListener("click",()=>{
    hiddenNavBar.classList.add('show-hidden')
    hiddenNavList.classList.add('side-hide')
})

hideRemoveBtn.addEventListener("click",()=>{
    hiddenNavBar.classList.remove('show-hidden')
    hiddenNavList.classList.remove('side-hide')
})