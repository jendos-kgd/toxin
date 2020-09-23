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
  let bedroomText = 'спален';
  let bedText = 'кроватей';

  $('#bedroom-delete-btn').click(function () {
    if (bedroomCounter == 0) {
      bedroomCounter = 0;
      bedroomText = 'спален';
    } else {
      bedroomCounter -= 1;
      if (bedroomCounter == 0) {bedroomText = 'спален'};
      if (bedroomCounter == 1) {bedroomText = 'спальня'};
      if (bedroomCounter > 1 && bedroomCounter < 5 ) {bedroomText = 'спальни'};
      if (bedroomCounter >= 5) {bedroomText = 'спален'};
      }
    $('#bedroom-counter').html(bedroomCounter);
    $('.dropdown__data').html(bedroomCounter + ' ' + bedroomText + ' ' + bedCounter + ' ' + bedText + '...');
    if (bedroomCounter == 0) {
      $('#bedroom-delete-btn').css('opacity', '0.38');
    } else {
      $('#bedroom-delete-btn').css('opacity', '1');
    }
  })
  $('#bedroom-add-btn').click(function () {
    bedroomCounter += 1;
    if (bedroomCounter == 1) {bedroomText = 'спальня'};
    if (bedroomCounter > 1 && bedroomCounter < 5 ) {bedroomText = 'спальни'};
    if (bedroomCounter >= 5) {bedroomText = 'спален'};
    $('#bedroom-counter').html(bedroomCounter);
    $('.dropdown__data').html(bedroomCounter + ' ' + bedroomText + ' ' + bedCounter + ' ' + bedText + '...');
    if (bedroomCounter == 0) {
      $('#bedroom-delete-btn').css('opacity', '0.38');
    } else {
      $('#bedroom-delete-btn').css('opacity', '1');
    }
  })

  $('#bed-delete-btn').click(function () {
    if (bedCounter == 0) {
      bedCounter = 0;
      bedText = 'кроватей';
    } else {
      bedCounter -= 1;
      if (bedCounter == 0) {bedText = 'кроватей'};
      if (bedCounter == 1) {bedText = 'кровать'};
      if (bedCounter > 1 && bedCounter < 5) {bedText = 'кровати'};
      if (bedCounter >= 5) {bedText = 'кроватей'};
    }
    $('#bed-counter').html(bedCounter);
    $('.dropdown__data').html(bedroomCounter + ' ' + bedroomText + ' ' + bedCounter + ' ' + bedText + '...');
    if (bedCounter == 0) {
      $('#bed-delete-btn').css('opacity', '0.38');
    } else {
      $('#bed-delete-btn').css('opacity', '1');
    }
  })
  $('#bed-add-btn').click(function () {
    bedCounter += 1;
    $('#bed-counter').html(bedCounter);
    if (bedCounter == 0) {bedText = 'кроватей'};
    if (bedCounter == 1) {bedText = 'кровать'};
    if (bedCounter > 1 && bedCounter < 5) {bedText = 'кровати'};
    if (bedCounter >= 5) {bedText = 'кроватей'};
    $('.dropdown__data').html(bedroomCounter + ' ' + bedroomText + ' ' + bedCounter + ' ' + bedText + '...');
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
