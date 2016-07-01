/* MAIN OPERATING JAVASCRIPT FILE */

/* 1. STICKY HEADER PLUGIN */
$('.main-header').sticky();

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
  $grid.isotope({ filter: filterValue });
});

// 3. Truncation of Paragraphs
$(function(){
    $('.truncate').succinct({
        size: 220
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