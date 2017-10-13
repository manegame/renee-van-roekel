var   imgDivs;

$(document).ready(function(){
  imgDivs = $("div.img"); // Variable "imgDivs" is #images

  var   current,
        total = imgDivs.length;

  imgDivs.each(function(index) {
    // Add show class to 2 imgs, add numbering
    if(index == 0) {
      $(this).addClass('show not');
    }
    if(index == 1) {
      $(this).addClass('show');
      current = index;
    }
    $(this).attr('data-count', index + 1);
  });

  $('#info').on('click', function(e) {
    e.preventDefault();
    $('.info').toggleClass('show');
  });

  function next() {
    if($(this).hasClass('not')) {
      console.log('nope');
      return false;
    }
    if (current === total) {
      console.log('case 1')
      $('.show[data-count='+current+']').removeClass('show');
      current = 1
      $('div.img[data-count='+(current)+']').addClass('show');
      $('div.img[data-count='+(current+1)+']').addClass('show');
    }
    if (current === total - 1) {
      console.log('case 2')
      $('.show[data-count='+current+']').removeClass('show not');
      $('div.img[data-count='+(current+2)+']').addClass('show').removeClass('border');
      current++
    } else {
      console.log('case 3')
      $('.show[data-count='+current+']').removeClass('show not');
      $('.show[data-count='+(current+1)+']').addClass('not').removeClass('border');
      // window.setTimeout(function () {
      $('div.img[data-count='+(current+2)+']').addClass('show');
      // }, 1000)
      current++;
    }
  }

  function feedback() {
    if(!$(this).hasClass('not')) {
      $(this).toggleClass('border');
    }
  }

  $('.img').on('click', next);
  $('.img').on('mouseover mouseout', feedback);

});
