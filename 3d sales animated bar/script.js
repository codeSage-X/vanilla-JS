document.addEventListener("DOMContentLoaded", function() {
  const containerBG = document.querySelector(".container");
  const p = document.querySelectorAll(".description p");
  console.log(p)

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let rotateY = 0;

  setTimeout(() => {
    rotateY += 120;
    document.querySelector(".slides").style.transform = `translateZ(-300px) rotateY(${rotateY}deg)`;
  }, 10);

  prevBtn.addEventListener("click", function() {
    rotateY -= 120;
    document.querySelector(".slides").style.transform = `translateZ(-300px) rotateY(${rotateY}deg)`;
    pulsateImage();
  });

  nextBtn.addEventListener("click", function() {
    rotateY += 120;
    document.querySelector(".slides").style.transform = `translateZ(-300px) rotateY(${rotateY}deg)`;
    pulsateImage();
  });

  // Gsap animation
  const giftBoxIcons = document.querySelectorAll(".gift-box i");

  giftBoxIcons.forEach(icon => {
    icon.addEventListener("click", function() {
      // Animate initial content to slide up and disappear
      gsap.to(icon.parentElement.parentElement.querySelector(".title"), { y: -50, opacity: 0, duration: 0.5 });
      gsap.to(icon.parentElement.parentElement.querySelector(".image"), { y: -50, opacity: 0, duration: 0.5 });
      gsap.to(icon.parentElement.parentElement.querySelector(".description"), { y: -50, opacity: 0, duration: 0.5, delay: 0.1 });

      // Animate new content to appear
      const newContent = icon.parentElement.parentElement.querySelector(".new-content");
      newContent.classList.remove("offer-display");
      gsap.fromTo(newContent, { y: 50, opacity: 0 }, { y: -20, opacity: 1, duration: 0.5, delay: 0.2 });

      breathingImage('.summer .ad-examples img')
      breathingImage('.spring img')
      introTextAnimation()
      shakingImage()
      shakingImageInfinite()
      
    });
  });

    
  const spring = document.querySelector('.cherry .gift-box');
  // console.log(spring)

  const winter = document.querySelector('.snow .gift-box');
  // console.log(spring)

  const summer = document.querySelector('.sunny .gift-box');

  spring.addEventListener("click", function() {
    containerBG.classList.remove('summer-bg')
    containerBG.classList.remove('winter-bg')
    containerBG.classList.add('spring-bg')
    p.forEach(para => {
      para.classList.add('white');
    });

  })

  winter.addEventListener("click", function() {
    containerBG.classList.remove('summer-bg')
    containerBG.classList.remove('spring-bg')
    containerBG.classList.add('winter-bg')

    p.forEach(para => {
      para.classList.add('white');
    });


  })

  summer.addEventListener("click", function() {
    containerBG.classList.remove('winter-bg')
    containerBG.classList.remove('spring-bg')
    containerBG.classList.add('summer-bg')
  })

  function pulsateImage() {
    const image = document.querySelector(".image img");
    gsap.to(image, {
      scale: 1.4,
      duration: 0.5,
      repeat: 1,
      yoyo: true
    });
  }

  function shakingImage() {
    gsap.fromTo(".summer .ad-examples img", {
      x: -10 
    }, {
      x: 10, 
      duration: 0.1,
      ease: 'power1.inOut',
      repeat: 3,
      yoyo: true 
    });
  }
  function shakingImageInfinite() {
    gsap.fromTo(".winter .ad-examples img", {
      x: -5 
    }, {
      x: 5, 
      duration: 0.3,
      ease: 'power1.inOut',
      repeat: -1, 
      yoyo: true 
    });
  }


  function breathingImage(selector) {
    gsap.to(selector, {
      scale: 1.1, 
      duration: 1, 
      ease: 'sine.inOut', 
      repeat: -1,
      yoyo: true, 
    });
  }

  function introTextAnimation() {
    gsap.from(".spring h2", {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      ease: 'back.out(1.7)',
      delay: 0.5
    });
  
    gsap.from(".spring p", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out',
      delay: 1
    });
  }

});
