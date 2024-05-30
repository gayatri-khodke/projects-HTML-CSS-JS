let btn = document.querySelector('#btn');
let userinput = document.querySelector('.userinput');
let output = document.querySelector('.output');
let settime = document.querySelector('#settime');
let array = [];

btn.addEventListener('click', addTodo);

function addTodo() {
    let element = userinput.value;
    let deadline = settime.value;
    if (element !== '') {
        let cdate = getcorrectformate(deadline);
        let fdate = getFutureDate(deadline);
        let obj = {
            task: element,
            currentdate: cdate,
            futuredate: fdate
        };
        userinput.value = '';
        array.push(obj);
        displayTodo();
    } else {
        alert("Do not add empty Item");
    }
}

function displayTodo() {
    output.innerHTML = '';
    array.forEach((e, index) => {
        let content = `<div class="todo" data-index="${index}">
            <h3 class="todo1">${e.task} </h3>
            <span class="time" id="timer${index}" ></span>
            <span>
                <i class="fa-solid fa-pencil edit"></i>
                <i class="fa-solid fa-trash delete"></i>
            </span>
        </div>
        <div class='showdeadline'>deadline: ${e.futuredate}</div>
        `;
        output.insertAdjacentHTML('beforeend', content);
        setTaskTimer(index, e.currentdate);
    });
    addEventListeners();
    addeventTOdeadline();
}

function setTaskTimer(index, deadline) {
    let timerElement = document.getElementById(`timer${index}`);
    let countDownDate = new Date(deadline).getTime();
    console.log(countDownDate);

    // Update the timer every second
    let timerInterval = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        if (distance <= 0) {
            timerAudio.play();
            setTimeout(()=>{
                clearInterval(timerInterval)
            },1000);
           
            timerElement.textContent = "Time's up!";
        } else {
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the timer
            timerElement.textContent = `${hours}:${minutes}:${seconds}`;
            console.log(hours,minutes,seconds);
        }
    }, 1000);
}

function addEventListeners() {
    let editButtons = document.querySelectorAll('.edit');
    editButtons.forEach(button => {
        button.addEventListener('click', editTodo);
    });

    let deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', deleteTodo);
    });
}

function editTodo(event) {
    let index = event.target.closest('.todo').dataset.index;
    let todo = array[index];
    userinput.value = todo.task;
    array.splice(index, 1);
    displayTodo();
}

function deleteTodo(event) {
    let index = event.target.closest('.todo').dataset.index;
    array.splice(index, 1);
    displayTodo();
}

// function getTodayDate() {
//     let tdate = new Date();
//     let tday = tdate.getDate();
//     let tmonth = tdate.getMonth() + 1;
//     let tyear = tdate.getFullYear();
//     let thour = tdate.getHours();
//     let tminutes = tdate.getMinutes();
//     let tseconds = tdate.getSeconds();
//     return `${tday}/${tmonth}/${tyear} ${thour}:${tminutes}:${tseconds}`;
// }
let timerAudio=new Audio('./timeUp-audio.wav');
function getcorrectformate(deadline) {
    let fdate = new Date();
    if (deadline === 'hour') {
        fdate.setHours(fdate.getHours() + 1);
    } else if (deadline === 'twohour') {
        fdate.setHours(fdate.getHours() + 2);
    } else if (deadline === 'day') {
        fdate.setDate(fdate.getDate() + 1);
    }
    else if(deadline=='temminutes'){
        fdate.setMinutes(fdate.getMinutes() +1);
    }
    else{
        fdate.setDate(fdate.getDate() + 1);
    }
    let fday = fdate.getDate();
    let fmonth = fdate.getMonth() + 1;
    let fyear = fdate.getFullYear();
    let fhour = fdate.getHours();
    let fminutes = fdate.getMinutes();
    let fseconds = fdate.getSeconds();
    let formattedDate = `${fdate.getFullYear()}-${(fdate.getMonth() + 1)}-${fdate.getDate()} ${fdate.getHours()}:${fdate.getMinutes()}:${fdate.getSeconds()}`;
    return formattedDate;
}
// new Date(year,month,day,hours,minutes,seconds)

function getFutureDate(deadline) {
    let fdate = new Date();
    if (deadline === 'hour') {
        fdate.setHours(fdate.getHours() + 1);
    } else if (deadline === 'twohour') {
        fdate.setHours(fdate.getHours() + 2);
    } else if (deadline === 'day') {
        fdate.setDate(fdate.getDate() + 1);
    }
    let fday = fdate.getDate();
    let fmonth = fdate.getMonth() + 1;
    let fyear = fdate.getFullYear();
    let fhour = fdate.getHours();
    let fminutes = fdate.getMinutes();
    let fseconds = fdate.getSeconds();
    return `${fday}/${fmonth}/${fyear} ${fhour}:${fminutes}:${fseconds}`;
}

function addeventTOdeadline(){
    let tododiv=document.querySelectorAll('.todo1');
    tododiv.forEach(e=>{
        e.addEventListener('click',toggleONdeadline);
    })
}
function toggleONdeadline(e){
    let showdeadline=e.target.closest('.todo').nextElementSibling;
    console.log(e.target.closest('.todo').nextElementSibling);
    showdeadline.classList.toggle('showdeadline');
}