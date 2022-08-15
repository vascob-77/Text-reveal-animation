const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: "Power2.easeInOut" },
})

tl.fromTo('.hero-img',
{ scale: 1.4, borderRadius: '0rem' },
{ scale: 1, borderRadius: '3rem',delay: 0.5, duration: 2.5, ease: "elastic.out(1.5,1)" })

tl.fromTo('.cta1', { x: "100%" }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo('.cta3', { x: "-100%" }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo('.cta2', { y: "100%" }, { y: 0, opacity: 1 }, "<20%");
tl.fromTo('.cta4', { x: "100%" }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo('.cta5', { y: "120%" }, { y: 0, opacity: 1 }, "<20%");
tl.fromTo('.cta-btn', { y: "150%" }, { y: 0, opacity: 1 }, "<");

// Split text alternative

let h1 = document.querySelector('h1');
const lettersTitle = h1.textContent.split("");

h1.textContent = "";

lettersTitle.forEach((letter) => {
  h1.innerHTML += `<span class="letter">${letter}</span>`;
})

gsap.set('.letter', { display: 'inline-block' });
tl.fromTo('.letter', { y: '40', opacity: 0 }, { y: '0px', opacity: 1, stagger: 0.05, ease:'back.out(3)' }, "<");