const peoplearr=[
    {
        img:'images/profile-img1.jpeg',
        name:'Pooja khodke',
        job:'Frantent Developer',
        about:'Pooja is currently working in capjamini as a frantend doveloper.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam non amet. Ratione dolor, vitae in amet nobis illum suscipit.',
    },
    {
        img:'images/rupali.jpeg',
        name:'Rupali khodke',
        job:'Backend Developer',
        about:'Rupali is currently working in capjamini as a frantend doveloper.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam non amet. Ratione dolor, vitae in amet nobis illum suscipit.',
    },
    
    {
        img:'images/shrikant.jpeg',
        name:'Shrikant Khodke',
        job:'Python Developer',
        about:'Shrikant is currently working in capjamini as a frantend doveloper.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam non amet. Ratione dolor, vitae in amet nobis illum suscipit.',
    },
    {
        img:'images/anuj.jpeg',
        name:'Anuj khodke',
        job:'web Developer',
        about:'Anuj is currently working in capjamini as a frantend doveloper.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam non amet. Ratione dolor, vitae in amet nobis illum suscipit.',
    },
    {
        img:'images/rupali.jpeg',
        name:'Anuradha khodke',
        job:'Frantent Developer',
        about:'Anuradha is currently working in capjamini as a frantend doveloper.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam non amet. Ratione dolor, vitae in amet nobis illum suscipit.',
    },
    
]

let leftbtn=document.querySelector('#leftbtn');
let rightbtn=document.querySelector('#rightbtn');
let contenar=document.querySelector('.contenar');
leftbtn.addEventListener('click',countleft);
rightbtn.addEventListener('click',countright);
let count=0;
function countright(){
    count+=1;
    let c=checkcount(count);
    displaypeople(c);
}
function countleft(){
    count-=1;
    let c=checkcount(count);
    displaypeople(c);
}
function displaypeople(position){
    let index=position;
    contenar.children[0].firstElementChild.src=peoplearr[index].img;
    contenar.children[1].innerHTML=peoplearr[index].name;
    contenar.children[2].innerHTML=peoplearr[index].job;
    contenar.children[3].innerHTML=peoplearr[index].about;
}
function checkcount(index){
    if(index>peoplearr.length){
        return 0;
    }
    else if(index<1){
        return peoplearr.length-1;
    }
    else{
        return index;
    }
}
