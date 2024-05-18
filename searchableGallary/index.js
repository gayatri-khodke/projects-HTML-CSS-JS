document.addEventListener('DOMContentLoaded', function () {
    let array = [
        { 
            item: 'bike',
            img: './img/bike3.jpeg',
            info: 'Emotorad EMX Plus',
            value: '$ 64,999',
            average: '80 km/change .250 W'
        },
        {
            item: 'bike',
            img: './img/bike1.jpeg',
            info: 'TVS iQube ST 3.4 kWh',
            value: '1.39 Lakh',
            average: '80 km/change .250 W'
        },
        { 
            item: 'bike',
            img: './img/bike3.jpeg',
            info: 'Emotorad EMX Plus',
            value: '$ 64,999', 
            average:'80 km/change .250 W'
        },
        {
            item: 'bike',
            img: './img/bike4.jpeg',
            info: 'Emotorad EMX Plus',
            value: '$ 64,999',
            average:'80 km/change .250 W'
        },
        { 
            item:'bike',
            img: './img/bike2.jpeg',
            info: 'Emotorad EMX Plus',
            value: '$ 64,999',
            average:'80 km/change .250 W'
        },
        { 
            item:'cars',
            img: './img/car1.jpeg',
            info: 'Emotorad EMX Plus',
            value: '$ 64,999',average:'80 km/change .250 W'
        },
        {
             item:'cars',
             img: './img/car3.jpeg',
             info: 'Emotorad EMX Plus',
             value: '$ 64,999',
             average:'80 km/change .250 W'
        },
        {
            item:'cars',
            img: './img/car5.jpeg',
            info: 'Emotorad EMX Plus',
            value: '$ 64,999',
            average:'80 km/change .250 W'
        },
        { 
            item:'cars',
            img: './img/car6.jpeg', 
            info: 'Emotorad EMX Plus',
            value: '$ 64,999',
            average:'80 km/change .250 W'
        },
        {
            item:'bicycle',
            img: './img/cycle2.jpeg',
            info: 'Emotorad EMX Plus',
            value: '$ 64,999',
            average:'80 km/change .250 W'
        },
        { 
            item:'bicycle',
            img: './img/cycle3.jpeg',
            info: 'Emotorad EMX Plus',
            value: '$ 64,999',
            average:'80 km/change .250 W'
        },
        { 
            item:'bicycle',
            img: './img/cycle4.jpeg',
            info: 'Emotorad EMX Plus',
            value: '$ 64,999',
            average:'80 km/change .250 W'
        }
    ];

    const allbtn = document.querySelector("#buttons");
    const objacts = document.querySelector(".objacts");

    allbtn.addEventListener('click', displayimg);

    function displayimg(e) {
        let element = e.target;
        console.log(element, element.innerHTML);

        if (element.classList.contains('btn')) {
            if (element.innerHTML === 'Show All') {
                displayitems(array);
            } else {
                let filterType = element.innerHTML.toLowerCase();
                let filteredArray = array.filter(item => item.item === filterType);
                displayitems(filteredArray);
            }
        }
    }

    function displayitems(myarr) {
        removecontainer();
        let fragment = document.createDocumentFragment();
        myarr.forEach(e => {
            let div = document.createElement('div');
            div.classList.add('box');
            div.innerHTML = `
                <img src="${e.img}" alt="${e.info}">
                <p class="iteminfo">${e.info}</p>
                <p class="iteminfo">${e.value}</p>
                <p class="itemaverage">${e.average}</p>
                <button class="btn2">view Offer</button>
            `;
            fragment.appendChild(div);
        });
        objacts.append(fragment);
    }

    function removecontainer() {
        objacts.innerHTML = '';
    }
});