let videobtn = document.querySelector(".play-btn");
let heroVideo = document.getElementById("heroVideo");
videobtn.addEventListener("click", function () {
  heroVideo.play();
  videobtn.style.display = "none";
});

// =========================slider============================
$(document).ready(function () {
  $(".testimonial-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
	arrow:true,
    prevArrow:
      '<button type="button" class="slick-prev">←</button>',
    nextArrow:
      '<button type="button" class="slick-next">→</button>',
  });
});
