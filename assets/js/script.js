let videobtn = document.querySelector(".play-btn");
let heroVideo = document.getElementById("heroVideo");
videobtn.addEventListener("click", function () {
  heroVideo.play();
  videobtn.style.display = "none";
});

// =========================slider============================
$(document).ready(function () {
  $(".testimonial-slider").slick({
    // slidesToShow: 1,
    // slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">←</button>',
    nextArrow: '<button type="button" class="slick-next">→</button>',
  });
});

$(document).ready(function () {
  $(".instructor-wrapper").slick({
    // centerMode: true,
    // centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll:1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
      },
      // breakpoint:768,
      // settings:{
      //   slidesToShow:2,
      //   slidesToScroll:1,
      // }
  }],
  });
  // FAQ==============
  $(".question").click(function () {
    $(this).next(".answerPannel").slideToggle("slow");
  });

  // modal form ========
  setTimeout(function(){
    $('.modal').fadeIn();
  },4000);

  $('.read-more a').click(function(e){
    e.preventDefault();
    $('.modal').fadeIn();
  })

  $('.modalForm-close a').click(function(e){
    e.preventDefault();
    $('.modal').fadeOut();
  });
});
