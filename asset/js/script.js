const btnNavigation = document.querySelectorAll('.navbar .nav-link .nav-list');
const activePage = window.location.pathname;
const imgSlide = document.querySelector('.main .container .img-slide');
const firstImg = document.querySelectorAll('.main .img-slide img')[0];
const btnBox = document.querySelectorAll('.main .box-btn img');



let currentSlide = 1;
const manualNav = function (manual) {
    btnNavigation.forEach((e) => {
        e.classList.remove('active')
    })
    btnNavigation[manual].classList.add('active');
};

btnNavigation.forEach((e, i) => {
    e.addEventListener('click', function (events) {
        manualNav(i);
        currentSlide = i;
    });
})

btnNavigation.forEach((e) => {
    if (e.href.includes(`${activePage}`)) {
        e.classList.add('active')
    }
})

const firstImgSize = firstImg.clientWidth + 30;
btnBox.forEach((e) => {
    e.addEventListener('click', () => {
        imgSlide.scrollLeft += e.id == "left" ? -firstImgSize : firstImgSize
    })
})