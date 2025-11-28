// const cursorDot = document.querySelector("[data-cursor-dot]");
// const cursorOutline = document.querySelector("[data-cursor-outline]");
// window.addEventListener("mousemove", function(e){
//  const posX = e.clientX;
//  const posY = e.clientY;

//  cursorDot.style.left = '${posX}px';
//  cursorDot.style.top = '${posY}px';

// //  cursorOutline.style.left = '${posX}px';
// //  cursorOutline.style.top = '${posY}px';

//    cursorOutline.animate({
//     left:'${posX}px',
//     top:'${posY}px'
//    })
// }, {duration:500, fill:"forwards"});

document.addEventListener("DOMContentLoaded", function () {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    if (!cursorDot || !cursorOutline) {
        console.error("Cursor elements not found!");
        return;
    }

    window.addEventListener("mousemove", function (e) {
        let posX = e.clientX;
        let posY = e.clientY;

        // Move the small dot instantly
        cursorDot.style.left = ${posX}px;
        cursorDot.style.top = ${posY}px;

        // Smooth animation for the outline
        cursorOutline.animate(
            { left: ${posX}px, top: ${posY}px },
            { duration: 150, fill: "forwards" }
      );
 });
});