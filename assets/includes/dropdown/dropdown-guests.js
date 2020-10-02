$(document).ready(function () {
  dropdownMenuGuests();
  counterGuests();
})

function dropdownMenuGuests() {

  // Функционал по нажатию стрелочки (открытие и закрытие меню)
  $('#dropdown-guests__expand').click(function () {
    if ($('#dropdown-guests__menu').hasClass('hidden')) {
      $('#dropdown-guests__menu').removeClass('hidden');
    } else {
      $('#dropdown-guests__menu').addClass('hidden');
    }
  });

  // Функционал по нажатию на input (только открытие меню)
    $('#dropdown-guests__header').click(function () {
      if ($('#dropdown-guests__menu').hasClass('hidden')) {
        $('#dropdown-guests__menu').removeClass('hidden');
      }
    });

  // Функционал по нажатию вне меню (закрытие меню)
    $(document).click(function (e){ // событие клика по странице
        if (!$("#dropdown-guests__menu").is(e.target) && // если клик сделан не по элементу
            $("#dropdown-guests__menu").has(e.target).length === 0 && // если клик сделан не по вложенным элементам
            !$('#dropdown-guests__header').is(e.target) &&  //если клик сделан не по полю input
            !$('#dropdown-guests__expand').is(e.target)) {   //если клик сделан не по стрелочке
              $('#dropdown-guests__menu').addClass('hidden'); // скрываем блок
            }
    });
}


function counterGuests() {
  let adultCounter = 0;
  let childCounter = 0;
  let babyCounter = 0;

  function addDataGuests() {
    if ((adultCounter + childCounter + babyCounter) == 0) {
      $('#dropdown-guests__header').val('Сколько гостей');
    } if ((adultCounter + childCounter + babyCounter) == 1) {
      $('#dropdown-guests__header').val('1 гость');
    } if ((adultCounter + childCounter + babyCounter) > 1 && (adultCounter + childCounter + babyCounter) <= 4) {
      $('#dropdown-guests__header').val(adultCounter + childCounter + babyCounter + ' гостя');
    } if ((adultCounter + childCounter + babyCounter) > 4) {
      $('#dropdown-guests__header').val(adultCounter + childCounter + babyCounter + ' гостей');
    }
  }

  $('#adult-delete-btn').click(function () {
    if (adultCounter == 0) {
      adultCounter = 0;
    } else {
      adultCounter -= 1;
    }
    $('#adult-counter').html(adultCounter);
    addDataGuests();
    if (adultCounter == 0) {
      $('#adult-delete-btn').css('opacity', '0.38');
    } else {
      $('#adult-delete-btn').css('opacity', '1');
    }
  })
  $('#adult-add-btn').click(function () {
    adultCounter += 1;
    $('#adult-counter').html(adultCounter);
    addDataGuests();
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
    addDataGuests();
    if (childCounter == 0) {
      $('#child-delete-btn').css('opacity', '0.38');
    } else {
      $('#child-delete-btn').css('opacity', '1');
    }
  })
  $('#child-add-btn').click(function () {
    childCounter += 1;
    $('#child-counter').html(childCounter);
    addDataGuests();
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
    addDataGuests();
    if (babyCounter == 0) {
      $('#baby-delete-btn').css('opacity', '0.38');
    } else {
      $('#baby-delete-btn').css('opacity', '1');
    }
  })
  $('#baby-add-btn').click(function () {
    babyCounter += 1;
    $('#baby-counter').html(babyCounter);
    addDataGuests();
    if (babyCounter == 0) {
      $('#baby-delete-btn').css('opacity', '0.38');
    } else {
      $('#baby-delete-btn').css('opacity', '1');
    }
  })

  $('#dropdown-guests__clear-button').click(function () {
    adultCounter = 0;
    childCounter = 0;
    babyCounter = 0;
    $('#adult-counter').html(adultCounter);
    $('#child-counter').html(childCounter);
    $('#baby-counter').html(babyCounter);
    $('#dropdown-guests__header').val('Сколько гостей');
  })

  $('#dropdown-guests__apply-button').click(function () {
    $('#dropdown-guests__data').val('взрослые: ' + adultCounter + ' дети:' + childCounter + ' младенцы:' + babyCounter);
    console.log($('#dropdown-guests__data').val());
    $('#dropdown-guests__menu').addClass('hidden');

  })
}
