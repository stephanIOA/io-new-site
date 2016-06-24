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