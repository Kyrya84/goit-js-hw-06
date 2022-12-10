const textElement = document.querySelector(`#text`);

const inputElement = document.querySelector(`#font-size-control`);

inputElement.addEventListener("input", (element) => {
    const sizeText = inputElement.value;

    // console.log(sizeText);

    textElement.style.fontSize = sizeText + "px";

    // console.log(textElement.style.fontSize);
});

// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і змінює інлайн - стиль span#text, оновлюючи властивість font - size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.