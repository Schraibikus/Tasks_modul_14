const btn = document.querySelector(".btn");
const pageNode = document.querySelector(".page");
const limitNode = document.querySelector(".limit");
const resultNode = document.querySelector(".result");

document.addEventListener("DOMContentLoaded", () => {
  storageItem = localStorage.getItem("lastResponse");
  if (storageItem) showResult(JSON.parse(storageItem));
});

function showError(message) {
  element = document.createElement("p");
  element.textContent = message;
  resultNode.append(element);
  resultNode.style.display = "block";
}

const useRequest = (page, limit) => {
  const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
  return fetch(url)
    .then((response) => {
      return response;
    })
    .then((data) => {
      result = data.json();
      return result;
    })
    .catch(() => {
      console.log("Error");
    });
};

function showResult(apiData) {
  let cards = "";
  apiData.forEach((element) => {
    const cardBlock = `
			<div class="card">
				<img class="card-image"
				src="${element.download_url}"
				width="200"
      	heigh="150">
				<p>${element.author}</p>
			</div>
		`;
    cards += cardBlock;
  });
  resultNode.innerHTML = cards;
  resultNode.style.marginTop = "20px";
  resultNode.style.display = "flex";
  resultNode.style.flexWrap = "wrap";
  resultNode.style.gap = "10px";
}

btn.addEventListener("click", async () => {
  page = Number(pageNode.value);
  limit = Number(limitNode.value);
  if (
    (page < 1 || page > 10 || isNaN(page)) &&
    (limit < 1 || limit > 10 || isNaN(limit))
  ) {
    resultNode.textContent = "Номер страницы и лимит вне диапазона от 1 до 10";
  } else if (limit < 1 || limit > 10 || isNaN(limit)) {
    resultNode.textContent = "Лимит вне диапазона от 1 до 10";
  } else if (page < 1 || page > 10 || isNaN(page)) {
    resultNode.textContent = "Номер страницы вне диапазона от 1 до 10";
  } else {
    const requestResult = await useRequest(page, limit);
    localStorage.setItem("lastResponse", JSON.stringify(requestResult));
    showResult(requestResult);
  }
});
