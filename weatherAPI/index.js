let input=document.querySelector('input');
let submit=document.querySelector('.btn');
let output=document.querySelector('.tempeature');
submit.addEventListener('click',getweather);
let key='82aa1d2dd6678385fffe5dcd3d3f7a58';

function getweather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}&units=metric`)
    .then((result)=>{
        return result.json();
    })
    .then((result)=>{
        console.log(result);
        output.innerHTML=`${result.name} ${result.main.temp} C`;
    })
    .catch((error)=>{
        console.log(error);
    })
}



