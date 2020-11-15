document.getElementById("submit").addEventListener("click", processForm);


function processForm() {
  if (document.form.name.value === '' || document.form.place.value === '' || document.form.week.value === '') {
    alert('Вы не до конца заполнили форму!')
  } else addReview()
}

function addReview() {
  let returnArray;
  event.preventDefault();
  returnArray = JSON.parse(localStorage.getItem("reviews"));

  let name = document.form.name.value;
  let gendre = "";
  if (document.form.gendre[0].checked) gendre = "Мужской";
  if (document.form.gendre[1].checked) gendre = "Женский";
  let place = document.form.place.value;
  let week = document.form.week.value;
  let opinion = document.form.opinion.value;
  let advice = document.form.advice.value;
  let color = document.form.color.value;

  let opinions = {};
  opinions.name = name;
  opinions.gendre = gendre;
  opinions.place = place;
  opinions.week = week;
  opinions.opinion = opinion;
  opinions.advice = advice;
  opinion.color = color;

  if (returnArray === null) {
    returnArray = [];
    returnArray.push(opinions);
    localStorage.setItem("reviews", JSON.stringify(returnArray));
  } else {
    returnArray.push(opinions);
    localStorage.setItem("reviews", JSON.stringify(returnArray));
  }
}
