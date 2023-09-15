
let nav_list = document.getElementById('nav-list');
let openMenu = document.querySelector('.menuopen');
let cross = document.querySelector('.cross')

openMenu.addEventListener('click', () => {
    nav_list.style.opacity = '100%'; // Corrected to '1' for 100% opacity
    openMenu.style.display = 'none';
});

cross.addEventListener('click',()=>{
    nav_list.style.opacity='0%';
    openMenu.style.display='block';
})