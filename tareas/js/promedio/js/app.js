//Crear elementos li con JS
//Capturar valor del input
//Asignar valor capturado al li creado

const LIST_ITEMS = document.getElementById("item-list");
const INPUT_FIELD = document.getElementById("input-field");
const INPUT_BTN = document.getElementById("input-btn");

INPUT_BTN.addEventListener("click", () => {
    const LI_ELEMENT = document.createElement("li");
    const LI_CONTENT = document.createTextNode(INPUT_FIELD.value);

    LI_ELEMENT.appendChild(LI_CONTENT);
    LIST_ITEMS.appendChild(LI_ELEMENT);
    INPUT_FIELD.value = "";

});