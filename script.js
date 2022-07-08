// Función para que se muestre la opción del menu que está seleccionada momentáneamente

function select(link){
    let options = document.querySelectorAll('#links a');
    options[0].className = "";
    options[1].className = "";
    options[2].className = "";
    options[3].className = "";
    options[4].className = "";

    // Una vez seleccionado una opción del menu, este se cerrará
    let x = document.getElementById("nav");
    x.className = "";
}

// Función para mostrar el menú responsivo

function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

// Función fade in on scrolling 

window.onscroll = function(){fadeInOnScrollingEffects()};

let myPhoto = document.getElementById("my-photo");
let aboutMe = document.getElementById("about-me");

let distance_myPhoto, distance_aboutMe;

function fadeInOnScrollingEffects(){
    distance_myPhoto = window.innerHeight - myPhoto.getBoundingClientRect().top;
    if(distance_myPhoto >= 200){
        myPhoto.classList.add("my-photo-effect");
    };

    distance_aboutMe = window.innerHeight - aboutMe.getBoundingClientRect().top;
    if(distance_aboutMe >= 200){
        aboutMe.classList.add("about-me-effect");
    };
    
};