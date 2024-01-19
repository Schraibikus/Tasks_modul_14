const btn = document.querySelector(".btn");
const inputWidth = document.querySelector(".width");
const inputHeight = document.querySelector(".height");
const resultNode = document.querySelector(".result");

const useRequest = (width, height) => {
  return fetch(`https://dummyimage.com/${width}x${height}/`)
    .then((response) => {
      return response;
    })
    .then((data) => data.url)
    .catch(() => {
      console.log("Error");
    });
};

btn.addEventListener("click", async () => {
  width = +inputWidth.value;
  height = +inputHeight.value;
  if (
    width < 100 ||
    width > 300 ||
    isNaN(width) ||
    height < 100 ||
    height > 300 ||
    isNaN(height)
  ) {
    resultNode.textContent = "одно из чисел вне диапазона от 100 до 300";
  } else {
    const requestResult = await useRequest(width, height);
    image = document.createElement("img");
    image.src = requestResult;
    resultNode.append(image);
  }
});
