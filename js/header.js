jQuery(window).on("scroll", function() {
  if(jQuery(window).scrollTop() > 50) {
    jQuery(".new-home-header").addClass("new-home-header-active");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    jQuery(".new-home-header").removeClass("new-home-header-active");
  }
});
