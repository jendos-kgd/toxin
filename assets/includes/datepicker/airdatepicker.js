
$('.datepicker-here').datepicker({
  prevHtml: '<svg><path d="M 20,9 l -8,8 l 8,8 M 12, 17 h 16"></path></svg>',
  nextHtml: '<svg><path d="M 12,9 l 8,8 l -8,8 M 19, 17 h -16"></path></svg>',
  navTitles: {
    days: 'MM <i>yyyy</i>',
    months: 'yyyy',
    years: 'yyyy1 - yyyy2'
  },
  range: 'true',
  clearButton: 'true',
  todayButton: 'true',
  language: {
    today: 'Применить',
  },

})

// Добавляем фон к началу и концу диапазона дат, чтобы не было белых пробелов в диапазоне.
$('.datepicker').click(function () {
  $('.-range-from-').append('<div class="add-bg-range-from"></div>');
  $('.-range-to-').prepend('<div class="add-bg-range-to"></div>');
})

// Замена кнопки Сегодня на кнопку Применить
