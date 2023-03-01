var elements = document.querySelectorAll("body *");
for (let i = 0; i < elements.length; i++) {
    if (elements[i].nodeType != 3) {
        var span = document.createElement('span');
        span.innerHTML = elements[i].tagName;
        span.classList.add("hoverNode")
        elements[i].appendChild(span);
        span.addEventListener('click', (e) => {
            alert("the tag Name is: " + elements[i].tagName + " and the text is: " + elements[i].innerHTML );
        });
    }
};