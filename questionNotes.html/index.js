let iconelem=document.querySelector('.fa-solid');
iconelem.addEventListener('click',displayanswer);
let mybool=true;
function displayanswer(e){
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

let wraper=document.querySelector('.wraper');
let inputarray=document.getElementsByTagName('input');
let submitbtn=document.querySelector('#add');
submitbtn.addEventListener('click',addquestion);
let quelist=[];
// [{que:ans},{que:ans}]
function addquestion(){
    console.log('click add btn');
    console.log(inputarray);
    let obj={};
    obj.que=inputarray[0].value;
    obj.ans=inputarray[1].value;
    quelist.push({...obj});
    console.log(quelist);
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
}
function removeinputvalue(inputarray){
    // inputarray.forEach((e)=>{
    //     e.value='';
    // })
    for(let i=0;i<inputarray.length;i++){
        inputarray[i].value='';
    }
    // inputarray[0].value='';
    // inputarray[1].value='';
}