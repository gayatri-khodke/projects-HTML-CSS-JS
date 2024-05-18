let array=[
    {
        item:'bike',
        img:'./img/bike3.jpeg',
    },
    {
        item:'bike',
        img:'./img/bike1.jpeg',
    },
    {
        item:'bike',
        img:'./img/bike3.jpeg',
    },
    {
        item:'bike',
        img:'./img/bike4.jpeg',
    },
    {
        item:'bike',
        img:'./img/bike2.jpeg',
    },
    {
        item:'cars',
        img:'./img/car1.jpeg',
    },
    {
        item:'cars',
        img:'./img/car3.jpeg',
    },
    {
        item:'cars',
        img:'./img/car5.jpeg',
    },
    {
        item:'cars',
        img:'./img/car6.jpeg',
    },
    {
        item:'bicycle',
        img:'./img/cycle2.jpeg',
    },
    {
        item:'bicycle',
        img:'./img/cycle3.jpeg',
    },
    {
        item:'bicycle',
        img:'./img/cycle4.jpeg',
    },
];
const allbtn = document.querySelector("#buttons");
const objacts = document.querySelector(".objacts");

allbtn.addEventListener('click', displayimg);

function displayimg(e) {
    let element = e.target;
    console.log(element, element.innerHTML);

    if (element.classList.contains('btn')) {
        if (element.innerHTML == 'Show All') {
            displayitems(array);
        } else {
            let filterType = element.innerHTML.toLowerCase();
            let filteredArray = array.filter(item => item.item == filterType);
            displayitems(filteredArray);
        }
    }
}

function displayitems(myarr) {
    removecontainer();
    myarr.forEach(e => {
        let div = document.createElement('div');
        div.classList.add('box');
        let img = document.createElement('img');
        img.src = e.img;
        div.appendChild(img);
        objacts.appendChild(div);
    });
}

// function removecontainer() {
//     objacts.innerHTML = '';
// }

function removecontainer(){
    objacts.innerHTML='';
}                                                
