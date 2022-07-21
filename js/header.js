jQuery(window).on("scroll", function() {
  if(jQuery(window).scrollTop() > 50) {
    jQuery(".new-home-header").addClass("new-home-header-active");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    jQuery(".new-home-header").removeClass("new-home-header-active");
  }
});

jQuery(function() { // Dropdown toggle
  jQuery('.dropdown-toggle').click(function() { jQuery(this).next('.dropdown').slideToggle();
  });

  jQuery(document).click(function(e)
  {
    var target = e.target;
    if (!jQuery(target).is('.dropdown-toggle') && !jQuery(target).parents().is('.dropdown-toggle'))
//{ jQuery('.dropdown').hide(); }
    { jQuery('.dropdown').slideUp(); }
  });
});
