//hero animation-texts pointer evetns
//sitemizde 3 tane why-us___text var. ayrica her birinin bir indexi var.
let animationText = $(".animation-text");

function heroMakeActive(index) {
  animationText.removeClass("is-active");
  animationText.eq(index).addClass("is-active");
}

//her bir triggers div'i icin calisacak bir each function yaziyoruz
$(".trigger-hero").each(function (index) {
  //each functionu icine ayri bir scrollTrigger olusturuyoruz.
  let heroTextActive = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top top",
      end: "bottom top",
      toggleActions: "restart none none reverse",
      onEnter: () => {
        heroMakeActive(index);
      },
      onEnterBack: () => {
        heroMakeActive(index);
      }
      //markers: true,
      //id: "text-triggers"
    }
  });
  //ilk elemana uygulama yapmayalim
  // if (index > 0) {
  //   //eq(), trigger index'i ile, why-us texlerinin indexlerini esitliyor
  //   heroTextActive.from(animationText.eq(index), {
  //     opacity: 0,
  //     duration: 0.3
  //   });
  // }
});

//tab click animation
$(".tab-techs").click(function () {
  //first remove all active classes
  //remove all classes from tab-wrapper *for example is-1, is-2
  $(".tab-content").removeClass("is-active");
  $(".tab-techs").removeClass("is-active");
  $(".tab-img").removeClass("is-active");

  //index for return things
  let index = $(this).index();
  $(this).addClass("is-active");
  $(".tab-content").eq(index).addClass("is-active");
  $(".tab-img").eq(index).addClass("is-active");
  console.log(index);
  $("#tab-wrapper").removeClass();
  $("#tab-wrapper").addClass("tab-wrapper-" + (index + 1));
});

//firstly we define our scrolltrigger register
gsap.registerPlugin(ScrollTrigger);

//creating media queries for different breakpoints:
let mm = gsap.matchMedia();
//just on desktop not mobile
mm.add("(min-width: 992px)", () => {
  purpleAnimation();
  timelineDesktop();
  footerAnimation();
  //  flipProcess();
});

mm.add("(max-width: 991px)", () => {
  purpleAnimationMobile();
  flipProcess();
  processSection();
  purpleAnimation();
});

function purpleAnimation() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-purple_fixed-content",
      //endTrigger: ".section-purple_fixed-content",
      //markers: true,
      // id: "section-purple-animation",
      //scrub: 1,
      start: "6% top",
      //pin: ".why-us-content-wrapper",
      toggleActions: "restart play none reverse"
    }
  });
  tl.set(document.body, { overflow: "hidden" })
    .to(".purple-fixed_bg", {
      width: "135vw",
      height: "135vw",
      top: "-42%",
      //yPercet: 15,
      //xPercent: -25,
      //  left: "-50%",
      duration: 0.6
      //ease: "power2.out"
    })
    .from(
      ".why-us-text",
      {
        opacity: 0,
        yPercent: 400,
        duration: 0.5,
        ease: "power2.out"
      },
      "<"
    )
    .from(
      ".world-bg",
      {
        opacity: 0,
        yPercent: 100,
        duration: 1,
        ease: "power2.out"
      },
      "<"
    )
    .add("delay", 0.5)
    .set(".dark-fixed_bg", { opacity: 1 })
    .to(".why-us-general", { className: "why-us-general" })
    .set(document.body, { overflow: "auto" });
}

// function purpleAnimation() {
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".section-purple_fixed-content",
//       //endTrigger: ".section-purple_fixed-content",
//       markers: true,
//       id: "section-purple-animation",
//       scrub: 1,
//       start: "top top",
//       //end: "top top",
//       //pin: ".why-us-content-wrapper",
//       toggleActions: "restart play reverse reverse"
//     }
//   });

//   tl.to(".purple-bg", {
//     width: "120vw",
//     height: "120vw",
//     onUpdate: () => {
//       $("html, body, *").css("overflow", "hidden");
//       console.log("lock");
//     },
//     // borderRadius: 0,
//     // yPercent: 60,
//     //xPercent: -25,
//     //  left: "-50%",
//     duration: 0.8,
//     ease: "power2.out"
//   })
//     .from(
//       ".section-purple_fixed-content",
//       {
//         opacity: 0,
//         duration: 0.2
//       },
//       0.3
//     )
//     .to(".why-us-general", { className: "why-us-general" }, 0.5);
// }

