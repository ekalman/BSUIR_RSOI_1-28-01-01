function ChangeFieldWidth() {
  let elements = document.getElementsByClassName('area');
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.width = '400px';
  }
  alert('Пожалуйста, заполните все поля!')
}


document.getElementById("result").addEventListener("click", () => {

  let text1 = document.getElementById('area-1').value;
  let text2 = document.getElementById('area-2').value;
  let text3 = document.getElementById('area-3').value;

  if(text1 === '' && text2 === '' && text3 === ''){
    document.getElementById('message').innerText = 'Заполните надпись на ракете через форму на странице!';
  }
  else {
    document.getElementById('message').innerText = '';

    let sizeI = document.myForm.textSize.selectedIndex;
    let sizeT = document.myForm.textSize.options[sizeI].value;
    let size;

    if (sizeT == "Маленький") {
      size = "15px";
    } else if (sizeT == "Средний") {
      size = "22px";
    } else if (sizeT == "Большой") {
      size = "27px";
    } else {
      size = "35px";
    }

    let colorI = document.myForm.textColor.selectedIndex;
    let colorT = document.myForm.textColor.options[colorI].value;
    let color;

    if (colorT == "Розовый") {
      color = "deeppink";
    } else if (colorT == "Желтый") {
      color = "yellow";
    } else if (colorT == "Зеленый") {
      color = "green";
    } else if (colorT == "Синий") {
      color = "blue";
    } else if (colorT == "Черный") {
      color = "black";
    } else {
      color = "white";
    }

    document.getElementById('text-1').style.color = color;
    document.getElementById('text-1').style.fontSize = size;
    document.getElementById('text-1').innerText = text1;

    document.getElementById('text-2').style.color = color;
    document.getElementById('text-2').style.fontSize = size;
    document.getElementById('text-2').innerText = text2;

    document.getElementById('text-3').style.color = color;
    document.getElementById('text-3').style.fontSize = size;
    document.getElementById('text-3').innerText = text3;
  }
});



document.getElementById("launch").addEventListener("click", () => {
  let text1 = document.getElementById('area-1').value;
  let text2 = document.getElementById('area-2').value;
  let text3 = document.getElementById('area-3').value;

  if(text1 === '' || text2 === '' || text3 === ''){
    alert('Вы не заполнили надписи на ракету!')
  }
  else{
    document.getElementById('back-2').style.color = 'red';

    location.href = "#openModal-2";
  }

});

