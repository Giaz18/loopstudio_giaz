const hamburger = document.querySelector("#hamburger");
const navlist = document.querySelector('.nav-list');
hamburger.addEventListener('click', ()=> {
    navlist.classList.toggle('show');
    hamburger.classList.toggle('change-icon');
})
