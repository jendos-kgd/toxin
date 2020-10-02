$(document).ready(function () {
  dropdownMenuRoom();
  counterRoom();
})

function dropdownMenuRoom() {

  // Функционал по нажатию стрелочки (открытие и закрытие меню)
  $('#dropdown-room__expand').click(function () {
    if ($('#dropdown-room__menu').hasClass('hidden')) {
      $('#dropdown-room__menu').removeClass('hidden');
    } else {
      $('#dropdown-room__menu').addClass('hidden');
    }
  })

  // Функционал по нажатию на input (только открытие меню)
  $('#dropdown-room__header').click(function () {
    if ($('#dropdown-room__menu').hasClass('hidden')) {
      $('#dropdown-room__menu').removeClass('hidden');
    }
  })

  // Функционал по нажатию вне меню (закрытие меню)
  $(document).click(function (e){ // событие клика по странице
      if (!$("#dropdown-room__menu").is(e.target) && // если клик сделан не по элементу
          $("#dropdown-room__menu").has(e.target).length === 0 && // если клик сделан не по вложенным элементам
          !$('#dropdown-room__header').is(e.target) &&  //если клик сделан не по полю input
          !$('#dropdown-room__expand').is(e.target)) {   //если клик сделан не по стрелочке
            $('#dropdown-room__menu').addClass('hidden'); // скрываем блок
          }
  });
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
    $('#dropdown-room__header').val(bedroomCounter + ' ' + bedroomText + ' ' + bedCounter + ' ' + bedText + '...');
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
    $('#dropdown-room__header').val(bedroomCounter + ' ' + bedroomText + ' ' + bedCounter + ' ' + bedText + '...');
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
    $('#dropdown-room__header').val(bedroomCounter + ' ' + bedroomText + ' ' + bedCounter + ' ' + bedText + '...');
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
    $('#dropdown-room__header').val(bedroomCounter + ' ' + bedroomText + ' ' + bedCounter + ' ' + bedText + '...');
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

  $('#dropdown-room__clear-button').click(function () {
    bedroomCounter = 0;
    bedCounter = 0;
    bathCounter = 0;
    bedroomText = 'спален';
    bedText = 'кроватей';
    $('#bedroom-counter').html(bedroomCounter);
    $('#bed-counter').html(bedCounter);
    $('#bath-counter').html(bathCounter);
    $('#dropdown-room__header').val(bedroomCounter + ' ' + bedroomText + ' ' + bedCounter + ' ' + bedText + '...');
  })

  $('#dropdown-room__apply-button').click(function () {
    $('#dropdown-room__data').val('спальни:' + bedroomCounter + ' кровати:' + bedCounter + ' ванные:' + bathCounter);
    $('#dropdown-room__menu').addClass('hidden');
  })
}
