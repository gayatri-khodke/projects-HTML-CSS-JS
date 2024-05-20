let historybtn=document.querySelector('.history');
let visionbtn=document.querySelector('.vision');
let goalbtn=document.querySelector('.goal');
let para=document.querySelectorAll('.para');
console.log(para[0]);
historybtn.addEventListener('click',()=>{
    para[0].style.display='block';
    para[1].style.display='none';
    para[2].style.display='none';

    removedisplay();
});
visionbtn.addEventListener('click',()=>{
    para[1].style.display='block';
    para[0].style.display='none';
    para[2].style.display='none';
    removedisplay();
});
goalbtn.addEventListener('click',()=>{
    para[2].style.display='block';
    para[1].style.display='none';
    para[0].style.display='none';
    removedisplay(); 
});
function removedisplay(){
    let button=document.querySelectorAll('para');
    button.forEach(e=>{
        e.style.display='none';
    })
}

let image=document.querySelector('#image');
let allimg=document.querySelector('.images');
allimg.addEventListener('click',displayimg);
function displayimg(e){
    let element=e.target;
    console.log(e.target);
    let mainimg=document.querySelector('#image');
    if(element.classList.contains('img1')){
        let temp=`${mainimg.src}`;
        mainimg.src=`${element.src}`;
        element.src=temp;
    }
    else if(element.classList.contains('img2')){
        let temp=`${mainimg.src}`;
        mainimg.src=`${element.src}`;
        element.src=temp;
    }
    else if(element.classList.contains('img3')){
        let temp=`${mainimg.src}`;
        mainimg.src=`${element.src}`;
        element.src=temp;
    }

}