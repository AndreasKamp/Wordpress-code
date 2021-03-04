console.log("Astra Child Theme  running!");

document.addEventListener("DOMContentLoaded", function () {
    console.log("The DOM is ready!");
    initScrollToTop();
   initTypedJs();
    
});
function initTypedJs() {
    new Typed(".typed", {
        strings: ["Frontend.", "Logo design.", "UX/UI design." ],
        typeSpeed: 75,
        loop: true
    });
};
function initScrollToTop() {
    //append scroll to top button to the DOM
    document.querySelector("body").innerHTML += `<a id="scrollTop" title="Go to top">^</a>`;
    // add onscroll event to window 
    window.onscroll = function () {
      scrollFunction();
    };
    // add eventlistener to scroll to top button
    document.querySelector("#scrollTop").onclick = function () {
      scrollToTheTop();
    }
  }

  function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      document.getElementById("scrollTop").style.display = "block";
    } else {
      document.getElementById("scrollTop").style.display = "none";
    }
  }

  function scrollToTheTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
