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
let linkparent=document.querySelector('.list1');
let scrollLinks=document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault();
        let id=e.currentTarget.getAttribute('href').slice(1);
        let element=document.getElementById(id);

        // calculate our navbar height and scroll window height
        const containerHeight = linkparent.getBoundingClientRect().height;
        const fixedNav = nav.classList.contains("fix-nav");
        let navHeight=nav.getBoundingClientRect().height;
        let position=element.offsetTop-navHeight;
        if (!fixedNav) {
            position = position - navHeight;
          }
          if (navHeight > 82) {
            position = position + containerHeight;
          }
      
          window.scrollTo({
            left: 0,
            top: position,
          });
          linkparent.style.height = 3;
    })
})