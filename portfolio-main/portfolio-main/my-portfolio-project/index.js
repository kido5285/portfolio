var bars = document.querySelectorAll('.bar');
var fullNavbar = document.querySelector('.navbar');
var navbarList = document.querySelector('.navbar-items');
var bar1 = document.querySelector('.bar1');
var bar2 = document.querySelector('.bar2');
var bar3 = document.querySelector('.bar3');
var checkbox = document.getElementById('position');
var imgHolder = document.querySelector('#welcome-page')
var homePageDescrip = document.querySelector('.home-page-img-description')
var age = document.querySelector('.age')
var ingHolder = document.querySelector('.portfolio-img-holder');
var allImg = Array.from(document.querySelectorAll('.portfolio-img'));
var portfolioSection = document.getElementById('portfolio')
var img1 = document.querySelector('.img-1')
var img2 = document.querySelector('.img-2')
var img3 = document.querySelector('.img-3')
var img4 = document.querySelector('.img-4')
var img5 = document.querySelector('.img-5')
var img6 = document.querySelector('.img-6')
var imgHeightArr = [];

window.onload = myAge()


function myAge() {
    var d = new Date();
    var myAge = d.getFullYear() - 2006;
    age.innerHTML = myAge;
}

function navbar() {
    bar1.classList.toggle('change1');
    bar2.classList.toggle('change2');
    bar3.classList.toggle('change3');
    navbarList.classList.toggle('navbar-collapse')
}

function setting() {
    if(checkbox.checked) {
        fullNavbar.style.position = 'relative'
        fullNavbar.style.top = '0'
    } else {
        fullNavbar.style.position = 'sticky'
        fullNavbar.style.top = '0'
    }
}

imgHolder.addEventListener('mouseover', () => {
    imgHolder.classList.add('home-page-hover')
})

imgHolder.addEventListener('mouseout', () => {
    imgHolder.classList.remove('home-page-hover')
})

function removeClass() {
    navbarList.classList.remove('navbar-collapse');
    bar1.classList.remove('change1');
    bar2.classList.remove('change2');
    bar3.classList.remove('change3');
}
//drag and drop
function onDragOver(event) {
  event.preventDefault();
}

function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);

}

function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
	event
    .dataTransfer
    .clearData();
}
//loading

function loading() {
    var loadingDot = document.getElementById('loading-dot');
    if(loadingDot.innerHTML != '. . . ') {
        loadingDot.innerHTML += '. '
    } else {
        loadingDot.innerHTML = ''
    }
}

setInterval(loading, 1000)

//navbar change color
function changeBackground() {
    var values = document.getElementById('color').value;
    var checkColor = checkValidColor(values)
    if(checkColor) {
        document.body.style.background = values;
    }
    if(values === '') {
        document.body.style.background = 'linear-gradient(to top right, #ff9482, #7d77ff)';
    }
    if(values.charAt(0) === '#') {
        document.body.style.background = values;
    }
}

function checkValidColor(str) {
    var s = new Option().style;
    s.color = str;
    if(str === '') {
        return false;
    }
    return s.color == str;
}

//img slider
function imgSlider() {
    allImg.forEach(img => {
        imgHeightArr.push(img.height)
    })
    setTimeout(() => {
        img1.style.top = '-100%';
        img2.style.top = '0%';
    }, 5000)
    setTimeout(() => {
        img2.style.top = '-200%';
        img3.style.top = '0%';  
    }, 10000)
    setTimeout(() => {
        img3.style.top = '-100%';
        img4.style.top = '0%';
    },15000)
    setTimeout(() => {
        img4.style.top = '-100%';
        img5.style.top = '0%';
    }, 20000)
    setTimeout(() => {
        img5.style.top = '-100%';
        img6.style.top = '0%';
    }, 25000)
    setTimeout(() => {
        img6.style.top = '100%';
        img5.style.top = '0%';
    }, 35000)
    setTimeout(() => {
        img5.style.top = '100%';
        img4.style.top = '0%';
    }, 40000)
    setTimeout(() => {
        img4.style.top = '100%';
        img3.style.top = '0%';
    }, 45000)
    setTimeout(() => {
        img3.style.top = '200%';
        img2.style.top = '0%';
    }, 50000)
    setTimeout(() => {
        img2.style.top = '100%';
        img1.style.top = '0%';
    }, 55000)
}
imgSlider();
setInterval(imgSlider, 45000);