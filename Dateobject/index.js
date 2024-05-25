let image=document.querySelector('#image');
let allimg=document.querySelector('.images');
allimg.addEventListener('click',displayimg);
function displayimg(e){
    let element=e.target;
    console.log(e.target);
    let mainimg=document.querySelector('#image');
    if(element.classList.contains('img1')){
        let temp=`${mainimg.src}`;
        mainimg.src=`${element.src}`;
        element.src=temp;
    }
    else if(element.classList.contains('img2')){
        let temp=`${mainimg.src}`;
        mainimg.src=`${element.src}`;
        element.src=temp;
    }
    else if(element.classList.contains('img3')){
        let temp=`${mainimg.src}`;
        mainimg.src=`${element.src}`;
        element.src=temp;
    }
}
// console.log(tsec,fsec);
// console.log(fday);
// Selecting HTML elements for days, hours, minutes, and seconds
let day = document.querySelector('#day');
let hour = document.querySelector('#hour');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');

// Function to display the remaining time
function displayTime() {
    // Defining the future date and the current date
    let futureDate = new Date(2024, 5, 24, 22, 0, 1); // Adjust month to be zero-indexed
                 // new Date(year,month,day,hours,minutes,seconds)

    let currentDate = new Date();
    // console.log(currentDate);

    // Calculating the time difference in milliseconds
    let timeDiff = futureDate - currentDate;

    // Converting milliseconds to seconds, minutes, hours, and days
    let remainingSeconds = Math.floor(timeDiff / 1000);
    let remainingMinutes = Math.floor(remainingSeconds / 60);
    let remainingHours = Math.floor(remainingMinutes / 60);
    let remainingDays = Math.floor(remainingHours / 24);

    // Displaying the remaining time in the HTML elements
    // day.textContent = remainingDays;
    day.textContent = futureDate.getDate()-currentDate.getDate();
    hour.textContent = remainingHours % 24;
    min.textContent = remainingMinutes % 60;
    sec.textContent = remainingSeconds % 60;
    // if(futureDate>currentDate){
    //     clearInterval(k);
    // }
    console.log(futureDate,currentDate)
}

// Calling the displayTime function every second
let k=setInterval(displayTime, 1000);
