let btn = document.querySelector('#btn');
let userinput = document.querySelector('.userinput');
let output = document.querySelector('.output');
let array = [];

btn.addEventListener('click', addTodo);

function addTodo() {
    let element= userinput.value;
    if (element !=='') {
        array.push(element);
        userinput.value ='';
        displayTodo();
    }
    else{
        alert("Do not add empty Item");
    }
}

function displayTodo() {
    output.innerHTML = ''; 
    // array.forEach((e) => {
    //     let content = `<div class="todo">
    //         <h3 class="todo1">${e}</h3>
    //         <span>
    //             <i class="fa-solid fa-pencil edit"></i>
    //             <i class="fa-solid fa-trash delete"></i>
    //         </span>
    //     </div>`;
    //     output.insertAdjacentHTML('beforeend', content);
    // });
    
    // instead of (append(), insertAdjacentHTML(),fragment()) this methods we can use '+=' operator to add our html Elements. 
    
    array.forEach((e) => {
    output.innerHTML+= `<div class="todo">
           <h3 class="todo1">${e}</h3>
           <span>
               <i class="fa-solid fa-pencil edit"></i>
               <i class="fa-solid fa-trash delete"></i>
           </span>
       </div>`;
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
    let index = event.target;
    let todo=index.closest('.todo').children[0].innerHTML;
    userinput.value=todo;
    deleteTodo(event);
}

function deleteTodo(event) {
    let index = event.target;
    let todo=index.closest('.todo').children[0].innerHTML;
    let findindex=array.findIndex(e=>e==todo);
    array.splice(findindex,1);
    displayTodo();
}