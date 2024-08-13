document.addEventListener("DOMContentLoaded", function () {
  var lastScrollTop = 0;
  var delta = 5;
  var delay = 25; // Adjust this value to control scrolling speed

  function slowScroll() {
    var currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    if (Math.abs(lastScrollTop - currentScroll) <= delta) {
      return;
    }

    if (currentScroll > lastScrollTop) {
      window.scrollTo(0, (lastScrollTop += delta));
    } else {
      window.scrollTo(0, (lastScrollTop -= delta));
    }

    setTimeout(slowScroll, delay);
  }

  slowScroll();
});

var cursor = document.querySelector("#cursor");

window.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
    // ease: "back.out",
  });
});

gsap.from(".workingWideContainer", {
  y: "200px",
  opacity: 0,
  duration: "0.5",
  delay: "0.5",
  yoyo: true,
  scrollTrigger: {
    trigger: ".workingWideContainer",
    scroller: "body",
    
  },
});
gsap.to(".sliderContainer .slidermainDiv", {
  x: "-1500px",
  duration: 1, // Adjust the duration to make the translation faster
  yoyo: true,
  delay: "1",
  scrollTrigger: {
    trigger: ".sliderContainer",
    scroller: "body",
    
    scrub: 4,
    pin: true,
    pinSpacing: true,
    end: "bottom -220%",
  },
});
gsap.to(".visionContainer .ourVisionBtn", {
  opacity: 1,
  y: "0px",
  duration: "0.2",
  scrollTrigger: {
    trigger: ".visionContainer",
    scroller: "body",
    
  },
});
gsap.to(".visionContainer .ourVisionText", {
  opacity: 1,
  y: "0px",
  duration: "0.2",
  scrollTrigger: {
    trigger: ".ourVisionText",
    scroller: "body",
    
  },
});

const items = document.querySelectorAll(".noDATA");

gsap.from(".numberCountDataMain .noDATA", {
  textContent: 0,
  duration: 0.5,
  ease: Power1.easeIn,
  snap: { textContent: 1 },
  stagger: 1,
  scrollTrigger: {
    trigger: ".numberCountDataMain",
    scroller: "body",
    
  },
});

gsap.from(".numberCountDataMain .noDATA2", {
  textContent: 0,
  duration: 1,
  ease: Power1.easeIn,
  snap: { textContent: 1 },
  stagger: 1,
  scrollTrigger: {
    trigger: ".numberCountDataMain",
    scroller: "body",
    
  },
});
gsap.from(".numberCountDataMain .noDATA3", {
  textContent: 0,
  duration: 1,
  ease: Power1.easeIn,
  snap: { textContent: 1 },
  stagger: 1,
  scrollTrigger: {
    trigger: ".numberCountDataMain",
    scroller: "body",
    
  },
});

