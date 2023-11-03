var circle = document.querySelector("#circle");
var frame = document.querySelector(".frame");

const lerp = (x, y, a) => x * (1 - a) + y * a;

window.addEventListener("mousemove", function (dets) {
  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.2,
    ease: Expo,
    
  });
});

frame.addEventListener("mousemove", function (dets) {
  var dims = frame.getBoundingClientRect();

  var xstart = dims.x;
  var xend = dims.x + dims.width;

  var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

  gsap.to(circle, {
    scale: 8,
    background: "rgb(255,0,0)",
  });

  gsap.to(".frame span", {
    color: "#fff",
    duration: 0.4,
    y: "-5vw",
  });

  gsap.to(".frame span", {
    x: lerp(-50, 50, zeroone),
    duration: 0.3,
  });
});

frame.addEventListener("mouseleave", function (dets) {
  gsap.to(circle, {
    scale: 0.5,
    background: "royalblue",
  });

  gsap.to(".frame span", {
    color: "#000",
    duration: 0.4,
    y:0,
  });

  gsap.to(".frame span", {
    x: 0,
    duration: 0.3,
  });
});
