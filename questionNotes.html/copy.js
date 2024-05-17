let wraper=document.querySelector('.wraper');
let inputarray=document.getElementsByTagName('input');
let submitbtn=document.querySelector('#add');
submitbtn.addEventListener('click',addquestion);
let mybool=true;
let quelist=[];

function addquestion(){
    let obj={};
    obj.que=inputarray[0].value;
    obj.ans=inputarray[1].value;
    quelist.push({...obj});
    displaylist(quelist);
    removeinputvalue(inputarray);
}

function displaylist(quearr){
    wraper.innerHTML='';
    quearr.forEach(e=>{
        let addquediv=`<div class="Question">
              <div class="qu1">
              <h1>${e.que}</h1>
              <i class="fa-solid fa-plus"></i>
              </div>
              <div class="answer">
              <hr>
              ${e.ans} 
              </div>
              </div>`;
              wraper.insertAdjacentHTML('beforeend', addquediv);
            })
            addeventlistnertoIcon();
}

function removeinputvalue(inputarray){
    for(let i=0;i<inputarray.length;i++){
        inputarray[i].value='';
    }
}


function addeventlistnertoIcon(){
    let iconelem=document.querySelectorAll('.fa-solid');
    iconelem.forEach(e=>{
    e.addEventListener('click',displayanswer);
});
}

function displayanswer(e){
    console.log(e);
    let elem=e.target;
    let answerdiv=elem.closest('.Question').children[1];
    if(mybool){
        answerdiv.style.display='block';
    }
    else{
        answerdiv.style.display='none';
    }
    mybool=!mybool;
}