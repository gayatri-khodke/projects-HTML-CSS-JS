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