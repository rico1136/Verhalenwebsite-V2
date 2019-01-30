/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//slick slider code
var knop = document.getElementById("filterBtn");
var filterForm = document.getElementById("filterAll");
var smileyKnop = document.getElementById("smileyBtn");
var verrasMe = document.getElementById("verrasMe");

var plusOne = document.querySelectorAll(".FadeIn");
var plusOne2 = document.querySelectorAll(".FadeIn2");


var smiley = document.querySelectorAll(".smiley");

var sterren = document.querySelector(".ster");
var favorieten = document.querySelector(".Favorieten");
console.log(favorieten);


//https://stackoverflow.com/questions/8102940/javascript-check-what-page-has-loaded
var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

console.log(sPath);


function verrasMeVerhaal() {
    window.location = './verhaal.html';
}



function showFilters() {
    filterForm.classList.toggle("show");
}

function showSmileys() {
    smiley[0].classList.toggle("show");
    smiley[1].classList.toggle("show");
    smiley[2].classList.toggle("show");
    smiley[3].classList.toggle("show");
    smiley[4].classList.toggle("show");
}

function hideSmileys() {
    showSmileys();
    smiley[4].classList.toggle("chosen");
}




function changeToGif() {
    console.log("bleet?");
    sterren.src = "images/gif/ster-gif2.gif";
    console.log(favorieten.innerHTML);
    console.log(plusOne);
    console.log(plusOne2);
    plusOne2[0].classList.toggle("fadeInRightBig");
    plusOne[0].classList.toggle("fadeInRightBig");
}



/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//geent tijd om aan te passen
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var p6 = document.getElementById("p6");
var p7 = document.getElementById("p7");
var p8 = document.getElementById("p8");
var p9 = document.getElementById("p9");
var p10 = document.getElementById("p10");
var p11 = document.getElementById("p11");
var p12 = document.getElementById("p12");
var p13 = document.getElementById("p13");

console.log(p1);
if (sPage == "verhaal.html") {
    window.addEventListener('scroll', function () {
        if (isElementInViewport(p1)) {
            if (p1.classList == "showP") {
                console.log("nope");

            } else {
                p1.classList.toggle("showP");
                console.log(p1.classList);
            }
        }

        if (isElementInViewport(p2)) {
            if (p2.classList == "showP") {
                console.log("nope");

            } else {
                p2.classList.toggle("showP");
                console.log(p1.classList);
            }
        }

        if (isElementInViewport(p3)) {
            if (p3.classList == "showP") {
                console.log("nope");

            } else {
                p3.classList.toggle("showP");
                console.log(p1.classList);
            }
        }

        if (isElementInViewport(p4)) {
            if (p4.classList == "showP") {
                console.log("nope");

            } else {
                p4.classList.toggle("showP");
                console.log(p1.classList);
            }
        }
        if (isElementInViewport(p5)) {
            if (p5.classList == "showP") {
                console.log("nope");

            } else {
                p5.classList.toggle("showP");
                console.log(p1.classList);
            }
        }
        if (isElementInViewport(p6)) {
            if (p6.classList == "showP") {
                console.log("nope");

            } else {
                p6.classList.toggle("showP");
                console.log(p1.classList);
            }
        }
        if (isElementInViewport(p7)) {
            if (p7.classList == "showP") {
                console.log("nope");

            } else {
                p7.classList.toggle("showP");
                console.log(p1.classList);
            }
        }
        if (isElementInViewport(p8)) {
            if (p8.classList == "showP") {
                console.log("nope");

            } else {
                p8.classList.toggle("showP");
                console.log(p1.classList);
            }
        }
        if (isElementInViewport(p9)) {
            if (p9.classList == "showP") {
                console.log("nope");

            } else {
                p9.classList.toggle("showP");
                console.log(p1.classList);
            }
        }
        if (isElementInViewport(p10)) {
            if (p10.classList == "showP") {
                console.log("nope");

            } else {
                p10.classList.toggle("showP");
                console.log(p1.classList);
            }
        }
        if (isElementInViewport(p11)) {
            if (p11.classList == "showP") {
                console.log("nope");

            } else {
                p11.classList.toggle("showP");
                console.log(p1.classList);
            }
        }
        if (isElementInViewport(p12)) {
            if (p12.classList == "showP") {
                console.log("nope");
            } else {
                p12.classList.toggle("showP");
                console.log(p1.classList);
            }
        }
        if (isElementInViewport(p13)) {
            if (p13.classList == "showP") {
                console.log("nope");

            } else {
                p13.classList.toggle("showP");
                console.log(p1.classList);
            }
        }
    }, false);


    smiley[4].addEventListener("click", hideSmileys);
    smileyKnop.addEventListener("click", showSmileys);

}

if (sPage == "index.html" || sPage == "index2.html") {
    knop.addEventListener("click", showFilters);
    sterren.addEventListener("click", changeToGif);
    verrasMe.addEventListener("click", verrasMeVerhaal);
}
