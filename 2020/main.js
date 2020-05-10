var FAQs = document.getElementsByClassName("FAQButton");
var i;

for (i = 0; i < FAQs.length; i++) {
    FAQs[i].addEventListener("click", changeVisibility);
}

function changeVisibility() {
    var info = this.nextElementSibling;
    if (info.style.maxHeight) {
        info.style.maxHeight = null;
    } else {
        info.style.maxHeight = info.scrollHeight + "px";
    }
}