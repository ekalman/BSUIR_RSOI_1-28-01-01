// Работа с Web SQL базой данных: https://habr.com/ru/post/84654/

// Подсоединиться к базе данных. Данный код создаёт объект, представляющий БД, а если базы данных с таким именем не существует, то создаётся и она.
let db = openDatabase("mydb", "0.1", "Inserted notes", 1000);
// При этом в аргументах указывается имя базы данных, версия, отображаемое имя и приблизительный размер.
// Кроме того важно отметить, что приблизительный размер не является ограничением.
// Реальный размер базы данных может изменяться.

if (!db) {
  alert("При создании БД возникла ошибка");
}

// Для выполнения запросов к БД предварительно надо создать транзакцию, вызвав функцию database.transaction().
// У неё один аргумент, а именно другая JavaScript функция, принимающая объект транзакции и предпринимающая запросы к базе данных.
db.transaction(function (tx) {
  // Cам SQL запрос можно выполнить, вызвав функцию executeSql объекта транзакции
  tx.executeSql("SELECT * FROM Classes", [], function (tx, result) {
    let childOption;
    let select = document.getElementById('select');
    for (let i = 0; i < result.rows.length; i++) {
      childOption = document.createElement('option');
      childOption.innerHTML = result.rows.item(i)['id'];
      childOption.value = result.rows.item(i)['id'];
      select.append(childOption);
    }
  }, function (tx) {
    tx.executeSql("CREATE TABLE Classes (id INTEGER PRIMARY KEY AUTOINCREMENT, number TEXT, quantity INTEGER, leader TEXT, phone TEXT)", [], null, null);
  })
});

function add() {

  let number = document.getElementById('number').value;
  let quantity = document.getElementById('quantity').value;
  let leader = document.getElementById('leader').value;
  let phone = document.getElementById('phone').value;

  // Снова создаем транзаклюю
  db.transaction(function (tx) {
    tx.executeSql("INSERT INTO Classes (number, quantity, leader, phone) values(?, ?, ?, ?)", [number, quantity, leader, phone], null, null);
  });
}


function show() {
  let child;
  let parent = document.getElementById('table');

  if (parent.querySelector('td')) {
    return 0;
  } else {
    // ВЫВОД ДАННЫХ
    db.transaction(function (tx) {
      tx.executeSql("SELECT * FROM Classes", [], function (tx, result) {
        if (result.rows.length > 0) {
          for (let i = 0; i < result.rows.length; i++) {
            child = document.createElement('tr');
            child.innerHTML = '<td>' + result.rows.item(i)['id'] + '</td><td>' + result.rows.item(i)['number'] + '</td><td>' + result.rows.item(i)['quantity'] + '</td><td>' + result.rows.item(i)['leader'] + '</td><td>' + result.rows.item(i)['phone'] + '</td>';
            parent.append(child);
          }
        } else alert('Пока не было добавлено ни одного класса!')
      }, null)
    });
  }
}


function max() {
  db.transaction(function (tx) {
    tx.executeSql("SELECT number, quantity, leader FROM Classes WHERE quantity=(SELECT MAX(quantity) FROM Classes)", null, function (tx, result) {
      if (result.rows.length > 0) {
        alert('Группа № ' + result.rows.item(0)['number'] + ' имеет максимальное количество учащихся, а именно ' +
          result.rows.item(0)['quantity'] + '. Классный руководитель: ' + result.rows.item(0)['leader'] +  '.');
      } else alert('Пока не было добавлено ни одного класса!')
    }, null);

  });
}


function min() {
  db.transaction(function (tx) {
    tx.executeSql("SELECT number, quantity, leader FROM Classes WHERE quantity=(SELECT MIN(quantity) FROM Classes)", null, function (tx, result) {
      if (result.rows.length > 0) {
        alert('Группа № ' + result.rows.item(0)['number'] + ' имеет минимальное количество учащихся, а именно ' +
          result.rows.item(0)['quantity'] + '. Классный руководитель: ' + result.rows.item(0)['leader'] + '.');
      } else alert('Пока не было добавлено ни одного класса!')
    }, null);
  });
}

function del() {
  let e = document.getElementById("select");
  if (e.value > 0){
  let option = e.options[e.selectedIndex].value;
  db.transaction(function (tx) {
    tx.executeSql("DELETE FROM Classes WHERE id = " + option + " ", null, null, null);
  });
  }
  else alert('Пока не было добавлено ни одного класса или не был выбран ID класса для удаления!')
}
