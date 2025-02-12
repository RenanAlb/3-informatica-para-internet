document.addEventListener("DOMContentLoaded", (e) => {
  console.log("Iniciando animação...");
  gsap.registerPlugin(ScrollTrigger);

  const elementH1 = document.querySelector("#h1");

  gsap.to(elementH1, {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 1.9,
  });

  const animationTextsGSAP = (element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom+=200 top",
        scrub: true,
      },
      opacity: 1,
      duration: 2,
    });
  };

  animationTextsGSAP(document.querySelector("#introducao"));
  animationTextsGSAP(document.querySelector("#meio"));
  animationTextsGSAP(document.querySelector("#fim"));
  animationTextsGSAP(document.querySelector("#proposta"));

  const leftImageTransitionGSAP = (element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom-=750 top",
        scrub: true,
      },
      opacity: 1,
      x: 0,
      duration: 2,
    });
  };

  leftImageTransitionGSAP(document.querySelector("#img1"));
  leftImageTransitionGSAP(document.querySelector("#img3"));
  leftImageTransitionGSAP(document.querySelector("#img5"));
  leftImageTransitionGSAP(document.querySelector("#img7"));

  const rightImageTransitionGSAP = (element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom-=750 top",
        scrub: true,
      },
      opacity: 1,
      x: 0,
      duration: 2,
    });
  };

  rightImageTransitionGSAP(document.querySelector("#img2"));
  rightImageTransitionGSAP(document.querySelector("#img4"));
  rightImageTransitionGSAP(document.querySelector("#img6"));
  rightImageTransitionGSAP(document.querySelector("#img8"));
});
