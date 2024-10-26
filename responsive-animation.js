// ............. DONUTS GSAP CODE ..............
let mobileDonut1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".mobile-orenge-donut",
    start: "60% center",
    end: "bottom center",
    scrub: true,
    markers: false,
  },
});
mobileDonut1.to(".mobile-orenge-donut", {
  y: -100,
  rotation: 200,
  scale: 1,
});

let mobileDonut2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".mobile-blueberry-donut",
    start: "60% center",
    end: "bottom center",
    scrub: true,
    markers: false,
  },
});
mobileDonut2.to(".mobile-blueberry-donut", {
  y: -100,
  rotation: 200,
  scale: 1,
});

//   let mobileDonut3 = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".mobile-greenapple-donut",
//       start: "top center",
//       end: "30% center",
//       scrub: true,
//       markers: true,
//     },
//   });
//   mobileDonut3.to(".mobile-greenapple-donut", {
//     y: -100,
//     rotation: 200,
//     scale: 1,
//   });

// ............. Background GSAP CODE ..............

let mobileBg1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".mobile-blueberry-bg",
    start: "1000% 10%",
    end: "2200% 10%",
    scrub: true,
    markers: false,
  },
});
mobileBg1.to(".mobile-blueberry-bg", {
  y: 1100,
  scale: 110,
});

let mobileBg2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".mobile-greenapple-bg",
    start: "100% 20%",
    end: "1500% 20%",
    scrub: true,
    markers: false,
  },
});
mobileBg2.to(".mobile-greenapple-bg", {
  y: 1100,
  scale: 100,
});

// ............. Elements GSAP CODE ..............

let mobileOrange2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".mobileOrange2",
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: false,
  },
});
mobileOrange2.to(".mobileOrange2", {
  y: -400,
});

let mobileBlueberry1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".mobileBlueberry1",
    start: "-40% 60%",
    end: "70% 60%",
    scrub: true,
    markers: false,
  },
});
mobileBlueberry1.to(".mobileBlueberry1", {
  y: -240,
});

let mobileBlueberry2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".mobileBlueberry2",
    start: "-10% 60%",
    end: "bottom 60%",
    scrub: true,
    markers: false,
  },
});
mobileBlueberry2.to(".mobileBlueberry2", {
  y: -300,
});

let mobileGreenapple1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".mobileGreenapple1",
    start: "-40% 80%",
    end: "70% 80%",
    scrub: true,
    markers: false,
  },
});
mobileGreenapple1.to(".mobileGreenapple1", {
  y: -150,
});

// ............. Title GSAP CODE ..............

let mobileOrangeTitle = gsap.timeline({
  scrollTrigger: {
    trigger: ".mobileOrangeTitle",
    start: "15% 10%",
    end: "90% 10%",
    scrub: true,
    markers: false,
  },
});
mobileOrangeTitle.to(".mobileOrangeTitle", {
  y: -80,
});

let mobileBlueberryTitle = gsap.timeline({
  scrollTrigger: {
    trigger: ".mobileBlueberryTitle",
    start: "-40% 80%",
    end: "70% 80%",
    scrub: true,
    markers: false,
  },
});
mobileBlueberryTitle.to(".mobileBlueberryTitle", {
  y: -60,
});

let mobileGreenappleTitle = gsap.timeline({
  scrollTrigger: {
    trigger: ".mobileGreenappleTitle",
    start: "-40% 80%",
    end: "70% 80%",
    scrub: true,
    markers: false,
  },
});
mobileGreenappleTitle.to(".mobileGreenappleTitle", {
  y: -80,
});