//ANIMATION 2
//Purple Why Us Text Scroll Interactions
//sitemizde 3 tane why-us___text var. ayrica her birinin bir indexi var.
let changingText = $(".why-us__text");
//icine simdiden bir index inputu koyduk.
//asagidaki fonksiyonun icinden index'i cekecek
function makeActive(index) {
  changingText.removeClass("active");
  changingText.eq(index).addClass("active");
}
makeActive(0);

//her bir triggers div'i icin calisacak bir each function yaziyoruz
$(".triggers").each(function (index) {
  //each functionu icine ayri bir scrollTrigger olusturuyoruz.
  let purpleAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top 80%",
      end: "bottom top",
      toggleActions: "restart none none reverse",
      onEnter: () => {
        makeActive(index);
      },
      onEnterBack: () => {
        makeActive(index);
      }
      //markers: true,
      //id: "text-triggers"
    }
  });
  //ilk elemana uygulama yapmayalim
  if (index > 0) {
    //eq(), trigger index'i ile, why-us texlerinin indexlerini esitliyor
    purpleAnimation.from(changingText.eq(index), {
      opacity: 0,
      duration: 0.3
    });
  }
});

let tlProgress = gsap.timeline({
  scrollTrigger: {
    trigger: ".progress-wrapper",
    start: "top 85%",
    end: "bottom top",
    scrub: true
    //markers: true,
    //id: "lastProgress"
  }
});
tlProgress.to(".progress", { width: "100%" });

let lastTrigger = gsap.timeline({
  scrollTrigger: {
    trigger: ".lasttrigger",
    start: "40% bottom",
    end: "bottom top",
    // markers: true,
    scrub: 1
    // id: "LASTTRIGGER"
  }
});

lastTrigger
  .to(".why-us-content-wrapper", { opacity: 0, duration: 0.4 })
  .to(".heading-technologies", { marginLeft: "-150%", duration: 1 }, 0)
  .to(".world-bg", { y: "100%" }, 0)
  .to(
    ".purple-fixed_bg",
    {
      width: "1vw",
      height: "1vw",
      //left: "50%",
      top: "-3%",
      duration: 1
    },
    0
  );
// function flip() {
//   let state = Flip.getState(".heading-technologies", {
//     props: "fontSize,position,marginLeft"
//   });
//   $(".heading-technologies").appendTo($(".technologies-heading-wrapper"));
//   //$(".heading-technologies").addClass("is-open");
//   Flip.from(state, {
//     //className: "heading-technologies is-open,
//     //position: "static",
//     //fontSize: "60px",
//     //x: "0%",
//     duration: 1,
//     ease: "power2.out"
//   });
// }

let technologies = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-technologies",
    start: "top top",
    end: "30% 0%",
    toggleActions: "restart play none reverse",
    //toggleActions: "restart none none reverse",
    onEnter: () => flipHeading(),

    // onEnter: () => flipHeading(),
    //onEnterBack: () => flipHeading(),
    onLeaveBack: () => flipHeading()
    // scrub: true
    //markers: true,
    //id: "lastProgressHeading"
  }
});

technologies.from(".container.heading-wrapper", {
  opacity: 0,
  duration: 0
});
technologies.from(".container.is-technologies", {
  y: "100%",
  opacity: 0,
  duration: 0.8,
  ease: "power1.inOut"
});

//Heading TRANSITION
function flipHeading() {
  let state = Flip.getState(".heading-technologies, .heading-technology", {
    props: "fontSize, "
  });
  $(".heading-technologies").toggleClass("visible");
  $(".heading-technology").toggleClass("visible");
  Flip.from(state, {
    targets: ".heading-technology, .heading-technologies",
    duration: 0.8,
    //fade: true,
    //absolute: true,
    ease: "power1.inOut"
  });
}

//Technologies Hover Effect
$(".workflow_pin").on("mouseenter", function () {
  $(this).closest(".workflow_pin-and-content").addClass("is-active");
  let workflowContent = $(this).siblings(".workflow-content");
  gsap.set(workflowContent, { display: "block" });
  //  gsap.fromTo(workflowContent, { opacity: 0 }, { opacity: 1 });
});
$(".workflow_pin").on("mouseleave", function () {
  $(this).closest(".workflow_pin-and-content").removeClass("is-active");
  let workflowContent = $(this).siblings(".workflow-content");
  // gsap.to(workflowContent, { opacity: 0, duration: 0.5 });
  gsap.set(workflowContent, { display: "none" });
});

