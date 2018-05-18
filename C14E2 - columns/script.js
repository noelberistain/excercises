var columNumbers = document.getElementById("columns");
var text = document.getElementById("text").textContent;
var div = document.createElement("div");
div.appendChild(document.createTextNode(text));
var bttn = document.getElementById("submit");
bttn.insertAdjacentElement("afterend", div);

var p = document.getElementById("text");
p.parentNode.removeChild(p);
bttn.addEventListener("click", function handler() {
    if (columNumbers.value === "2")
        div.setAttribute("style", "column-count : 2");
    if (columNumbers.value === "3")
        div.setAttribute("style", "column-count : 3");
    if (columNumbers.value === "4")
        div.setAttribute("style", "column-count : 4");
    if(columNumbers.value === "2" || columNumbers === "3" || columNumbers === "4")
        bttn.removeEventListener("click",handler);
});