
// ............. DONUTS GSAP CODE ..............
let donut1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".orenge-donut",
    start: "35% 40%",
    end: "bottom 40%",
    scrub: true,
    markers: false,
  },
});
donut1.to(".orenge-donut", {
  y: -400,
  rotation: 200,
  scale: 1,
});

let donut2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".blueberry-donut",
    start: "30% 35%",
    end: "bottom 35%",
    scrub: true,
    markers: false,
  },
});

donut2.to(".blueberry-donut", {
  y: -400,
  rotation: 200,
});

let donut3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".greenapple-donut",
    start: "top 40%",
    end: "30% 40%",
    scrub: true,
    markers: false,
  },
});
donut3.to(".greenapple-donut", {
  y: -10,
  rotation: 0,
});

// ............. Background GSAP CODE ..............

let bg1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".blueberry-bg",
    start: "1000% 10%",
    end: "2200% 10%",
    scrub: true,
    markers: false,
  },
});
bg1.to(".blueberry-bg", {
  y: 1100,
  scale: 100,
});

let bg2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".greenapple-bg",
    start: "top 10%",
    end: "1500% 10%",
    scrub: true,
    markers: false,
  },
});
bg2.to(".greenapple-bg", {
  y: 1100,
  scale: 120,
});

// ............. Elements GSAP CODE ..............

let orange2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".orange2",
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: false,
  },
});
orange2.to(".orange2", {
  y: -500,
});

let blueberry1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".blueberry1",
    start: "-40% 80%",
    end: "70% 80%",
    scrub: true,
    markers: false,
  },
});
blueberry1.to(".blueberry1", {
  y: -350,
});

let blueberry2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".blueberry2",
    start: "-10% 60%",
    end: "bottom 60%",
    scrub: true,
    markers: false,
  },
});
blueberry2.to(".blueberry2", {
  y: -550,
});

let greenapple1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".greenapple1",
    start: "-40% 80%",
    end: "70% 80%",
    scrub: true,
    markers: false,
  },
});
greenapple1.to(".greenapple1", {
  y: -200,
});

// ............. Title GSAP CODE ..............

let orangeTitle = gsap.timeline({
  scrollTrigger: {
    trigger: ".orangeTitle",
    start: "15% 10%",
    end: "90% 10%",
    scrub: true,
    markers: false,
  },
});
orangeTitle.to(".orangeTitle", {
  y: -80,
});

let blueberryTitle = gsap.timeline({
  scrollTrigger: {
    trigger: ".blueberryTitle",
    start: "-40% 80%",
    end: "70% 80%",
    scrub: true,
    markers: false,
  },
});
blueberryTitle.to(".blueberryTitle", {
  y: -140,
});

let greenappleTitle = gsap.timeline({
  scrollTrigger: {
    trigger: ".greenappleTitle",
    start: "-40% 80%",
    end: "70% 80%",
    scrub: true,
    markers: false,
  },
});
greenappleTitle.to(".greenappleTitle", {
  y: -140,
});

// ............. Smooth Scroll CODE ..............

// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
  console.log(e);
});

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on("scroll", ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);