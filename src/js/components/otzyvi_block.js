import { doc } from 'prettier';
import { mediaMin } from "../utils/functions.js";
import { msnr } from './grid-masonry.js'


if (document.querySelector('.reviews__container')) {

    document.querySelector('.reviews__container').addEventListener('click', function(e) {
        if (e.target.classList.contains('reviews__photos-more')) {
            e.target.parentElement.classList.toggle('reviews__photos--active');
            // mediaMin('650') ? msnr.layout() : '';

            if (e.target.parentElement.classList.contains('reviews__photos--active')) {
                e.target.innerText = '-'
            } else {
                let countPhoto = e.target.parentElement.querySelectorAll('.reviews__media').length - countInMedia();
                e.target.parentElement.querySelector('.reviews__photos-more').innerText = `+${countPhoto}`
            }
        }
    });


    // Подсчет скрытых фотографий
    const countInMedia = () => mediaMin('720') ? 4 : 2

    document.querySelectorAll('.reviews__photos').forEach(el => {
        let countPhoto = el.querySelectorAll('.reviews__media').length - countInMedia();
        el.querySelector('.reviews__photos-more').innerText = `+${countPhoto}`
    });

}