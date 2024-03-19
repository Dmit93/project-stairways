if (document.querySelector('[data-step-content]')) {
    const options = {
        root: null,
        rootMargin: '50px',
        threshold: .5
    }


    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {
            // если элемент является наблюдаемым
            if (entry.isIntersecting) {
                const step = entry.target.getAttribute('data-step');

                document.querySelector(`[data-step-content]._active`).classList.remove('_active')
                document.querySelector(`[data-step-content="${step}"]`).classList.add('_active')

                // прекращаем наблюдение
                // observer.unobserve(step)
            }
        })
    }, options)


    const arr = document.querySelectorAll('[data-step]')
    arr.forEach(i => {
        observer.observe(i)
    })
}

// const hash = window.location.hash.replace("#", "");
// if (hash !== '') {
//     document.querySelector(`.poppa__overlay[data-poppa-name="${hash}"]`).classList.add('_show');
// }