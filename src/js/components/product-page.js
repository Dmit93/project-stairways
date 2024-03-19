(() => {
    if (!document.querySelector('.product-page-seciton')) return

    const productVariations = [...document.querySelectorAll('.product-page--views--element')];
    const productVariationsPic = [...document.querySelectorAll('.product-page__inner-pic')];
    productVariations.forEach((variation, index) => {
        variation.addEventListener('click', (e) => {
            productVariations.forEach((variation) => {
                variation.classList.remove('_active');
            })
            productVariationsPic.forEach((pic) => {
                pic.classList.remove('_active')
            })
            variation.classList.add('_active')
            productVariationsPic[index].classList.add('_active');
        });
    });
})();

import {isClickedBeyond} from "../utils/helpers.js";
const hotspotCircles = document.querySelectorAll('.product-page--circle');

// function getHotspotBounds(hotspot) {
//     return {
//         hotspot: hotspot.getBoundingClientRect(),
//         parent: hotspot.parentElement.getBoundingClientRect(),
//         popup: hotspot.querySelector('.product-page--circle--popup').getBoundingClientRect()
//     }
// }
// function isPopOverlaysHotspot(button) {
//     const {parent, hotspot, popup} = getHotspotBounds(button);


//     if (hotspot.x - popup.width < hotspot.width) {
//         return true;
//     } else {
//         return false;
//     }
// }
// function isPopBeyondHorizontal(button) {
//     const {parent, hotspot, popup} = getHotspotBounds(button);
//     return parent.width - (popup.width + hotspot.x);
// }
// function isPopBeyondVertical(button) {
//     const {parent, hotspot, popup} = getHotspotBounds(button);
// }

function openHotspot(hotspot) {
    hotspot.classList.add('_active');
    // isPopBeyondVertical(hotspot)
}
function closeHotspot(hotspot) {
    hotspot.classList.remove('_active');
}

hotspotCircles.forEach((hotspot, index) => {
    const hotspotClass = `hotspot-${index}`
    hotspot.classList.add(hotspotClass);
    window.addEventListener("click", (e) => {
        if (hotspot.classList.contains('_active')) {
            closeHotspot(hotspot)
            return;
        }

        if (isClickedBeyond(e, hotspotClass)) {
            closeHotspot(hotspot)
        } else {
            openHotspot(hotspot)
        }
    })
});