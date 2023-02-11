const btnToggle = document.querySelector('.navbar .box-toggle .toggle');
const containerToggle = document.querySelector('.navbar .box-toggle');
const container = document.querySelector('.navbar .container');


btnToggle.addEventListener('click', function (e) {
    container.classList.toggle('active')
    containerToggle.append(ul)
})