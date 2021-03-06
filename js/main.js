/* MAIN OPERATING JAVASCRIPT FILE */
var $adaptGrid = $('.adaptGrid');
/* 1. STICKY HEADER PLUGIN */
// $('.main-header').sticky({
//     topSpacing: 0,
//     getWidthFrom: "body",
//     responsiveWidth: !0
// });

/* 2. ISOTOPE */
// init Isotope
var $grid = $('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $(".endfull").removeClass("endfull");
  $grid.isotope({ filter: filterValue });
});

$adaptGrid.on("arrangeComplete", function(e, t) {
  if (!t.length) return false;
  var n = ($(t[0].element),
  $(t[t.length - 1].element));
  n.addClass("endfull");
});

// 3. Truncation of Paragraphs
$(function(){
    $('.truncate').succinct({
        size: 280
    });
});

// 4: Mobile Menu 
$(function() {
    var pull        = $('#pull');
        menu        = $('nav ul');
        menuHeight  = menu.height();
 
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
});

$(window).resize(function(){
    var w = $(window).width();
    if(w > 769 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
});

// 5: Menu Toggle
(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();
