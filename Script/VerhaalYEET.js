/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var delayInMilliseconds = 1000; //1 second

var alinea = document.querySelectorAll(".alinea");

var eersteText = document.querySelectorAll(".eersteRegels");
var tweedeText = document.querySelectorAll(".tweedeRegels");
var derdeText = document.querySelectorAll(".derdeRegels");
var vierdeText = document.querySelectorAll(".vierdeRegels");

var button = document.querySelectorAll(".smileyBtn");

var main = document.querySelector(".verhaalMain");

var yeet = 0;

var smiley = document.querySelectorAll(".smiley");



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

function verrasMeVerhaal1() {
    if (yeet === 0) {
        main.classList.toggle("shake");
        eersteText[0].classList.toggle("background");
        alinea[0].classList.toggle("black");
        setTimeout(function () {
            alinea[0].innerHTML = "Ik stap bus 21 uit terwijl ik mijn zoon op nog geen halve meter hinderlijk achtervolg. De gore klootzak heeft een uur geleden in z’n luier gescheten en dat pik ik niet!";
            main.classList.toggle("shake");
            alinea[1].innerHTML = "click me";
        }, delayInMilliseconds);
        yeet++;
    } else if (yeet == 4) {
        main.classList.toggle("shake");
        eersteText[0].classList.toggle("background");
        alinea[0].classList.toggle("black");
        setTimeout(function () {
            alinea[0].innerHTML = "Ik pis op de post. Ze kan een kopstoot van me krijgen. Het loeder strompelt naar een auto die achteruit van haar weg rijdt.";
            main.classList.toggle("shake");
            alinea[1].innerHTML = "click me";
        }, delayInMilliseconds);
        yeet++;
        vierdeText[0].classList.toggle("background");
        alinea[3].classList.toggle("black");
        alinea[3].innerHTML = "";
    } else if (yeet == 8) {
        main.classList.toggle("shake");
        eersteText[0].classList.toggle("background");
        alinea[0].classList.toggle("black");
        setTimeout(function () {
            alinea[0].innerHTML = "De syfilislijer ligt op de grond. Hij bloedt uit een hoofdwond en zegt hakkelend dat ik het magazijn moet mailen. Die weten wel waar Queneau met z’n Stijloefeningen is.";
            main.classList.toggle("shake");
            alinea[1].innerHTML = "click me";
        }, delayInMilliseconds);
        yeet++;
        vierdeText[0].classList.toggle("background");
        alinea[3].classList.toggle("black");
        alinea[3].innerHTML = "";
    } else if (yeet == 12) {
        button[0].classList.toggle("showBtn");
        alinea[0].innerHTML = "";
        vierdeText[0].classList.toggle("background");
        alinea[3].classList.toggle("black");
        alinea[3].innerHTML = "";
    }

}

function verrasMeVerhaal2() {
    if (yeet == 1) {
        main.classList.toggle("shake");
        tweedeText[0].classList.toggle("background");
        alinea[1].classList.toggle("black");
        setTimeout(function () {
            alinea[1].innerHTML = "Maar hij slaapt, de hond. Hordes teringlijers en kankerhoeren lopen van en naar het Centraal Station van Amsterdam.";
            main.classList.toggle("shake");
            alinea[2].innerHTML = "click me";
        }, delayInMilliseconds);
        yeet++;
        eersteText[0].classList.toggle("background");
        alinea[0].classList.toggle("black");
        alinea[0].innerHTML = "";
    } else if (yeet == 5) {
        main.classList.toggle("shake");
        tweedeText[0].classList.toggle("background");
        alinea[1].classList.toggle("black");
        setTimeout(function () {
            alinea[1].innerHTML = "Binnen ga ik op zoek naar Stijloefening. Nergens te vinden. Ik kijk in de computer. Daarin staat dat er wel degelijk een exemplaar aanwezig is.";
            main.classList.toggle("shake");
            alinea[2].innerHTML = "click me";
        }, delayInMilliseconds);
        yeet++;
        eersteText[0].classList.toggle("background");
        alinea[0].classList.toggle("black");
        alinea[0].innerHTML = "";
    } else if (yeet == 9) {
        main.classList.toggle("shake");
        tweedeText[0].classList.toggle("background");
        alinea[1].classList.toggle("black");
        setTimeout(function () {
            alinea[1].innerHTML = " Ik snuif de geur van angst op (heerlijk!), loop naar het magazijn en zeg wat ik zoek. Ze verwijzen me naar de tweede verdieping, waar ik net vandaan kom.";
            main.classList.toggle("shake");
            alinea[2].innerHTML = "click me";
        }, delayInMilliseconds);
        yeet++;
        eersteText[0].classList.toggle("background");
        alinea[0].classList.toggle("black");
        alinea[0].innerHTML = "";
    }
}

