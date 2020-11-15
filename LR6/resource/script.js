$(document).ready(function () {

  $('#button1').click(function (event) {
    event.preventDefault();
    if($('#button1:contains("Вернуть")').length){
      $('#button1').text('Вернуть обратно!');
      $(".a-item").slideToggle();
      $('.a-new').html('');
    }
    else{
      $('#button1').text('Вернуть обратно!');
      $(".a-item").slideToggle();
      $('.a-new').html('<li>Амии (лат. Amia) — род пресноводных лучепёрых рыб из отряда амиеобразных.</li>' +
        '<li>Амии: окаменелости разных ископаемых представителей найдены также в Северной Америке (США, Канада) и Западной Европе (Франция, Великобритания).</li>').show('slow');
      $('.a-group').css({'color': 'yellow', 'font-size': '2em', 'font-weight': 'bolder'});
      $('.b-group').css({'color': 'gold', 'font-size': '1.5em', 'font-weight': 'bolder'});
      $('.c-group').css({'color': 'coral', 'font-size': '1.17em', 'font-weight': 'bolder'});
    }
  });

  $('#button2').click(function (event) {
    event.preventDefault();
    if (~$('body').text().indexOf('рыб')) {
      alert ('На этой странице были найдены слова, производные от «РЫБА»! К ним применится особый стиль для идентификации');
      $('li:contains("рыб")').css({'color': 'lightsalmon', 'font-size': '1.30em'});
    }
  });
});
