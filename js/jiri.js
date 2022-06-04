import BGI1 from '../homePage/Architectural_Design.jpg'
import BGI2 from '../homePage/CGI.png'
import BGI3 from '../homePage/Computational_Design.jpg'
import BGI4 from '../homePage/Experimental_Art.jpg'
import BGI5 from '../homePage/Furniture_Design.jpg'
import BGI6 from '../homePage/Product_Design.png'

console.log('======')
const backImages = [BGI1, BGI2, BGI3, BGI4, BGI5, BGI6];


jQuery('body').ready(function() {
  jQuery("img[data-type='category-image']").hide()
  jQuery("a[data-id]").hover(
    function () {
      const id = jQuery(this).attr('data-id')
      jQuery("img[data-type='category-image']").hide()
      jQuery(`img[data-id-image=${id}]`).fadeIn();
    },
    function () {
      const id = jQuery(this).attr('data-id')
      jQuery(`img[data-id-image=${id}]`).fadeOut();
    })


  jQuery(function () {
    let i = 0;
    jQuery("#HOME_BACK_IMAGES").css("background-image", "url(" + backImages[i] + ")");
    setInterval(function () {
      i++;
      if (i === backImages.length) {
        i = 0;
      }
      jQuery("#HOME_BACK_IMAGES").fadeOut("slow", function () {
        jQuery(this).css("background-image", "url(" + backImages[i] + ")");
        jQuery(this).fadeIn("slow");
      });
    }, 5000);
  });
  jQuery(function () {
    let i = 1;
    jQuery("img[data-type='home-image-slider']").hide();
    jQuery(`img[data-slider-id-image=${i}]`).show();
    setInterval(function () {
      const prev = i;
      i++;
      if (i === 4) {
        i = 1;
      }
      jQuery(`img[data-slider-id-image=${prev}]`).fadeOut(1500);
      jQuery(`img[data-slider-id-image=${i}]`).fadeIn(1500);
    }, 7000);
  });
})


jQuery(window).on("scroll", function() {
  if(jQuery(window).scrollTop() > 50) {
    jQuery(".new-home-header").addClass("new-home-header-active");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    jQuery(".new-home-header").removeClass("new-home-header-active");
  }
});
