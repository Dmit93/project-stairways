import { mediaMin, mediaMax } from "../utils/functions.js";

// function updatePosition() {
//     const margin = mediaMax('1700') ?
//         mediaMax('992') ? 36 : 56 :
//         124;
//     const offsetExtreme = 18
//     document.querySelectorAll('.proud-card.proud-card--has-callout .proud-card__callout').forEach((el, index) => {
//         const parentPos = el.querySelector('.proud-card__callout--box').getBoundingClientRect();
//         const childPos = el.closest('.proud-card').getBoundingClientRect();
//         let coordTop = parentPos.top - childPos.top;
//         let coordLeft = parentPos.left - childPos.left;
//         let height = el.querySelector('.proud-card__callout--box').scrollHeight;
//         // console.log(height, el.querySelector('.proud-card__callout--box').scrollHeight);
//         let additionalPadding = index !== 1 ? offsetExtreme : 0;
//         el.closest('.proud-card').nextElementSibling.style.cssText = `
//             top: ${coordTop + el.offsetTop + height + margin}px;
//             left: ${coordLeft - additionalPadding}px;
//         `
//     });
// }

// window.addEventListener('load', () => updatePosition());

if (document.querySelector('.proud-card')) {
    let flage = false;
    window.addEventListener('resize', () => updatePosition());

    const updatePosition = () => {
        if (flage) return false;
        if (mediaMin('650')) {
            document.querySelectorAll('.proud-card:not(.proud-card--has-callout)').forEach(el => {
                let elemClone = el.cloneNode(true);
                el.previousElementSibling.querySelector('.proud-card__callout--box').insertAdjacentHTML('beforeend', elemClone.outerHTML);
                el.remove();
            });
            flage = true;
        } else {
            flage = false;
        }
    }

    updatePosition();
}