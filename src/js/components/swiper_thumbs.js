import Swiper, { Navigation, Pagination, Thumbs } from "swiper";
import SwiperCore, { Mousewheel } from "swiper/core";
SwiperCore.use([Mousewheel]);

if (document.querySelector(".poppa-slider--swiper")) {
new Swiper(".poppa-slider--swiper", {
    modules: [Mousewheel],
    direction: "vertical",
    slidesPerView: "auto",
    height: '768',
    mousewheel: true,
    pagination: {
        el: ".poppa-slider--swiper .swiper-pagination",
        clickable: true,
    },
    on: {
        init: function(e) {
            let allCount = e.$el[0].closest('.poppa__overlay--container').querySelector('.modal__group--count__all');
            let count = e.$el[0].closest('.poppa__overlay--container').querySelector('.modal__group--count__index');

            allCount.innerText = e.slides.length;
            count.innerText = e.realIndex + 1;

            //  console.log(e.$el[0].closest('.poppa__overlay--container'), e.realIndex)
        },
        slideChangeTransitionStart: function(e) {
            let allCount = e.$el[0].closest('.poppa__overlay--container').querySelector('.modal__group--count__all');
            let count = e.$el[0].closest('.poppa__overlay--container').querySelector('.modal__group--count__index');
            let indexDinamic = e.realIndex + 1;
            allCount.innerText = e.slides.length;
            count.innerText = indexDinamic;
            //console.log(e.realIndex);
        }
    }
});
}

if (document.querySelector(".why-carousel-top")) {
    let swiper = new Swiper(".why-carousel-bottom", {
        modules: [Navigation, Pagination, Thumbs],
        slidesPerView: 2,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".why__content-slider .swiper-button-next",
            prevEl: ".why__content-slider .swiper-button-prev",
        },
        pagination: {
            el: `.why__content-slider .swiper-pagination`,
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            0: {
                spaceBetween: 0,
                slidesPerView: 1,
            },
            600: {
                spaceBetween: 16,
                slidesPerView: 2,
            },
            992: {
                spaceBetween: 12,
                slidesPerView: 2,
            },
            1440: {
                spaceBetween: 18
            }
        }
    });
    let swiper2 = new Swiper(".why-carousel-top", {
        modules: [Navigation, Pagination, Thumbs],
        spaceBetween: 0,
        thumbs: {
            swiper: swiper,
        },
    });
}