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

// Request to API
const url = 'http://127.0.0.1:5001/api/v1/status/';
$.get(url, function (data) {
  if (data.status === 'OK') {
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
  }
});

// Fetch places
const data = {};

$.ajax({
  url: 'http://127.0.0.1:5001/api/v1/places_search',
  method: 'POST',
  dataType: 'json',
  contentType: 'application/json',
  data: JSON.stringify(data),
  success: function (result) {
    $.each(result, (i, place) => {
      $('section.places').append(`
      <article>
        <div class="title_box">
          <h2>${place.name}</h2>
          <div class="price_by_night">$${place.price_by_night}</div>
        </div>
        <div class="information">
          <div class="max_guest">${place.max_guest} Guests</div>
          <div class="number_rooms">${place.number_rooms} Bedrooms</div>
          <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
        </div>
        <div class="description">${place.description}</div>
      </article>`);
    });
  }
});
