/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//slick slider code
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

if (w<950){
document.getElementById("filterAll").style.display = "none";
}

function showFilters() {
     var x = document.getElementById("filterAll");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    }
document.getElementById("filterBtn").addEventListener("click", showFilters);
             