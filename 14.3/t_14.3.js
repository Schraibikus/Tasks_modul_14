/* Задание № 3

Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://jsonplaceholder.typicode.com/photos?_limit=5, где get-параметр limit — это введённое число.
Пример. Если пользователь ввёл 8, то запрос будет вида: https://jsonplaceholder.typicode.com/photos?_limit=8.
После получения данных вывести ниже картинки на экран. */

function useRequest(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log("Статус ответа: ", xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };

  xhr.onerror = function () {
    console.log("Ошибка! Статус ответа: ", xhr.status);
  };

  xhr.send();
}

const resultNode = document.querySelector(".result");
const btnNode = document.querySelector("button");

function displayResult(apiData) {
  let cards = "";

  apiData.forEach((element) => {
    const cardBlock = `
		<div class="card">
			<img src="${element.download_url}"
			class="card-image"
      width="200"
      heigh="150"
			/>
			<p>${element.author}</p>
		</div>
		`; //Решил принудительно ограничить размер фото, очень уж огромные они
    cards = cards + cardBlock;
  });
  resultNode.innerHTML = cards;
}

btnNode.addEventListener("click", () => {
  const value = document.querySelector("input").value;
  if (value < 1 || value > 10) {
    resultNode.innerHTML = "<p>число вне диапазона от 1 до 10</p>";
  } else {
    // url = `https://jsonplaceholder.typicode.com/photos?_limit=${value}`;
    url = `https://picsum.photos/v2/list/?limit=${value}`; //Использовал URL из примера, потому что с URL который приведен в задании ничего не происходит, VPN тоже не помогает
    useRequest(url, displayResult);
  }
});
