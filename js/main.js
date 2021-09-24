$('.skills__input').on('click', function () {

  let $inputValue = $('input:checked');
  let count = 0;

  for (let i = 0; i < $inputValue.length; i++) {
    count += +$inputValue.val();
  }
 
  if (count > 45 && count<=120) {
    $('.skills__range-count').addClass('skills__range-count--green');
    $('.skills__range-count').removeClass('skills__range-count--blue');
  }
  else if (count > 120) {
    $('.skills__range-count').addClass('skills__range-count--blue');
  }
  
  $('.skills__range-count').html(count)
  
  $('.skills__range-arrow').animate({
    deg: count
  }, {
    duration: 1000,
    step: function (now) {
      $(this).css({

        transform: 'rotate(' + now + 'deg)'

      });
    }
  });
});