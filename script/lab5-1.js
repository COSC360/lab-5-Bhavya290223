document.getElementById("mainForm").onsubmit = function (e) {
    const fields = document.getElementsByClassName("required");
    for (let i = 0; i < fields.length; i++) {
        fields[i].addEventListener('change', (event) => {
            fields[i].classList.remove("highlight");
        });

        if (fields[i].value == null || fields[i].value == "") {
            e.preventDefault();
            fields[i].classList.add("highlight");
            alert("Form is incomplete!");
        }
    
        if (fields[i].type=="checkbox"){
            if (!fields[i].checked) {
                fields[i].parentElement.classList.add("highlight");
                alert("Please accept the license!");
            } 
        }
    }
}

