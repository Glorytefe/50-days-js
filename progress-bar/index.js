let current = 1;
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll('.circle')

next.addEventListener("click", ()=>{
    if(current <= circles.length){
        current += 1;
        let step = document.getElementById(`step${current}`);
        step.classList.add("active");
        prev.removeAttribute("disabled");
        if(current === circles.length) {
            next.classList.remove("active-btn")
            next.setAttribute("disabled", true)
        }
    }
});

prev.addEventListener("click", ()=>{
    if(current > 1){
        let step = document.getElementById(`step${current}`);
        step.classList.remove("active");
        next.removeAttribute("disabled");
        current -= 1;
        if(current === 1) {
            next.removeAttribute("disabled");
            prev.setAttribute("disabled", true)
        }
    }
})

