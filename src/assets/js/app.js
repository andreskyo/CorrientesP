let splideActivo = 0;

$(function(){
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover({
    html: true
  })
});

// Dismiss popover click outside ///////////////////////////////////////
$('body').on('click', function (e) {
  $('[data-toggle=popover]').each(function () {
    // hide any open popovers when the anywhere else in the body is clicked
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
      $(this).popover('hide');
    }
    });
});

const splideResize = () => {

    splideActivo = 1;
  
    const splideEasyAccess = new Splide( '.splideEasyAccess', {
     start: 0,
     padding: '2rem',
     arrows: false,
     pagination: false
    } );
  
    const splideLatestNews = new Splide( '.splideLatestNews', {
     start: 0,
     padding: '2rem',
     arrows: false,
     pagination: false
    } );
    
    const splideNeedHelp = new Splide( '.splideNeedHelp', {
     start: 0,
     padding: '2rem',
     arrows: false,
     pagination: false
    } );
    
    const splideNextExpiration = new Splide( '.splideNextExpiration', {
      padding: '2rem',
      arrows: false,
      pagination: false
    } );
    
    splideEasyAccess.mount();
    splideLatestNews.mount();
    splideNeedHelp.mount();
    splideNextExpiration.mount();
}

// console.log(window.innerWidth)

if(window.innerWidth < 992 && splideActivo == 0 && $('.body_home').length > 0){
    console.log('splide')
    splideResize();
}

$(window).on('resize', function(){
  if(window.innerWidth < 992 && splideActivo == 0 && $('.body_home').length > 0){
    console.log('splide')
    splideResize();
  }
});



$('.itemDetails').popover({
   html: true,
   content: $('#popoverPercepcionDetalle > .row')
});

$('.itemDetailsDDJJMensual').popover({
   html: true,
   content: $('#popoverDDJJMensualDetalle > .row')
});


$('.itemDetailsDDJJAnual').popover({
   html: true,
   content: $('#popoverDDJJAnualDetalle > .row')
});