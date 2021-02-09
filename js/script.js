window.onscroll = function () {
  scrollProgressFunction();
  activeNavLinksFunction();
};

// Display scroll progress
// Code from w3schools @ https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
function scrollProgressFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Change active navbar link on scroll/click
// Code by Elena Scherer @ https://codepen.io/eksch/pen/xwdOeK
$(document).ready(function () {
  $("a[href*=#]").bind("click", function (e) {
    e.preventDefault(); // prevent hard jump, the default behavior

    var target = $(this).attr("href"); // Set the target as variable

    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top,
        },
        600,
        function () {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
        }
      );

    return false;
  });
});

// Assign active class to nav links while scolling
// Code by Elena Scherer @ https://codepen.io/eksch/pen/xwdOeK

function activeNavLinksFunction() {
  var scrollDistance = $(window).scrollTop();

  $(".nav-func").each(function (i) {
    if (($(this).position().top - 70) <= scrollDistance) {
      $(".nav-item a").removeClass("active");
      $(".nav-item a").eq(i).addClass("active");
    }
  });
}

// Show elements on scroll
// Code by CSS Animation @ https://cssanimation.rocks/scroll-animations/

// Detect request animation frame
var scroll =
  window.requestAnimationFrame ||
  // IE Fallback
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
var elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
  Array.prototype.forEach.call(elementsToShow, function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}

// Fancybox
$(document).ready(function () {
  $(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none",
  });

  $(".zoom").hover(
    function () {
      $(this).addClass("transition");
    },
    function () {
      $(this).removeClass("transition");
    }
  );
});
