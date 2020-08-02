function toggleTheme(theme) {
    const body = document.querySelector("body");
    body.classList.remove('dark', 'light')
    if (theme == 'dark') {
        body.classList.add('dark')
    } else {
        body.classList.add('light')
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