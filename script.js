/* =========================================
   GOLDEN YEARS OF EDELIZA
   50TH BIRTHDAY CELEBRATION
========================================= */



/* =========================================
        COUNTDOWN TIMER
========================================= */


// July 18, 2026 at 10:00 AM Philippine time (UTC+8).
const birthdayDate = new Date(
    "2026-07-18T10:00:00+08:00"
).getTime();



const countdownTimer = setInterval(function(){


    const currentTime =
    new Date().getTime();



    const distance =
    birthdayDate - currentTime;




    const days =
    Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );



    const hours =
    Math.floor(
        (distance %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );



    const minutes =
    Math.floor(
        (distance %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );



    const seconds =
    Math.floor(
        (distance %
        (1000 * 60))
        /
        1000
    );





    document.getElementById("days")
    .innerHTML =
    addZero(days);



    document.getElementById("hours")
    .innerHTML =
    addZero(hours);



    document.getElementById("minutes")
    .innerHTML =
    addZero(minutes);



    document.getElementById("seconds")
    .innerHTML =
    addZero(seconds);





    if(distance < 0){


        clearInterval(countdownTimer);



        document.getElementById("days")
        .innerHTML="00";


        document.getElementById("hours")
        .innerHTML="00";


        document.getElementById("minutes")
        .innerHTML="00";


        document.getElementById("seconds")
        .innerHTML="00";



    }




},1000);





function addZero(number){

    return number < 10
    ? "0"+number
    : number;

}









/* =========================================
        GOLD GLITTER EFFECT
========================================= */



function createGoldSparkle(){



    const sparkle =
    document.createElement("div");



    sparkle.className =
    "sparkle-effect";



    sparkle.style.left =
    Math.random()*100 + "%";



    sparkle.style.animationDuration =
    (Math.random()*3+3)+"s";



    sparkle.style.opacity =
    Math.random();



    const size =
    Math.random()*8+4;



    sparkle.style.width =
    size+"px";


    sparkle.style.height =
    size+"px";



    document.body.appendChild(sparkle);




    setTimeout(()=>{


        sparkle.remove();


    },6000);



}




// create sparkle every second

setInterval(
    createGoldSparkle,
    400
);









/* =========================================
        SCROLL ANIMATION
========================================= */


const animatedElements =
document.querySelectorAll(
".detail-card, .note-container, .rsvp-box, .countdown-box"
);





const revealObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);



}


});


},
{
threshold:0.15
}

);






animatedElements.forEach(element=>{


element.classList.add(
"hidden"
);


revealObserver.observe(element);


});









/* =========================================
        IMAGE EFFECT
========================================= */


const pictures =
document.querySelectorAll("img:not(.circle-photo img)");



pictures.forEach(image=>{


image.addEventListener(
"mouseenter",
()=>{


image.style.transition =
"0.5s ease";


image.style.transform =
"scale(1.05)";



}

);





image.addEventListener(
"mouseleave",
()=>{


image.style.transform =
"scale(1)";


}

);



});









/* =========================================
        NAVBAR ACTIVE EFFECT
========================================= */


const sections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll(
".nav-links a"
);




window.addEventListener(
"scroll",
()=>{


let current="";



sections.forEach(section=>{


const sectionTop =
section.offsetTop - 150;



const sectionHeight =
section.clientHeight;



if(
pageYOffset >= sectionTop &&
pageYOffset < sectionTop + sectionHeight
){


current =
section.getAttribute("id");


}



});





navLinks.forEach(link=>{


link.style.color="";



if(
link.getAttribute("href")
.includes(current)
){


link.style.color =
"#c69214";


}



});



});









/* =========================================
        GOLDEN AGE MESSAGE EFFECT
========================================= */


const goldenTitle =
document.querySelector(".hero-text h1");



if(goldenTitle){


goldenTitle.addEventListener(
"mouseenter",
()=>{


goldenTitle.style.textShadow =

"0 0 30px #d4af37";


}

);



goldenTitle.addEventListener(
"mouseleave",
()=>{


goldenTitle.style.textShadow = "";



}

);


}
