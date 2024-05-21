// let fdiv=document.forms['myform'];
let fdiv=document.querySelector('form');
console.log(fdiv);
let returnValue=true;
function validateForm(e){
    e.preventDefault();
    let fname=fdiv['fname'].value;
    let lname=fdiv['lname'].value;
    let email=fdiv['email'].value;
    let passward=fdiv['passward'].vlaue;
    let cpassward=fdiv['cpassward'].vlaue;
    if(fname.length<5 || fname==''){
        throwError(0,'*Enter valid name');
        returnValue=false;
    }
    if(email.endsWith('.com')==false || email==''){
        let specialchar=email.includes('@');
        console.log(spacialchar);
        if(specialchar==false){
            throwError(2,'*Enter valid email');
            returnValue=false;
        }
    }
    if(passward.length<6 || passward==''){
        throwError(3,'*Enter valid passward');
        returnValue=false;
        return false;
    }
    if(passward!==cpassward || cpassward==''){
        throwError(4,'*invalid conform passward');
        returnValue=false;
        return false;
    }
    return  returnValue;

}
let infodiv=document.getElementsByClassName('info');
function throwError(position,str){
    infodiv[position].lastElementChild.innerHTML=str;
}

function checkemail(email){
    let specialchar='@' in email;
    console.log(spacialchar);
}