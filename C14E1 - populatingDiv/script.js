var n = document.getElementById("nGrid");
var m = document.getElementById("mGrid");
var fragment = document.createDocumentFragment();
var bttn = document.getElementById("submit");
var container = document.getElementById("container");

bttn.addEventListener("click", function () {
    while(container.children.length){
        container.removeChild(container.lastChild);
    }
    for (var i = 0; i < m.value; i++) {
        var rows = document.createElement('div');
        rows.setAttribute("class", "rows");
        for (var k = 0; k < n.value; k++) {
            var cols = document.createElement('div');
            cols.setAttribute("class", "cols");
            rows.appendChild(cols);
        }
        fragment.appendChild(rows);
    }
    container.appendChild(fragment);

});