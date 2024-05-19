
document.addEventListener('DOMContentLoaded', () => {

    // Navbar burger menu toggle for mobile view
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if (navbarBurgers.length > 0) {
        navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const targetElement = document.getElementById(target);
                el.classList.toggle('is-active');
                targetElement.classList.toggle('is-active');
            });
        });
    }

    const toggler = document.getElementsByClassName("caret");
    for (let i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function () {
            this.parentElement.querySelector(".nested").classList.toggle("active");
        });
    }


    /* TABS */
    const tabs = document.querySelectorAll('.tabs li');
    const tabContentBoxes = document.querySelectorAll('.content-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(item => item.classList.remove('is-active'));
            tab.classList.add('is-active');

            const target = tab.dataset.tab;
            tabContentBoxes.forEach(box => {
                if (box.id === target) {
                    box.classList.add('is-active');
                } else {
                    box.classList.remove('is-active');
                }
            });
        });
    });
});
