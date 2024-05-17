let left=document.querySelector('#leftbtn');
let right=document.querySelector('#rightbtn');
let imgarray=document.querySelectorAll('.image');

let arr=Array.from(imgarray);

left.addEventListener('click',displayleft);
right.addEventListener('click',displayright);
let count=0;
function displayright(){
    displaynone();
    count+=1;
    if(count<=arr.length){
        arr[count-1].style.display='block';
    }
    else{
        count=0;
        arr[0].style.display='block';
    }
    
}
function displayleft(){
    displaynone();
    count-=1;
    if(count<1){
        count=arr.length-1;
        arr[count].style.display='block';
    }
     if(count<=arr.length){
        arr[count-1].style.display='block';
    }
    else{
        count=0;
        arr[0].style.display='block';
    }
}

function displaynone(){
    arr.forEach(e=>{
        e.style.display='none';
    })
}