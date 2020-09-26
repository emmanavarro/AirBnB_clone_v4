$(document).ready(function () {
  $('input[type=checkbox]').css('margin-right', '10px');
  $('input[type=checkbox]').on('click', function () {
    var amenId = [];
    $('input:checked').each(function () {
      amenId[$(this).attr('data-id')] = $(this).attr('data-name');
    });
    $('input:disabled').each(function () {
      $(amenId).removeData($(this).attr('data-id'));
    });
    var list = [];
    for (var name in amenId) {
      list.push(amenId[name]);
    }
    $('.amenities h4').text(list.join(', '));
  });
});
