import { array } from './array.js';

let input=document.querySelector('#userinput');
let output=document.querySelector('.para');
let btn=document.querySelector('#btn');
btn.addEventListener('click',displaypara);
function displaypara(){
        output.innerHTML='';
        console.log(input.value,'user input is accesable here or not');
        if(input.value<=0 || input.value=='' || input.value>7){
            let randomnum=Math.floor(Math.random()*array.length);
            output.innerHTML=array[randomnum];
        }
        else{
            let newarray=array.slice(0,input.value);
            output.innerHTML
            newarray.forEach(e=>{
                output.innerHTML+=e;
            })
        }
}