function verrasMeVerhaal3() {
    if (yeet == 2) {

        main.classList.toggle("shake");
        derdeText[0].classList.toggle("background");
        alinea[2].classList.toggle("black");
        setTimeout(function () {
            alinea[2].innerHTML = "Ik ben op weg naar de Openbare Bibliotheek om in Stijloefeningen van Raymond Queneau te pissen. Het miezert. De weg naar de bibliotheek is nat en zompig.";
            main.classList.toggle("shake");
            alinea[3].innerHTML = "click me";

        }, delayInMilliseconds);
        yeet++;
        tweedeText[0].classList.toggle("background");
        alinea[1].classList.toggle("black");
        alinea[1].innerHTML = "";
    } else if (yeet == 6) {
        main.classList.toggle("shake");
        derdeText[0].classList.toggle("background");
        alinea[2].classList.toggle("black");
        setTimeout(function () {
            alinea[2].innerHTML = "Waardeloos stuk hard geworden kak. Ik beuk ’m met z’n kutkop tegen een stalen kaartenbak aan en geef ’m een hengst met een exemplaar van De Puinhopen van Paars.";
            main.classList.toggle("shake");
            alinea[3].innerHTML = "click me";

        }, delayInMilliseconds);
        yeet++;
        tweedeText[0].classList.toggle("background");
        alinea[1].classList.toggle("black");
        alinea[1].innerHTML = "";
    } else if (yeet == 10) {
        main.classList.toggle("shake");
        derdeText[0].classList.toggle("background");
        alinea[2].classList.toggle("black");
        setTimeout(function () {
            alinea[2].innerHTML = "De magazijnmedewerker bloedt, nog voordat ze haar zin helemaal heeft uitgesproken, uit haar oor.";
            main.classList.toggle("shake");
            alinea[3].innerHTML = "click me";

        }, delayInMilliseconds);
        yeet++;
        tweedeText[0].classList.toggle("background");
        alinea[1].classList.toggle("black");
        alinea[1].innerHTML = "";
    }
}

function verrasMeVerhaal4() {
    if (yeet == 3) {
        main.classList.toggle("shake");
        vierdeText[0].classList.toggle("background");
        alinea[3].classList.toggle("black");
        setTimeout(function () {
            alinea[3].innerHTML = " Overal bouwputten. Vlak voor de bibliotheek wordt ik aangeklampt door een of andere buitenlandse hoer die me vraagt waar of dat het postkantoor is. Rot op kankerwijf.";
            main.classList.toggle("shake");
            alinea[0].innerHTML = "click me";
        }, delayInMilliseconds);
        yeet++;
        derdeText[0].classList.toggle("background");
        alinea[2].classList.toggle("black");
        alinea[2].innerHTML = "";
    } else if (yeet == 7) {
        main.classList.toggle("shake");
        vierdeText[0].classList.toggle("background");
        alinea[3].classList.toggle("black");
        setTimeout(function () {
            alinea[3].innerHTML = "Dat zal ’m leren.";
            main.classList.toggle("shake");
            alinea[0].innerHTML = "click me";
        }, delayInMilliseconds);
        yeet++;
        derdeText[0].classList.toggle("background");
        alinea[2].classList.toggle("black");
        alinea[2].innerHTML = "";
    } else if (yeet == 11) {
        main.classList.toggle("shake");
        vierdeText[0].classList.toggle("background");
        alinea[3].classList.toggle("black");
        setTimeout(function () {
            alinea[3].innerHTML = "Op het Bos en Lommerplein pis ik door de brievenbus van een babywinkel.";
            main.classList.toggle("shake");
            alinea[0].innerHTML = "Show Comments";
        }, delayInMilliseconds);
        yeet++;
        derdeText[0].classList.toggle("background");
        alinea[2].classList.toggle("black");
        alinea[2].innerHTML = "";
    }
}

eersteText[0].addEventListener("click", verrasMeVerhaal1);
tweedeText[0].addEventListener("click", verrasMeVerhaal2);
derdeText[0].addEventListener("click", verrasMeVerhaal3);
vierdeText[0].addEventListener("click", verrasMeVerhaal4);
button[0].addEventListener("click", showSmileys);
smiley[4].addEventListener("click", hideSmileys);

/* Ik stap bus 21 uit terwijl ik mijn zoon op nog geen halve meter hinderlijk achtervolg. De
gore klootzak heeft een uur geleden in z’n luier gescheten en dat pik ik niet. Maar hij
slaapt, de hond. Hordes teringlijers en kankerhoeren lopen van en naar het Centraal
Station van Amsterdam. Ik ben op weg naar de Openbare Bibliotheek om in
Stijloefeningen van Raymond Queneau te pissen. Het miezert. De weg naar de bibliotheek
is nat en zompig. Overal bouwputten.
Vlak voor de bibliotheek wordt ik aangeklampt door een of andere buitenlandse hoer die
me vraagt waar of dat het postkantoor is. Rot op kankerwijf. Ik pis op de post. Ze kan een
kopstoot van me krijgen. Het loeder strompelt naar een auto die achteruit van haar weg
rijdt.
Binnen ga ik op zoek naar Stijloefening. Nergens te vinden. Ik kijk in de computer.
Daarin staat dat er wel degelijk een exemplaar aanwezig is. Ik haal er een medewerker bij,
maar ook die kan ’m niet vinden. Waardeloos stuk hard geworden kak. Ik beuk ’m met z’n
kutkop tegen een stalen kaartenbak aan en geef ’m een hengst met een exemplaar van De
Puinhopen van Paars. Dat zal ’m leren. De syfilislijer ligt op de grond. Hij bloedt uit een
hoofdwond en zegt hakkelend dat ik het magazijn moet mailen. Die weten wel waar
Queneau met z’n Stijloefeningen is. Ik snuif de geur van angst op (heerlijk!), loop naar het
magazijn en zeg wat ik zoek. Ze verwijzen me naar de tweede verdieping, waar ik net
vandaan kom. De magazijnmedewerker bloedt, nog voordat ze haar zin helemaal heeft
uitgesproken, uit haar oor.
Op het Bos en Lommerplein pis ik door de brievenbus van een babywinkel. */