//Technologies List Scroll Smooth Effect
let techSmooth = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-transition-tools",
    scrub: 1,
    start: "top bottom",
    end: "bottom bottom",
    toggleActions: "restart none none reverse"
  }
});
techSmooth.to(".section-transition-tools", {
  //marginTop: "0vh"
  //y: "-20em"
});

function processSection() {}
//PROCESS Heading TRANSITION
function flipProcess() {
  let state = Flip.getState(".process-heading-v1, .process-heading-v2", {
    props: "fontSize"
  });
  $(".process-heading-v1").toggleClass("hidden");
  $(".process-heading-v2").toggleClass("hidden");
  Flip.from(state, {
    targets: ".process-heading-v1, .process-heading-v2",
    duration: 0.5,
    //fade: true,
    absolute: true,
    ease: "power1.inOut"
  });
}
function timelineDesktop() {
  let progressBar = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-timeline",
      scrub: 1,
      start: "top 50%",
      end: "bottom 98%",
      toggleActions: "restart none none reverse",
      onEnter: () => flipProcess(),
      // onEnter: () => flipHeading(),
      //onEnterBack: () => flipHeading(),
      onLeaveBack: () => flipProcess()
      //scrub: true,
      //markers: true
      // id: "progressBAR"
    }
  });
  progressBar.from(".workflow_wrapper", { opacity: 0, y: "100%" }, 0.1);
  progressBar.from(".process-heading-wrapper", { opacity: 0, y: "100%" }, "<");
  progressBar.from(".progress-bar", {
    marginLeft: "0",
    //x: "-50%",
    //ease: "back.out(1)",
    duration: 2
  });
}

function footerAnimation() {
  //FOOTER ANIMATION
  let tlFooter = gsap.timeline({
    scrollTrigger: {
      //trigger: ".footer-purple-item",
      trigger: ".footer-animation-trigger",
      //trigger: ".section-footer",
      start: "bottom bottom",
      end: "bottom top",
      onEnter: function () {
        console.log("onEnter");
        $(".footer-purple-item").addClass("is-open");
        $(".spacer").removeClass("is-hidden");
        $(".bottom-items").removeClass("is-hidden");
        $(".footer-upper-text").removeClass("is-small");
        $(".footer-big-text").removeClass("is-small");
        $(".author-text").removeClass("is-small");
        $(".horizontal-line-footer-author").removeClass("is-small");
        $(".general-button.is-black").removeClass("is-hidden");
      },
      onLeaveBack: function () {
        console.log("onLeaveBack");
        $(".footer-purple-item").removeClass("is-open");
        $(".spacer").addClass("is-hidden");
        $(".bottom-items").addClass("is-hidden");
        $(".footer-upper-text").addClass("is-small");
        $(".footer-big-text").addClass("is-small");
        $(".author-text").addClass("is-small");
        $(".horizontal-line-footer-author").addClass("is-small");
        $(".general-button.is-black").addClass("is-hidden");
      }
      //scrub: true,
      //markers: true,
      // id: "footer"
    }
  });
}

//pricing calculator

$(".totalcost").text("0");

