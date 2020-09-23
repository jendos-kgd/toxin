$(document).ready(function () {
  dropdownMenuGuests();
  counterGuests();
})



function dropdownMenuGuests() {
  $('#dropdown-guests__expand').click(function () {
    if ($('#dropdown-guests__menu').hasClass('hidden')) {
      $('#dropdown-guests__menu').removeClass('hidden');
    } else {
      $('#dropdown-guests__menu').addClass('hidden');
    }
  })
}

function counterGuests() {
  let adultCounter = 0;
  let childCounter = 0;
  let babyCounter = 0;

  $('#adult-delete-btn').click(function () {
    if (adultCounter == 0) {
      adultCounter = 0;
    } else {
      adultCounter -= 1;
    }
    $('#adult-counter').html(adultCounter);
    $('#dropdown-guests__data').html(adultCounter + childCounter + babyCounter + ' гостя');
    if (adultCounter == 0) {
      $('#adult-delete-btn').css('opacity', '0.38');
    } else {
      $('#adult-delete-btn').css('opacity', '1');
    }
  })
  $('#adult-add-btn').click(function () {
    adultCounter += 1;
    $('#adult-counter').html(adultCounter);
    $('#dropdown-guests__data').html(adultCounter + childCounter + babyCounter + ' гостя');
    if (adultCounter == 0) {
      $('#adult-delete-btn').css('opacity', '0.38');
    } else {
      $('#adult-delete-btn').css('opacity', '1');
    }
  })

  $('#child-delete-btn').click(function () {
    if (childCounter == 0) {
      childCounter = 0;
    } else {
      childCounter -= 1;
    }
    $('#child-counter').html(childCounter);
    $('#dropdown-guests__data').html(adultCounter + childCounter + babyCounter + ' гостя');
    if (childCounter == 0) {
      $('#child-delete-btn').css('opacity', '0.38');
    } else {
      $('#child-delete-btn').css('opacity', '1');
    }
  })
  $('#child-add-btn').click(function () {
    childCounter += 1;
    $('#child-counter').html(childCounter);
    $('#dropdown-guests__data').html(adultCounter + childCounter + babyCounter + ' гостя');
    if (childCounter == 0) {
      $('#child-delete-btn').css('opacity', '0.38');
    } else {
      $('#child-delete-btn').css('opacity', '1');
    }
  })

  $('#baby-delete-btn').click(function () {
    if (babyCounter == 0) {
      babyCounter = 0;
    } else {
      babyCounter -= 1;
    }
    $('#baby-counter').html(babyCounter);
    $('#dropdown-guests__data').html(adultCounter + childCounter + babyCounter + ' гостя');
    if (babyCounter == 0) {
      $('#baby-delete-btn').css('opacity', '0.38');
    } else {
      $('#baby-delete-btn').css('opacity', '1');
    }
  })
  $('#baby-add-btn').click(function () {
    babyCounter += 1;
    $('#baby-counter').html(babyCounter);
    $('#dropdown-guests__data').html(adultCounter + childCounter + babyCounter + ' гостя');
    if (babyCounter == 0) {
      $('#baby-delete-btn').css('opacity', '0.38');
    } else {
      $('#baby-delete-btn').css('opacity', '1');
    }
  })
}
