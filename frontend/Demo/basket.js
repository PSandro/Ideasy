$(document).ready(function() {
  window.basketLocation = '';

  // force ajax post request to no-cache
  $.ajaxSetup({
    type: 'POST',
    headers: { "cache-control": "no-cache" }
  });

  // initialize orb position and draggable state
  initializeOrb();
});

function initializeOrb() {
  // determine initial position of Orb and register events listeners
  positionOrb();
  makeDraggable();
  registerBasketEvents();
  $('#basketOrb').trigger('updateOrb');
}

function makeDraggable() {
  // basket orb drag event
  $('#basketOrb').draggable({

    containment: "window",
    scroll: false,
    start: 	function( event, ui) {
      y1 = ui.position.top;
      x1 = ui.position.left;

      // remove other classes used as positional states
      orb = $('#basketOrb');
      orb.removeClass('opened')
      .removeClass('parked');
      $('#ibasket').removeClass('opened');
      // remove style attributes from the blackout div
      $('.blackout').removeAttr('style');
    },
    stop:		function( event, ui) {
      // if movement is too small, just act as a click
      y2 = ui.position.top;
      x2 = ui.position.left;
      if (Math.abs(y2-y1) < 10 && Math.abs(x2-x1) < 10) {
        $('#basketOrb').trigger('click');
        return;
      }

      event.stopPropagation(); // should stop propagation of click event...
      orb = $('#basketOrb');
      orb.addClass('stopClickPropagation');
      setTimeout(function() { orb.removeClass('stopClickPropagation'); }, 100);

      // add custom position class
      orb.addClass('custom');

      // store current location for the orb in a global variable
      window.basketLocation = {'top':orb.css('top'), 'left':orb.css('left')};
    }
  });
}

// Make basket contents scrollable if needed
function resizeBasket() {
  // Is basket opened
  if ($('#basketOrb.opened').length > 0) {
    basketcontainer = $('#basketscrollingcontainer');

    // Does the bottom of basketscrollingcontainer exceed window bottom
    heightDiff = basketcontainer.offset().top - $(window).scrollTop() + basketcontainer[0].scrollHeight - $(window).height() + 20;
    if (heightDiff > 0) {
      // correct height
      basketcontainer.height(basketcontainer[0].scrollHeight - heightDiff);
    } else {
      // remove 'old' corrections
      basketcontainer.removeAttr('style');
    }
  }
}

// prevent Orb getting out of bounds (or too far from maindiv on desktop)
function positionOrb() {
  orb = $('#basketOrb');

  windowWidth = $(window).width();
  windowHeight = $(window).height();
  basketWidth = orb.width();

  if (orb.hasClass('custom')) {
    // orb is out of bounds if it sticks out of the right side or bottom of the page
    outOfBounds = windowWidth - (orb.offset().left + basketWidth) < -10 || windowHeight - (orb.offset().top + basketWidth - $(window).scrollTop()) < -10;
    if (outOfBounds) {
      // reset it to the 'parked' position
      orb.removeAttr('style'); // remove draggable styles
      orb.removeClass('custom')
      .addClass('parked');

      // forget last position...
      window.basketLocation = '';
    }
  }

  if (orb.hasClass('parked')) {
    orb.removeAttr('style'); // remove styles
    maindiv = $('div.main');
    newXpos = maindiv.offset().left + maindiv.width() + 25;
    if (windowWidth - (newXpos + basketWidth) < -10) {
      orb.css('right', '').css('left', ''); // reset to the values defined in CSS
    } else {
      orb.css('left', newXpos + 'px').css('right', 'auto');
    }

    // forget last position...
    window.basketLocation = '';
  }
}

function swapTitleText() {
  orb = $('#basketOrb');
  message = $('#basketOrb meta[name="message"]').attr('content');
  title = orb.attr('title');

  orb.attr('title', message);
  $('#basketOrb meta[name="message"]').attr('content', title);
}

// window resize event
$(window).resize(function() {
  // make sure thblackout div covers the entire container div
  if ($('.blackout').css('visibility') === 'visible') {
    $('.blackout').css('height', $('#container').height()+'px');
  }
  positionOrb();
  resizeBasket();
});

// --------------- events -----------------

