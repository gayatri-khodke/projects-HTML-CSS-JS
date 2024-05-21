let closeicon=document.querySelector('.fa-xmark');
let openicon=document.querySelector('.fa-bars');
closeicon.addEventListener('click',closenav);
let nav=document.querySelector('.navdiv');

function closenav(){
    nav.style.display='none';
    openicon.classList.add('icon2');
}
openicon.addEventListener('click',displaynav);
function displaynav(){
    nav.style.display='block';
    openicon.classList.remove('icon2');
}