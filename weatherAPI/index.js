let input=document.querySelector('input');
let submit=document.querySelector('.btn');
let output=document.querySelector('.tempeature');
let city=document.querySelector('.city');
submit.addEventListener('click',getweather);
let key='82aa1d2dd6678385fffe5dcd3d3f7a58';

function getweather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}&units=metric`)
    .then((result)=>{
        return result.json();
    })
    .then((result)=>{
        console.log(result);
        city.innerText=`${result.name}`;
        output.innerHTML=`${result.main.temp} C`;
        let temp=result.main.temp;
        checkbg(temp);
    })
    .catch((error)=>{
        console.log(error);
    })
}

function checkbg(celsious){
    if (celsious>39){
        document.body.style.backgroundImage='url("images/bg3.jpeg")';
    }
    else if (celsious>30){
        document.body.style.backgroundImage='url("images/bg1.jpeg")';
    }
    else{
        document.body.style.backgroundImage='url("images/bg5.jpg")';
    }
}



