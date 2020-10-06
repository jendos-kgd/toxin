
$('.datepicker-here').datepicker({
  prevHtml: '<svg><path d="M 20,9 l -8,8 l 8,8 M 12, 17 h 16"></path></svg>',  // Рисуем левую стрелку
  nextHtml: '<svg><path d="M 12,9 l 8,8 l -8,8 M 19, 17 h -16"></path></svg>', // Рисуем правую стрелку
  navTitles: {
    days: 'MM <i>yyyy</i>', // Убрали запятую после месяца в заголовке календаря
    months: 'yyyy',
    years: 'yyyy1 - yyyy2'
  },
  range: 'true',
  clearButton: 'true',      // Добавили кнопку Очистить
  onSelect: (formattedDate) => {       //разбиваем даты заезда/выезда на 2 инпута
        if (formattedDate.length > 1) { //если в массиве дат больше 1 даты
          $('#startDate').val(formattedDate.split(",")[0]);  //в первый инпут заносим первую дату
          $('#endDate').val(formattedDate.split(",")[1]);    //во второй инпут - вторую дату
          this.selectedDates = formattedDate;
        }
      }
})

// Добавляем фон к началу и концу диапазона дат, чтобы не было белых пробелов в диапазоне.
$('.datepicker').click(function () {
  $('.-range-from-').append('<div class="add-bg-range-from"></div>');
  $('.-range-to-').prepend('<div class="add-bg-range-to"></div>');
})

// Добавляем кнопу Применить, которая скрывает календарь
let okButton = '<span class="datepicker--button" data-action="hide">Применить</span>';  //Создаем кнопку Применить c data-action="hide"(метод hide прописан в исходниках) со стандартными классами кнопок air-datepicker
$('.datepicker--button[data-action="clear"]').each(function() {  // ищем каждую кнопку Очистить в документе
  $(okButton).insertAfter($(this));   // Вставялем кнопку Применить после кнопки очистить
});
