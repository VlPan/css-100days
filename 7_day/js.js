$('.panel__search-icon').bind('click', () => {
  $('.panel__search-input-wrapper').toggleClass('panel__search-input-wrapper--active')
})

$('.panel__menu-icon').bind('click', () => {
  $('.menu').toggleClass('menu--active');
  $('.panel').toggleClass('panel--active');
})