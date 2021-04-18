gsap.registerPlugin(CSSRulePlugin);
var rule = CSSRulePlugin.getRule('.span::after');

gsap.from('.logo', {
  opacity: 0,
  duration: 1.5,
  x: 50,
});

gsap.from('.anime', {
  opacity: 0,
  duration: 1.5,
  y: 50,
  stagger: 0.6,
  delay: 1.1,
});

gsap.to(rule, { duration: 1.8, cssRule: { scaleY: 0, screenX: 0 } });

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
