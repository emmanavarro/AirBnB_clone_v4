$(document).ready(function () {
  $('input.amenitites').on('click', function () {
    var amenId = {};
    $('input:checked').each(function () {
      amenId.append($(this).val());
    });
    $('input:checked').each(function () {
      amenId.remove($(this).val());
    });
    $('.amenities h4').text(amenId);
  });
});
