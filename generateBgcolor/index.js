// generage random rgb color:--
let button=document.querySelector('#btn');
let button1=document.querySelector('#btn1');
let displaycolor=document.querySelector('.colorValue');
button.addEventListener('click',generateBgColor);
button1.addEventListener('click',generatehexa);

function generateBgColor() {
    // Generate random values for red, green, and blue
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);

    let color=`rgb(${red},${green},${blue})`;
    document.body.style.backgroundColor =color;
    displaycolor.textContent=color;
}

// generate hexa color:--
function generatehexa(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
hex.sort(function(){return 0.5-Math.random()});
let k=hex.join('');
let color='#';
let m=k.substr(0,6);
console.log(m);
color+=m;
document.body.style.backgroundColor=color;
displaycolor.textContent=color;
}



// generate random rgb color:--
// 2:----
//   function generageBgcolor(){
//     let a=[0,1,2];
//     let b=[0,1,2,3,4,5];
//     a.sort(function(){return 0.5-Math.random()});
//     b.sort(function(){return 0.5-Math.random()});
//     let red='';
//     let green='';
//     let blue='';
//     for(let i=0;i<3;i++){
//         if(i==0){
//             red+=a[0];
//             green+=a[1];
//             blue+=a[2];
//         }
//         else if(i==1){
//             red+=b[1];
//             green+=a[2];
//             blue+=b[3];
//         }
//         else if(i==2){
//             red+=b[3];
//             green+=a[1];
//             blue+=a[2];
//         }
//     }
//     let color=`rgb(${red},${green},${blue})`;
//     document.body.style.backgroundColor=color;
//  }
