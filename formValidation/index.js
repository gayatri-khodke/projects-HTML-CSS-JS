let formTag = document.querySelector('form');
let tbody = document.querySelector('tbody');
let nodeArray = document.querySelectorAll('.userinput');

formTag.addEventListener('submit', validateForm);

function validateForm(e) {
    e.preventDefault();
    let info = Array.from(nodeArray);
    console.log('Form submitted');
    let check = checkUserInput(info);
    if (check) {
        tbody.innerHTML += `<tr>
        <td>${info[0].value}</td>
        <td>${info[1].value}</td>
        <td>${info[2].value}</td>
        <td>${info[5].value}</td>
        <td>${info[3].value}</td>
        </tr>`;
        formTag.reset();
    }
}
function checkUserInput(array) {
    let name = array[0].value;
    let lname = array[1].value;
    let email = array[2].value;
    let pass = array[3].value;
    let cpass = array[4].value;
    let phone = array[5].value;
    let check=array.filter(e=>e.value=='');
    if(check.length){
        alert('Fill all information');
        return;
    }

    let nameRegex = /^[A-Za-z]+$/;
    let phoneRegex = /^\d{3,12}$/;
    let k=0;

    if (!nameRegex.test(name)) {
        displayError(array[0], 'First Name is not valid');
        k++;
    }
    if (!nameRegex.test(lname)) {
        displayError(array[1], 'Last Name is not valid');
        k++;
    }
    if (!(pass.length > 0 && pass.length < 11)) {
        displayError(array[3], 'Password is not valid');
        k++;
    }
    if (pass !== cpass) {
        displayError(array[4], 'Confirm Password does not match');
        k++;
    }
    if (!phoneRegex.test(phone)) {
        displayError(array[5], 'Phone number is not valid');
        k++;
    }
    if(k==0){
        return true;
    }
    else{
        return false;
    }
}

function displayError(element, message) {
    let errorSpan = element.nextElementSibling;
    errorSpan.textContent = message;
    errorSpan.style.color = 'red';
}
