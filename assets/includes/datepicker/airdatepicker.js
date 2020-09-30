// $('.datepicker--nav-action').data('prev') = '<svg><path d="M 17,12 l -5,5 l 5,5 M 12, 17 h -10"></path></svg>'




$('.datepicker-here').datepicker({
  prevHtml: '<svg><path d="M 20,9 l -8,8 l 8,8 M 12, 17 h 16"></path></svg>',
  nextHtml: '<svg><path d="M 12,9 l 8,8 l -8,8 M 19, 17 h -16"></path></svg>',
  navTitles: {
    days: 'MM <i>yyyy</i>',
    months: 'yyyy',
    years: 'yyyy1 - yyyy2'
  },
})