gsap.from(".numberCountDataMain .noDATA4", {
  textContent: 0,
  duration: 1,
  ease: Power1.easeIn,
  snap: { textContent: 1 },
  stagger: 1,
  scrollTrigger: {
    trigger: ".numberCountDataMain",
    scroller: "body",
    
  },
});
gsap.from(".brandingBorderContainer .brandingBorder", {
  width: "0%",
  duration: "0.5",
  scrollTrigger: {
    trigger: ".brandingBorderContainer .brandingBorder",
    scroller: "body",
    
  },
});
gsap.from(".brandingMainContainer .animatefadeIn", {
  y: "100px",
  opacity: "0",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".brandingMainContainer .animatefadeIn",
    scroller: "body",
    
  },
});
gsap.from(".ourImpactBorderContainer .ourImpactBorder", {
  width: "0%",
  duration: "0.5",
  scrollTrigger: {
    trigger: ".ourImpactBorderContainer .ourImpactBorder",
    scroller: "body",
    
  },
});
gsap.from(".ourImpactMainContainer .animateImpactData", {
  y: "100px",
  opacity: "0",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".ourImpactMainContainer .animateImpactData",
    scroller: "body",
    
  },
});
gsap.from(".tzolBorderContainer .tzolBorder", {
  width: "0%",
  duration: "0.5",
  scrollTrigger: {
    trigger: ".tzolBorderContainer .tzolBorder",
    scroller: "body",
    
  },
});
gsap.from(".tozalDataMainContainer .animateTozalData", {
  y: "100px",
  opacity: "0",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".tozalDataMainContainer .animateTozalData",
    scroller: "body",
    
  },
});
gsap.from(".impactHubBorderContainer .impactHubBorder", {
  width: "0%",
  duration: "0.5",
  scrollTrigger: {
    trigger: ".impactHubBorderContainer .impactHubBorder",
    scroller: "body",
    
  },
});
gsap.from(".swissBorderContainer .swissBorder", {
  width: "0%",
  duration: "0.5",
  scrollTrigger: {
    trigger: ".swissBorderContainer .swissBorder",
    scroller: "body",
    
  },
});
gsap.from(".borderWorkWideContianer .borderWorkWide", {
  width: "0%",
  duration: "0.7",
  scrollTrigger: {
    trigger: ".borderWorkWideContianer .borderWorkWide",
    scroller: "body",
    
  },
});
gsap.from(".bordersliderContianer .borderslider", {
  width: "0%",
  duration: "0.7",
  scrollTrigger: {
    trigger: ".bordersliderContianer .borderslider",
    scroller: "body",
    
  },
});
gsap.from(".workingWideDataContainer .workingWideDataMain", {
  y: "100px",
  opacity: "0",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".workingWideDataContainer .workingWideDataMain",
    scroller: "body",
    
  },
});
gsap.from(".ourVisionBorderContainer .ourVisionBorder", {
  width: "0%",
  duration: "0.7",
  scrollTrigger: {
    trigger: ".ourVisionBorder .ourVisionBorder",
    scroller: "body",
    
  },
});
gsap.from(".borderContainer .border", {
  width: "0%",
  duration: "0.7",
  scrollTrigger: {
    trigger: ".borderContainer .border",
    scroller: "body",
    
  },
});
gsap.from(".believeBorderContainer .believeBorder", {
  width: "0%",
  duration: "0.7",
  scrollTrigger: {
    trigger: ".believeBorderContainer .believeBorder",
    scroller: "body",
    
  },
});
gsap.from(".believeBetterContainer .animateBelieveBtn", {
  y: "100px",
  opacity: "0",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".believeBetterContainer .animateBelieveBtn",
    scroller: "body",
    
  },
});
gsap.from(".paragraphBorderContainer .paragraphBorder", {
  width: "0%",
  duration: "0.7",
  scrollTrigger: {
    trigger: ".paragraphBorderContainer .paragraphBorder",
    scroller: "body",
    
  },
});

gsap.from(".paragraphContainer .paragraphDataText", {
  y: "100px",
  opacity: "0",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".paragraphContainer .paragraphDataText",
    scroller: "body",
    
  },
});
gsap.from(".workWithBorderContainer .workWithBorder", {
  width: "0%",
  duration: "0.7",
  scrollTrigger: {
    trigger: ".workWithBorderContainer .workWithBorder",
    scroller: "body",
    
  },
});
gsap.from(".workWithContainer .animateWorkWith", {
  y: "100px",
  opacity: "0",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".workWithContainer .animateWorkWith",
    scroller: "body",
    
  },
});
gsap.from(".footerBorderContainer .footerBorder", {
  width: "0%",
  duration: "0.7",
  scrollTrigger: {
    trigger: ".footerBorderContainer .footerBorder",
    scroller: "body",
    
  },
});
gsap.from(".contactMainContainer .animateContactData", {
  y: "100px",
  opacity: "0",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".contactMainContainer .animateContactData",
    scroller: "body",
    
  },
});
// function toggleTozalHeight() {
//   var container = document.querySelector('.tozalContainer');
//   if (gsap.getProperty(container, 'height') === '205px') {
//     gsap.to(container, { height: 'auto', duration: 0.5 });
//   } else {
//     gsap.to(container, { height: '205px', duration: 0.5 });
//   }
// }
// function toggleImpactHubHeight() {
//   var container = document.querySelector('.impactHubContainer');
//   if (container.style.height === '205px') {
//     gsap.to(container, { height: 'auto', duration: 0.5 });
//   } else {
//     gsap.to(container, { height: '205px', duration: 0.5 });
//   }
// }

function toggleTozalHeight() {
  var tozalContainer = document.querySelector(".tozalContainer");
  tozalContainer.classList.toggle("autoHeight");
}
function toggleImpactHubHeight() {
  var impactHubContainer = document.querySelector(".impactHubContainer");
  impactHubContainer.classList.toggle("autoHeight");
}
function toggleswissHeight() {
  var swissContainer = document.querySelector(".swissContainer");
  swissContainer.classList.toggle("autoHeight");
}
