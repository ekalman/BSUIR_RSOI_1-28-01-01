data = JSON.parse(localStorage.getItem('reviews'));


window.onload = function () {

  if (data !== null) {
    document.getElementById('results').innerHTML = makeHTML() + '</table>';
  } else {
    document.getElementById('results').innerHTML = '<h1 align="center">Пока не было добавлено ни одного отзыва!</h1>';
  }
};

function makeHTML() {
  var html = '<h1 align="center">Таблица результатов опроса</h1><table border="1" align="center">';
  html += '<thead><th class="table__th">ФИО</th>';
  html += '<th class="table__th">Пол</th>';
  html += '<th class="table__th">Место проведения</th>';
  html += '<th class="table__th">Неделя</th>';
  html += '<th class="table__th">Мнение</th>';
  html += '<th class="table__th">Посоветуют ли</th></thead>';

  for (var i = 0; i < data.length; i++) {
    html += '<tr>';
    html += '<td>' + data[i].name + '</td>';
    html += '<td>' + data[i].gendre + '</td>';
    html += '<td>' + data[i].place + '</td>';
    html += '<td>' + data[i].week + '</td>';
    html += '<td>' + data[i].opinion + '</td>';
    html += '<td>' + data[i].advice + '%, что да' + '</td>';
    html += '</tr>';
  }

  return html;
}

