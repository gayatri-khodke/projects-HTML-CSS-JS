let formTag=document.querySelector('form');
let tbody=document.querySelector('tbody');
formTag.addEventListener('submit',validateForm);
function validateForm(e){
    e.preventDefault();
    let nodeArray=document.querySelectorAll('.userinput');
    let info=Array.from(nodeArray);
    console.log('fomr submited');
    let check=checkuserInput(info);
    if(check){
        tbody.innerHTML+=`<tr>
        <td>${info[0].value}</td>
        <td>${info[1].value}</td>
        <td>${info[2].value}</td>
        <td>${info[3].value}</td>
        <td>${info[4].value}</td>
        </tr>`;
    }
}
function checkuserInput(array){
    let name=array[0].value;
    let regex = /^[A-Za-z]+$/;
    let k=regex.test(name);
    let email=array[2].value;
    if((k && name.length>3) || () ){
        returnValue=true;
    }
    else{
        returnValue=false;
    }
    return returnValue;
}