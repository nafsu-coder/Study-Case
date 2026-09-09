/* =====================================
   CUSTOM CURSOR
===================================== */

const cursor = document.querySelector(".cursor");


document.addEventListener("mousemove", (event) => {

    if (!cursor) return;

    cursor.style.left = `${event.clientX}px`;

    cursor.style.top = `${event.clientY}px`;

});



/* =====================================
   CURSOR HOVER EFFECT
===================================== */

const interactiveElements =
    document.querySelectorAll(
        "a, .image-wrap, .hero-image"
    );


interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        if (cursor) {

            cursor.classList.add("large");

        }

    });


    element.addEventListener("mouseleave", () => {

        if (cursor) {

            cursor.classList.remove("large");

        }

    });

});



/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements =
    document.querySelectorAll(
        ".section, .statement, .final, footer"
    );


const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            } else {

                /*
                 * Remove animation class when
                 * section leaves viewport.
                 *
                 * Therefore animation happens
                 * again when scrolling back.
                 */

                entry.target.classList.remove("show");

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* =====================================
   IMAGE LOAD EFFECT
===================================== */

const images =
    document.querySelectorAll("img");


images.forEach((image) => {

    image.addEventListener("load", () => {

        image.classList.add("loaded");

    });

});