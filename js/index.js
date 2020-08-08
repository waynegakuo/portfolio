function toggleTheme() {
    const body = document.querySelector("body");
    if (body.className === 'dark') {
        body.className = 'light'
    }
    else {
        body.className = 'dark'
    }
}

function toggleThemeImage() {
    const body = document.getElementById("icon");
    if (body.className === 'fa fa-sun-o') {
        body.className = 'fa fa-moon-o'
    }
    else {
        body.className = 'fa fa-sun-o'
    }
}

const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');
const homeAnchor = document.getElementById('home-anchor');
const stackAnchor = document.getElementById('stack-anchor');
const commAnchor = document.getElementById('comm-anchor');
const eduAnchor = document.getElementById('edu-anchor');
const expAnchor = document.getElementById('exp-anchor');
const projAnchor = document.getElementById('proj-anchor');

burger.addEventListener('click', () => {
    ul.classList.toggle('show');
})

homeAnchor.addEventListener('click', () => {
    ul.classList.toggle('show');
})
stackAnchor.addEventListener('click', () => {
    ul.classList.toggle('show');
})
commAnchor.addEventListener('click', () => {
    ul.classList.toggle('show');
})
eduAnchor.addEventListener('click', () => {
    ul.classList.toggle('show');
})
expAnchor.addEventListener('click', () => {
    ul.classList.toggle('show');
})
projAnchor.addEventListener('click', () => {
    ul.classList.toggle('show');
})