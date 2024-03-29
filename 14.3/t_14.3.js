const API_URL = "https://picsum.photos/v2/list/?limit=";

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
  const validateInput = (value) => {
    if (value < 1 || value > 10) {
      resultNode.innerHTML = "<p>число вне диапазона от 1 до 10</p>";
      return false;
    }
    return true;
  };
  if (validateInput(value)) {
    useRequest(`${API_URL}${value}`, displayResult);
  }
});
