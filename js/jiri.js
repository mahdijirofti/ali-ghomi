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
})

