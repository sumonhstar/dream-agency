'use strict';

// ====business-&-expert-section-slider====
var swiper = new Swiper(".business-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });

  // =====testimonial-section-slider====
  var swiper5 = new Swiper(".testimonial-swiper", {
    grabCursor: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    effect: "cube",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-125%", 0, -800],
        rotate: [0, 0, -90],
      },
      next: {
        shadow: true,
        translate: ["125%", 0, -800],
        rotate: [0, 0, 90],
      },
    },
  });

  // ====sticky-nav-&-back-to-top====
    const  backToTop = document.querySelector('[data-back-to-top]'),
           fixedNav = document.querySelector('[data-fixed-nav]');

    const scroll = function(){
        if(this.scrollY >= 180){
            backToTop.classList.add('enable');
            fixedNav.classList.add('fixed');
        }
        else{
            backToTop.classList.remove('enable');
            fixedNav.classList.remove('fixed');
        };
    };
    window.addEventListener('scroll', scroll);

  // ====small-device-navigation====
  const openBtn = document.querySelector('[data-menu-open-btn]'),
        closeBtn = document.querySelector('[data-menu-close-btn]'),
        navMenu = document.querySelector('[data-nav-menu]'),
        fixedOverlay = document.querySelector('[data-overlay]');

    openBtn.addEventListener('click', function(){
      fixedOverlay.classList.add('active');
      navMenu.classList.add('active');
    });
    closeBtn.addEventListener('click', function(){
      navMenu.classList.remove('active');
      fixedOverlay.classList.remove('active');
    });
    fixedOverlay.addEventListener('click', function(){
      navMenu.classList.remove('active');
      fixedOverlay.classList.remove('active');
    });