function registerBasketEvents() {
  // basket click event
  $('#basketOrb').on('click', function(event) {
    orb = $('#basketOrb');

    // ignore the click event if stopClickPropagation class is set
    if (orb.hasClass('stopClickPropagation') === false) {
      // open basket unless click is fired because of the drag event
      if ($('#ibasket').css('display') !== 'block') {
        orb.trigger('basketOpen');
      } else {
        orb.trigger('basketClose');
      }
    }
    return false;
  });
  // for touchy devices
  $('#basketOrb').on('touchend', function(event) {
    if ($('#basketOrb').hasClass('ui-draggable-dragging') === false) $(this).trigger('click');
  });

  // closing of the basket
  $('#basketOrb').on('basketClose', function() {

    unsetModal(document.getElementById('ibasket'));

    // swap the title text for the orb with the one in the meta-message container
    swapTitleText();
    $('#basketOrb').attr('aria-haspopup', true);

    // move orb to last known or parked positition and activate askew class
    $(this).removeAttr('style'); // remove draggable styles
    $(this).addClass('askew');
    if (window.basketLocation.top !== undefined && window.basketLocation.left !== undefined) {
      $(this).addClass('custom')
      .removeClass('opened')
      .removeClass('parked');
      $(this).attr('style', 'top: '+window.basketLocation.top+'; left: '+window.basketLocation.left);
    } else {
      $(this).removeClass('opened')
      .removeClass('custom')
      .addClass('parked');
      positionOrb();
    }

    // close the product list
    $('#ibasket').addClass('parked')
    .removeClass('opened');

    // remove style attributes from the blackout div
    $('.blackout').removeAttr('style');

    // show the chat function again (if available)
    $('.zopim').show();

  });


  // opening of the basket
  $('#basketOrb').on('basketOpen', function() {
    orb = $(this);

    // swap the title text for the orb with the one in the meta-message container
    swapTitleText();
    $('#basketOrb').removeAttr('aria-haspopup');

    // hide the chat function if available
    $('.zopim').hide();

    // scroll the page up to make room for orb and ibasket div (if necessary)
    scrollUp = $('#basketOrb #basketOrbBottom').offset().top + $('#ibasket').height() - $(document).height() + 125;
    if (scrollUp > 0) {
      $('html,body').scrollTop(orb.offset().top - scrollUp);
    }

    // move orb to opened positition and deactivate askew class
    orb.removeAttr('style'); // remove draggable styles
    orb.removeClass('askew')
    .removeClass('parked')
    .removeClass('custom')
    .addClass('opened');

    // make sure the blackout div to covers the entire container div
    $('.blackout').css('height', $('#container').height()+'px');
    // show the blackout div
    $('.blackout').css('visibility', 'visible');

    $('#ibasket').removeClass('parked')
    .addClass('opened');

    setModal(document.getElementById('ibasket'));

    // overwrite keydown event for closing basket with esc-key
    $(document).off('keydown');
    $(document).on('keydown', function(e) {
      if (!e.keyCode || e.keyCode === 27) {
        orb.trigger('basketClose');
      }
    });


    resizeBasket();

    // scroll the basket content div down after two seconds, to indicate that the div is scrollable
    // but only if the scrollbar is still at the top after those two seconds
    setTimeout(function(){
      basketcontainer = $('#basketscrollingcontainer');
      if (basketcontainer.scrollTop() === 0) {
        basketcontainer.animate({scrollTop:basketcontainer[0].scrollHeight}, 800, 'easeInOutCubic');
      }
    }, 1000);

    // in order to prevent older touch devices from propagating the click onto the blackoutdiv
    orb.addClass('stopClickPropagation');
    setTimeout(function() { orb.removeClass('stopClickPropagation'); }, 500);

  });


  // update the number and price in the Orb
  $('#basketOrb').on('updateOrb', function() {
    resizeBasket();

    var baskettotalnumber = 0;
    // get the current number of products in the basket
    $('#ibasket input[name^="basketnumber_"]').each(function() {
      baskettotalnumber += parseInt($(this).val());
    });

    if (baskettotalnumber > 0) {
      priceValue = parseFloat($('#ibasket').find('.baskettotalprice').attr('data'));
    } else {
      priceValue = 0;
    }

    // only animate when basket is not in opened state
    if (!$(this).hasClass('opened') && window.previousbaskettotalnumber !== undefined && window.previousbaskettotalnumber !== baskettotalnumber) {
      $(this).addClass('animated')
      .addClass('amountchanged');
      setTimeout(function() { $('#basketOrb').removeClass('amountchanged'); }, 1000);
    }
    window.previousbaskettotalnumber = baskettotalnumber;

    // update the numbers
    $(this).find('.count').html(baskettotalnumber);
    formatted = priceValue.toMoney(window.site_config.currency.nrofdecimals, window.site_config.currency.decimalsepparator, window.site_config.currency.thousandsepparator);
    if (window.site_config.currency.symbolposition === 'end') {
      $(this).find('.price span').html(formatted + ' ' + window.site_config.currency.symbol);
    } else {
      $(this).find('.price span').html(window.site_config.currency.symbol + ' ' + formatted);
    }

    $('.price span').removeAttr('style');
    fontSizePrice = parseInt($('.price span', $(this)).css('font-size'));

    if (baskettotalnumber > 0) {
      // resize until it fits
      while($('.price span', $(this)).width() > $(this).width() * 0.70) {
        fontSizePrice--;
        $('.price span', $(this)).css('font-size', fontSizePrice.toString() + 'px');
      }
    }
  });
}

