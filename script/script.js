gsap.from('.logo', {
  opacity: 0,
  duration: 1.5,
  x: 50,
});

gsap.from('.anime', {
  opacity: 0,
  duration: 1.2,
  y: 50,
  stagger: 0.6,
  delay: 1.1,
});

gsap.to('.city', {
  opacity: 1,
  duration: 1.2,
  y: -25,
  delay: 1.5,
});

gsap.to('.citySunset', {
  opacity: 1,
  delay: 1.2,
  duration: 1,
  x: 45,
});
