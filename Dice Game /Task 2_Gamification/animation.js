export function zoomAnimation(selector) {
    gsap.to(selector, {
      scale: 1.8,
      duration: 1,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
  }
  export function rotateAnimation(selector) {
    gsap.to(selector, {
      rotation: 360,
      duration: 1,
      repeat: -1,
      repeatDelay: 0.5,
      ease: 'bounce.out',
    });
  }

  export function shakingAnimation(selector) {
    gsap.fromTo(selector, {
      x: -10
    }, {
      x: 10,
      duration: 0.5,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    });
  }

  export function breathingAnimation(selector) {
    gsap.to(selector, {
      scale: 1.1,
      duration: 1,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
  }

  export function slideOut(selector) {
    gsap.to(selector, {
      duration: 1,
      x: "-100%", // Slide out to the left
      opacity: 0, // Fade out
      ease: "power2.out" // Easing function
    });
  }
  
  export function slideIn(selector) {
    gsap.to(selector, {
      duration: 1,
      opacity:1,
      y: "-50%", // Slide in from the right (initial position)
      ease: "power2.out", // Easing function
      delay: 0.5 // Delay the start of the animation to create a sequential effect
    });
  }

  export function introImgAnimation(selector) {
    gsap.from(selector, {
      opacity: 0,
      scale: 0.5,
      duration: 0.8,
      ease: 'back.out(1.7)',
      delay: 0.5
    });
  }
  export function introTextAnimation(selector) {
    gsap.from(selector, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: 'power2.out',
      delay: 1
    });
  }
  
  