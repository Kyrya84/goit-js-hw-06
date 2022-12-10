let nameInput = document.getElementById("name-input");

// console.log(nameInput);

let nameOutput = document.getElementById("name-output");

// console.log(nameOutput);

nameInput.oninput = function () {
    if (nameInput.value === '') {
       nameOutput.innerHTML = 'Anonymous';
    } else{
    nameOutput.innerHTML = nameInput.value;
    }
}

// console.log(nameInput.oninput);

// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".