$(".radio-click").click(function () {
  let sum;

  //SERVICE
  if ($(this).prev().is('[name="service"]')) {
    console.log("click-to-services");
    sum =
      Number($(this).prev().attr("add-value")) +
      (Number(
        $('input[name="size-of-your-project"]:checked').attr("add-value")
      ) || 0) +
      (Number($('input[name="Integration"]:checked').attr("add-value")) || 0) +
      (Number(
        $('input[name="special-functionality"]:checked').attr("add-value")
      ) || 0) +
      (Number($('input[name="Animation"]:checked').attr("add-value")) || 0);
  }

  //SIZE-OF-YOUR-PROJECT
  else if ($(this).prev().is('[name="size-of-your-project"]')) {
    console.log("size-of");
    sum =
      Number($(this).prev().attr("add-value")) +
      (Number($('input[name="service"]:checked').attr("add-value")) || 0) +
      (Number($('input[name="Animation"]:checked').attr("add-value")) || 0) +
      (Number(
        $('input[name="special-functionality"]:checked').attr("add-value")
      ) || 0) +
      (Number($('input[name="Integration"]:checked').attr("add-value")) || 0);
  }

  //INTEGRATION
  else if ($(this).prev().is('[name="Integration"]')) {
    console.log("integration");
    // if this radio button is in the development group
    sum =
      Number($(this).prev().attr("add-value")) +
      (Number($('input[name="service"]:checked').attr("add-value")) || 0) +
      (Number(
        $('input[name="size-of-your-project"]:checked').attr("add-value")
      ) || 0) +
      (Number(
        $('input[name="special-functionality"]:checked').attr("add-value")
      ) || 0) +
      (Number($('input[name="Animation"]:checked').attr("add-value")) || 0);
  }

  //ANIMATION
  else if ($(this).prev().is('[name="Animation"]')) {
    console.log("animation");
    // if this radio button is in the development group
    sum =
      Number($(this).prev().attr("add-value")) +
      (Number($('input[name="service"]:checked').attr("add-value")) || 0) +
      (Number(
        $('input[name="size-of-your-project"]:checked').attr("add-value")
      ) || 0) +
      (Number(
        $('input[name="special-functionality"]:checked').attr("add-value")
      ) || 0) +
      (Number($('input[name="Integration"]:checked').attr("add-value")) || 0);
  }

  //SPECIAL FUNCTIONALITY
  else if ($(this).prev().is('[name="special-functionality"]')) {
    console.log("special-funct");
    // if this radio button is in the development group
    sum =
      Number($(this).prev().attr("add-value")) +
      (Number($('input[name="service"]:checked').attr("add-value")) || 0) +
      (Number(
        $('input[name="size-of-your-project"]:checked').attr("add-value")
      ) || 0) +
      (Number($('input[name="Animation"]:checked').attr("add-value")) || 0) +
      (Number($('input[name="Integration"]:checked').attr("add-value")) || 0);
  }

  // format sum e.g. 3500 to 3,500
  const formattedSum = new Intl.NumberFormat().format(sum);
  const serviceType = $('input[name="service"]:checked').attr("service-type");
  // display the sum
  // NB: use sum directly if not interested in formatting
  // $('.hack43-added-value').text(sum);
  $(".totalcost").text(formattedSum);
  // add the radio button's value to the hidden input field
  $(".hack43-send-value").val(formattedSum);
  $("#is-price").text("$" + formattedSum);
  $("#service-type").text(serviceType);
  $("#my-price-total").val(formattedSum);
  $("#service-last").val(serviceType);
});

$(".general-button.is-sendform").on("click", function () {
  $(".total-cost-wrapper").hide();
});

//pop-up lock scroll

$(".start-a-project-button").click(function (e) {
  e.preventDefault();
  $("body").css("overflow", "hidden");
});

$(".close-contact").click(function (e) {
  e.preventDefault();
  $("body").css("overflow", "auto");
});

//form open

$(".start-a-project-button").on("click", function () {
  $(".contact-full-field").addClass("is-active");
  $(".total-cost-wrapper.is-mobile").hide();
  $(".section-footer").css({
    "z-index": "3"
  });
});

//form close

$(".close-contact").on("click", function () {
  $(".contact-full-field").removeClass("is-active");
  $(".total-cost-wrapper.is-mobile").show();
  $(".section-footer").css({
    "z-index": "11"
  });
});

//check if form open

if ($(".start-a-project-button").hasClass("is-active")) {
  $(".section-footer").css({
    "z-index": "3"
  });
}

//mobile animations:
function purpleAnimationMobile() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-purple_fixed-content",
      //endTrigger: ".section-purple_fixed-content",
      //markers: true,
      //  id: "section-purple-animation",
      //scrub: 1,
      start: "10% top",
      //pin: ".why-us-content-wrapper",
      toggleActions: "restart play none reverse"
    }
  });
  tl.set(document.body, { overflow: "hidden" })
    .to(".purple-fixed_bg", {
      width: "150vh",
      height: "150vh",
      top: "-10%",
      //yPercet: 15,
      //xPercent: -25,
      //  left: "-50%",
      duration: 0.6
      //ease: "power2.out"
    })
    .from(
      ".why-us-text",
      {
        opacity: 0,
        yPercent: 400,
        duration: 0.5,
        ease: "power2.out"
      },
      "<"
    )
    .from(
      ".world-bg",
      {
        opacity: 0,
        yPercent: 100,
        duration: 1,
        ease: "power2.out"
      },
      "<"
    )
    .add("delay", 0.5)
    .set(".dark-fixed_bg", { opacity: 1 })
    .to(".why-us-general", { className: "why-us-general" })
    .set(document.body, { overflow: "auto" });
}

//pricing secon
$(".pricing-button").on("click", function () {
  var dataValue = $(this).attr("data");
  var estimatedBudget = $(this).attr("estimated-budget");

  // Do something with the section information, such as display it in a different section
  $("#is-price").text(estimatedBudget);
  $("#service-type").text(dataValue);
});
