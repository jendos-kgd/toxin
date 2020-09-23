$(document).ready(function () {
  dropdownMenuRoom();
  counterRoom();
})

function dropdownMenuRoom() {
  $('#dropdown-room__expand').click(function () {
    if ($('#dropdown-room__menu').hasClass('hidden')) {
      $('#dropdown-room__menu').removeClass('hidden');
    } else {
      $('#dropdown-room__menu').addClass('hidden');
    }
  })
}

function counterRoom() {
  let bedroomCounter = 0;
  let bedCounter = 0;
  let bathCounter = 0;

  $('#bedroom-delete-btn').click(function () {
    if (bedroomCounter == 0) {
      bedroomCounter = 0;
    } else {
      bedroomCounter -= 1;
    }
    $('#bedroom-counter').html(bedroomCounter);
    $('.dropdown__data').html(bedroomCounter + ' спальни, ' + bedCounter + ' кровати...');
    if (bedroomCounter == 0) {
      $('#bedroom-delete-btn').css('opacity', '0.38');
    } else {
      $('#bedroom-delete-btn').css('opacity', '1');
    }
  })
  $('#bedroom-add-btn').click(function () {
    bedroomCounter += 1;
    $('#bedroom-counter').html(bedroomCounter);
    $('#dropdown-room__data').html(bedroomCounter + ' спальни, ' + bedCounter + ' кровати...');
    if (bedroomCounter == 0) {
      $('#bedroom-delete-btn').css('opacity', '0.38');
    } else {
      $('#bedroom-delete-btn').css('opacity', '1');
    }
  })

  $('#bed-delete-btn').click(function () {
    if (bedCounter == 0) {
      bedCounter = 0;
    } else {
      bedCounter -= 1;
    }
    $('#bed-counter').html(bedCounter);
    $('#dropdown-room__data').html(bedroomCounter + ' спальни, ' + bedCounter + ' кровати...');
    if (bedCounter == 0) {
      $('#bed-delete-btn').css('opacity', '0.38');
    } else {
      $('#bed-delete-btn').css('opacity', '1');
    }
  })
  $('#bed-add-btn').click(function () {
    bedCounter += 1;
    $('#bed-counter').html(bedCounter);
    $('.dropdown__data').html(bedroomCounter + ' спальни, ' + bedCounter + ' кровати...');
    if (bedCounter == 0) {
      $('#bed-delete-btn').css('opacity', '0.38');
    } else {
      $('#bed-delete-btn').css('opacity', '1');
    }
  })

  $('#bath-delete-btn').click(function () {
    if (bathCounter == 0) {
      bathCounter = 0;
    } else {
      bathCounter -= 1;
    }
    $('#bath-counter').html(bathCounter);
    if (bathCounter == 0) {
      $('#bath-delete-btn').css('opacity', '0.38');
    } else {
      $('#bath-delete-btn').css('opacity', '1');
    }
  })
  $('#bath-add-btn').click(function () {
    bathCounter += 1;
    $('#bath-counter').html(bathCounter);
    if (bathCounter == 0) {
      $('#bath-delete-btn').css('opacity', '0.38');
    } else {
      $('#bath-delete-btn').css('opacity', '1');
    }
  })
}
