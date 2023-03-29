
const imgWrapper = document.querySelectorAll('.img-wrapper');

imgWrapper.forEach((elem) => {
    elem.addEventListener("click", () =>{
        removeActiveClass()
        elem.classList.add("active")
    })
})

const removeActiveClass = () => {
    imgWrapper.forEach((elem) => {
        if(elem.classList.contains("active")){
            elem.classList.remove("active")
        }
    })
}