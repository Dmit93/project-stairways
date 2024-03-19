const scrollMouse = (element, speedArgs = 2) => {

    let speed = speedArgs; // Скорость скролла.

    let scroll = element;

    let left = 0; // отпустили мышку - сохраняем положение скролла
    let drag = false;
    let coorX = 0; // нажали мышку - сохраняем координаты.

    if (scroll) {
        scroll.addEventListener('mousedown', function(e) {
            drag = true;
            coorX = e.pageX - this.offsetLeft;
        });
        document.addEventListener('mouseup', function() {
            drag = false;
            left = scroll.scrollLeft;
        });
        scroll.addEventListener('mousemove', function(e) {
            if (drag) {
                this.scrollLeft = left + (e.pageX - this.offsetLeft - coorX) * speed;
            }
        });
    }
}

document.querySelectorAll('[data-scroll]').forEach(el => scrollMouse(el));