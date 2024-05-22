let icon = document.querySelector('#icon');
icon.addEventListener('click', function() {
    let list1 = document.querySelector('.list1');
    list1.classList.toggle('show');
});

let nav=document.querySelector('.nav');
window.addEventListener('scroll',function(){
    let scrollHeight=window.pageYOffset;
    let navHeight=nav.getBoundingClientRect().height;
    if(scrollHeight>navHeight){
        nav.classList.add('fix-nav');
    }
    else{
        nav.classList.remove('fix-nav');
    }
})