console.log('working fine');

let btn = document.getElementById('btn');
let sideBar = document.querySelector('.sidebar')
let searchBox = document.querySelector('.bx-search-alt-2')
// console.log(btn, sideBar, searchBox); 

btn.addEventListener('click', ()=>{
    sideBar.classList.toggle("active");
})

searchBox.addEventListener("click", ()=>{
    searchBox.classList.toggle("active")
})