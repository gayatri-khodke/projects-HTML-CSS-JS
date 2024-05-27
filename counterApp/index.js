let btndiv=document.querySelector('.btndiv');
let output=document.querySelector('#output');
btndiv.addEventListener('click',playcounter);
let count=0;
function playcounter(e){
    let element=e.target.id;
    if(element=='decreasebtn'){
        count-=1;
        output.innerHTML=count;
    }
    else if(element=='resetbtn'){
        count=0;
        output.innerHTML=count;
    }
    else if(element=='increasebtn'){
        count+=1;
        output.innerHTML=count;
    }
    if(count<1){
        output.style.color='red';
    }
    else{
        output.style.color='green';
    }
}

// used here event delegation instead of using eventlistner on each and every element