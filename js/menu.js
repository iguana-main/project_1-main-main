const hamburger = document.querySelector('.menu span');
const ul = document.querySelector('.menu ul');

hamburger.addEventListener('click' , () => {
    ul.classList.remove('hide');
    ul.classList.add('menu-small');
});

const closeAll = document.querySelectorAll('ul span, ul a');

closeAll.forEach((elem) => {
    elem.addEventListener('click', () => {
        ul.classList.add('hide');
        ul.classList.remove('menu-small');
    });
});


