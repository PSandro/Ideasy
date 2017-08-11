$(function() {
  setTimeout(function() {
    if (location.hash) {
      /* we need to scroll to the top of the window first, because the browser will always jump to the anchor first before JavaScript is ready, thanks Stack Overflow: http://stackoverflow.com/a/3659116 */
      window.scrollTo(0, 0);
      target = location.hash.split('#');
      smoothScrollTo($('#'+target[1]));
    }
  }, 1);
  
  // taken from: https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      smoothScrollTo($(this.hash));
      return false;
    }
  });
  
  function smoothScrollTo(target) {
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  }
});