



var hum = document.querySelector('#header .header .icon ');
var hidderList = document.querySelector('#header .header .header-list ');
var header = document.querySelector('#header');
var linkes = document.querySelectorAll('#header .header .header-list ul li a');



linkes.forEach((element) => {
    element.addEventListener(('click'), () => {
        hum.classList.toggle('active');
        hidderList.classList.toggle('active');
    })
})


hum.addEventListener('click', () => {
    hum.classList.toggle('active');
    hidderList.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
})