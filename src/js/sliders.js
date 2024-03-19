import Swiper, { Navigation, Pagination } from "swiper";
import { mediaMin, mediaMax } from "./utils/functions.js";

const pagination = (element) => {
    return {
        el: `.${element} .swiper-pagination`,
        type: 'bullets',
        clickable: true,
    }
}

const navigation = (element) => {
    return {
        nextEl: `.${element} .swiper-button-next`,
        prevEl: `.${element} .swiper-button-prev`
    }
}

document.querySelectorAll('[data-swiper=main]').forEach(el => {
    let slide = el.getAttribute('data-swiper-slide') ? el.getAttribute('data-swiper-slide') : 1;
    let breakpoin = el.getAttribute('data-breakpoints') ? JSON.parse(el.getAttribute('data-breakpoints')) : {};
    let margin = el.getAttribute('data-swiper-margin') ? el.getAttribute('data-swiper-margin') : 36;
    let paginat = el.hasAttribute('data-swiper-pagination') ? pagination(el.classList[1] ? el.classList[1] : el.classList[0]) : {};
    let navigat = el.hasAttribute('data-swiper-navigation') ? navigation(el.classList[1] ? el.classList[1] : el.classList[0]) : {};
    let touncMove = el.hasAttribute('data-swiper-touch') ? true : false;
    let loop = el.hasAttribute('data-swiper-loop') ? true : false;
    let element = el.classList.contains('swiper') ? el : el.querySelector('.swiper');
    let destr = el.getAttribute('data-swiper-destroy') ? true : false;

    let swiper = new Swiper(element, {
        modules: [Navigation, Pagination],
        slidesPerView: slide,
        spaceBetween: margin,
        loop: loop,
        navigation: navigat,
        pagination: paginat,
        allowTouchMove: touncMove,
        breakpoints: breakpoin,
        on: {
            resize: function() {
                destroySwiper(swiper, destr, element)
            }
        }
    });

});


function destroySwiper(swiper, valueBool, elem) {
    if (mediaMax('600') && valueBool) {
        swiper.destroy();
        elem.closest('section').querySelector('.swiper-buttons').style.display = 'none';
    }
}