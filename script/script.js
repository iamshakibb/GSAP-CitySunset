gsap.registerPlugin(CSSRulePlugin);
const rule = CSSRulePlugin.getRule('.span::after');

gsap.to('bodyContainer', {
  css: { visibility: 'visiable' },
  duration: 1.5,
});

const tl = gsap.timeline({ defaults: { duration: 1 } });

tl.from('.logo', {
  opacity: 1,
  duration: 1.5,
  x: -50,
})
  .from(
    '.anime',
    {
      opacity: 0,
      duration: 1.5,
      y: 50,
      stagger: 0.6,
    },
    '-=1.8'
  )
  .to(rule, { duration: 1.8, cssRule: { scaleY: 0 } }, '-=1.8')
  .to(
    '.city',
    {
      opacity: 1,
      duration: 1.2,
      y: -25,
    },
    '-=1.2'
  )
  .to(
    '.citySunset',
    {
      opacity: 1,
      duration: 1,
      x: 45,
    },
    '-=1.4'
  );

if (window.innerWidth <= 991) {
  tl.to(
    '.city',
    {
      opacity: 1,
      duration: 1.2,
      y: -25,
    },
    '-=2.2'
  );
}
