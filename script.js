function navAnimation() {
  let nav = document.querySelector(".nav-right");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();

    tl.to(".nav-bottom", {
      height: "22vh",
    });

    tl.to(".nav-right h5", {
      display: "block",
    });
    tl.to(".nav-right h5 span", {
      y: 0,
      // duration:0.3,
      stagger: {
        amount: 0.6,
      },
    });
  });

  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to(".nav-right h5 span", {
      y: 25,
      // duration:0.3,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-right h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to(".nav-bottom", {
      height: 0,
      duration: 0.2,
    });
  });
}

function page2Animation() {
  var rightElems = document.querySelectorAll(".right-elem");

  rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 80,
        y: dets.y - elem.getBoundingClientRect().y - 113,
      });
    });
  });
}

function page3VideoAnimation() {
  var page3center = document.querySelector(".page3-center");
  var video = document.querySelector("#page3 video");

  page3center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });

  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });

  var sections = document.querySelectorAll(".sec-right");

  sections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });
    elem.addEventListener("mouseleave", function () {
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[3].load();
    });
  });
}

function page11Animations() {
  gsap.from(".btm11-animation h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".btm11-animation",
      scroller: "body",
      // markers:true,
      start: "top 90%",
      end: "top 0%",
      scrub: true,
    },
  });
}

// navAnimation()
page2Animation();
page3VideoAnimation();
page11Animations();

const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("mobnavbar");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
  toggle.classList.toggle("open");
});
