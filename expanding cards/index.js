
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

// let arr = [1, 4, 2, 3, 8];
// const bubbleSort = (arr) =>{
//     let swap = true;
//     for(const value of arr){
//         swap = false;
//             for(let j = 0; j < arr.length; j++){
//                 console.log(j);
//                 let curr = arr[j]
//                 if(curr > arr[j + 1]){
//                     arr[j] = arr[j + 1];
//                     arr[j + 1] = curr
//                     swap = true
//                 }
//             } 
//             if(!swap)break;
//         }
//         return arr;
// }
// //9
// console.log(bubbleSort(arr))

