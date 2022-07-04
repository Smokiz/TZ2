// Массив Json. Получение с помощью Fetch, можно и Ajax
fetch("config.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    let placegolder = document.querySelector("#data-output");
    let out = "";
    for (let product of products) {
      out += `
    <tr class="cards"onclick="move()">
    <td class="start" onclick="start()">${product.A}</td>
    <td class="start" onclick="start()">${product.B}</td>
    <td class="start" onclick="start()">${product.C}</td>
    <td class="start" onclick="start()">${product.D}</td>
    <td class="start" onclick="start()">${product.E}</td>
    <td class="start" onclick="start()">${product.F}</td>
    </tr>
    `;
    }
    placegolder.innerHTML = out;
  });
// Таймер
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("timer");
    var width = 100;
    var id = setInterval(frame, 100);
    function frame() {
      if (width <= 0) {
        clearInterval(id);
        i = 0;
        alert("Время кончилось!");
        location.reload();
      } else {
        width--;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
//Выборка.Рандом
var cards_block = document.querySelector("tr");
var cards = document.querySelectorAll("tr > th");
function start() {
  var random = Math.floor(Math.random() * 6);
  setTimeout(function () {
    random++;
    cards[random].style.background = "#f2f4c3";
    cards[random].style.color = "#000";
  }, 10000);
}
