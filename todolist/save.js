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
        let cdate = getTodayDate();
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
            <h3 class="todo1">${e.task} (Added: ${e.currentdate}, Deadline: ${e.futuredate})</h3>
            <span>
                <i class="fa-solid fa-pencil edit"></i>
                <i class="fa-solid fa-trash delete"></i>
            </span>
        </div>`;
        output.insertAdjacentHTML('beforeend', content);
    });
    addEventListeners();
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

function getTodayDate() {
    let tdate = new Date();
    let tday =tdate.getDate()
    let tmonth =tdate.getMonth()+1;
    let tyear = tdate.getFullYear();
    let thour =tdate.getHours();
    let tminutes =tdate.getMinutes();
    let tseconds =tdate.getSeconds();
    return `${tday}/${tmonth}/${tyear} ${thour}:${tminutes}:${tseconds}`;
}

function getFutureDate(deadline) {
    let fdate = new Date();
    if (deadline === 'hour'){
        fdate.setHours(fdate.getHours() + 1);
    } 
    else if (deadline === 'twohour'){
        fdate.setHours(fdate.getHours() + 2);
    }
    else if (deadline === 'day') {
        fdate.setDate(fdate.getDate() + 1);
    }
    let fday =fdate.getDate();
    let fmonth =fdate.getMonth() +1;
    let fyear = fdate.getFullYear();
    let fhour =fdate.getHours();
    let fminutes = fdate.getMinutes();
    let fseconds =fdate.getSeconds();
    return `${fday}/${fmonth}/${fyear} ${fhour}:${fminutes}:${fseconds}`;
}
