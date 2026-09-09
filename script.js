const reveals=document.querySelectorAll(".reveal");
const io=new IntersectionObserver(entries=>entries.
    forEach(e=>{if(e.isIntersecting)e.
        target.classList.
        add("show")}),{threshold:.1});reveals.
    forEach(x=>io.observe(x));
document.querySelectorAll(".filters button").forEach(btn=>btn.
    addEventListener("click",()=>{document.querySelectorAll(".filters button").forEach(b=>b.
        classList.
        remove("active"));
btn.classList.add("active");
const f=btn.dataset.filter;
document.querySelectorAll(".archive-card").forEach(c=>c.style.display=f==="all"||c.dataset.cat.includes(f)?"":"none")}));


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            } else {

                // Remove this if you want the animation
                // to happen only once.

                entry.target.classList.remove("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* =========================================
   IMAGE LOADING
========================================= */

const images = document.querySelectorAll("img");


images.forEach((image) => {

    image.addEventListener("load", () => {

        image.classList.add("loaded");

    });

});



/* =========================================
   IMAGE ERROR MESSAGE
========================================= */

images.forEach((image) => {

    image.addEventListener("error", () => {

        console.log(
            "Image could not be loaded:",
            image.src
        );

    });

});



/* =========================================
   CURRENT PAGE
========================================= */

const currentPage =
    window.location.pathname.split("/").pop();


const navigationLinks =
    document.querySelectorAll(".nav nav a");


navigationLinks.forEach((link) => {

    const linkPage =
        link.getAttribute("href");


    if (linkPage === currentPage) {

        link.classList.add("active");

    }

});

