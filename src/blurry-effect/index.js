const bg = document.querySelector(".bg");
const loading = document.querySelector(".loading");
let load = 0;

const interval = setInterval(blurLoad, 30);

function blurLoad(){
load++
if(load > 99) clearInterval(interval);
loading.textContent = `${load}%`;
loading.style.opacity = `${scale()}`;
bg.style.filter = `blur(${scale(30)}px)`
}

const scale = (bounds = 1) => bounds - (load/100 * bounds);
