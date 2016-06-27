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
        size: 140
    });
});

// 4 Scroll Reveal
var fooReveal = {
	origin      : 'left',
	distance    : '500px',
	delay		: 200,
    enter		: 'right',
    wait		: '1s',
    move		: '200px',
};

window.sr = ScrollReveal({ duration: 1000 });
sr.reveal('.article-content', fooReveal);