var a, image, figure, figCaption, fragment, temp1, temp2;
fragment = document.createDocumentFragment();
temp1 = document.getElementById("template1");
temp2 = document.getElementById("template2");
(function show(a) {
    var clon = a.content.cloneNode(true);
    fragment.appendChild(clon);
    document.body.appendChild(fragment);
    figure = document.getElementsByTagName("figure");
    figure[0].addEventListener("click", function () {
        document.body.removeChild(figure[0]);
        if (a === temp1)
            show(temp2);
        else { show(temp1); }
    });
})(temp1);