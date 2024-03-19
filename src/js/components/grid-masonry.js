import { mediaMin, mediaMax } from "../utils/functions.js";

const returnGutt = () => {
    let gutt = 0;
    if (mediaMax('720')) {
        gutt = 16;
        return gutt;
    }
    if (mediaMax('1400')) {
        gutt = 24;
        return gutt;
    }

    if (mediaMin('1300')) {
        gutt = 36;
        return gutt;
    }
}

const gridMasonry = document.querySelector('.grid-masonry');
let msnr;
if (gridMasonry && mediaMin('650')) {
    msnr = new Masonry(gridMasonry, {
        // options...
        itemSelector: '.grid-item-masonry',
        gutter: returnGutt(),
        columnWidth: '.grid-item-masonry',
        percentPosition: true

    });
}

export { msnr }