window.addEventListener('scroll' , () => {
    const scrollupBox = document.querySelector(".scrollup-box")
    if(window.scrollY > 500) {
        scrollupBox.classList.add("show")
    } else {
        scrollupBox.classList.remove("show")
    }
})