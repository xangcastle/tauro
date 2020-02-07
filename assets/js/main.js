window.addEventListener('load', function (e) {

    let burger = document.querySelector('.mobil-menu'),
        nav = document.querySelector('.mobil-nav'),
        links = document.querySelectorAll('.mobil-nav a');

    burger.addEventListener('click', function (e) {
        nav.classList.toggle('is-open');
    });

    links.forEach(function (el, k) {
        el.addEventListener('click', function () {
            nav.classList.remove('is-open');
        })
    })

    $.scrollIt({
        upKey: 38,                // key code to navigate to the next section
        downKey: 40,              // key code to navigate to the previous section
        easing: 'swing',          // the easing function for animation
        scrollTime: 600,          // how long (in ms) the animation takes
        activeClass: 'active',    // class given to the active nav element
        onPageChange: null,       // function(pageIndex) that is called when page is changed
        topOffset: -63            // offste (in px) for fixed top navigation
    });

    new WOW({
        boxClass: 'wow',      // default
        animateClass: 'animated', // default
        offset: 0          // default
    }).init();
});