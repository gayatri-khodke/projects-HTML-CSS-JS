let btn1 = document.querySelector('.btn1');
    let btn2 = document.querySelector('.btn2');
    let container2 = document.querySelector('.container2');
    let container1 = document.querySelector('.container1');

    btn1.addEventListener('click', displayModal);
    btn2.addEventListener('click', closeModal);

    function displayModal() {
        container2.classList.remove('toggleme');
        container1.classList.add('toggleme');
        document.body.classList.add('linearbg');
    }

    function closeModal() {
        container1.classList.remove('toggleme');
        container2.classList.add('toggleme');
        document.body.classList.remove('linearbg');
    }