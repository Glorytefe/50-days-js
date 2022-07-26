const  close = document.getElementById("close");
const  open = document.getElementById("open");
const  article = document.getElementById("article");


open.addEventListener("click", () => {
    article.classList.add("show-menu");
});
close.addEventListener("click", () => {
    article.classList.remove("show-menu");
})
