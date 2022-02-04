



var hum = document.querySelector('#header .header .icon ');
var hidderList = document.querySelector('#header .header .header-list ');




hum.addEventListener('click', () => {
    hum.classList.toggle('active');
    hidderList.classList.toggle('active');
});