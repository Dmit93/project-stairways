"use strict";

// import { removeAllClasses, bodyLock } from "./utils/functions.js";
// import DismalModules, { acc } from "./utils/modules.js";


import "./components/header.js"
import "./components/controls.js"
// import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

// Fancybox.bind('[data-fancybox]', {
//   Toolbar: {
//     display: [
//       "close",
//     ],
//   },
// });

import './sliders.js';
import "./components/element_position.js";
import "./components/maps.js";
import "./components/contacts_map.js";
import "./components/product-page.js";
import "./components/swiper_thumbs.js";
import "./components/delivery.js";

import "./unstable/inputster/input-tel-mask.js";


/**
 * Poppa
 */
import "./poppa.js";

/**
 * Lazy Load
 */
import "./libs/lazyload.min.js";
let lazyLoadInstance = new LazyLoad();


// import "./libs/rellax.js";
// let rellax = new Rellax('.proud-card')
// setTimeout(() => {
//   rellax.refresh();
// }, 5000)

// let rellax = new Rellax('.proud-card', {
//     speed: 1,
//     center: false,
//     wrapper: null,
//     round: true,
//     vertical: true,
//     horizontal: false
//   });


import "./unstable/tabs.js";
import "./unstable/inputster/input.js";

/**
 * Smooth anchors
 **/
import "./utils/smooth-anchors.js";

/**
 * Smooth anchors
 **/
import "./unstable/bayan.js";


/*
 * Переключает в мобильной версии видимость сайдбара с контактами
 * При клике за пределами сайдара закрывает его
 */
/*
const servicesLeadButton = document.querySelector('.services__sidebar-toggler');
if (servicesLeadButton) {
  servicesLeadButton.addEventListener('click', () => {
    document.querySelector('.services__sidebar').classList.add('services__sidebar--active');
  });
  window.addEventListener('click', (e) => {
    if (!e.target == sideNav || e.target == servicesLeadButton) return;

    document.querySelector('.services__sidebar').classList.remove('services__sidebar--active');
  })
}
*/
import "./components/carousels.js";
import "./unstable/scroll-mouse.js";
import "./libs/masonry.pkgd.min.js";
import "./components/grid-masonry.js"
import "./components/otzyvi_block.js";



import "./components/filter-7p.js"
