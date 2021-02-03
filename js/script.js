// Display scroll progress
// Code from w3schools @ https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Lottie
var animation = bodymovin.loadAnimation({
  // animationData: { /* ... */ },
  container: document.getElementById("icon-container"), // required
  path: "./lottie.json", // required
  renderer: "svg", // required
  loop: true, // optional
  autoplay: true, // optional
  name: "Demo Animation", // optional
});

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
$(window)
  .scroll(function () {
    var scrollDistance = $(window).scrollTop();

    $(".section").each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $(".nav-item a").removeClass("active");
        $(".nav-item a").eq(i).addClass("active");
      }
    });
  })
  .scroll();
