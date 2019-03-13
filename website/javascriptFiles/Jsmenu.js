function onload() {
    document.getElementById("save").addEventListener("click", colsel);
}

function colsel() {
    var a = document.getElementById("tselect").value;
    var appear = document.getElementById('cselect').value;
    var numb = parseInt(appear);
    // The selected id's will be put into a list. var a is a string with id's and comma's in between them
    var list = a.split(',');
    console.log(a);
    for (var j = 0; j < list.length; j++) {

        if (a === "body") {//Here every element of the page gets selected and changed with the selected change
            var all = document.getElementsByTagName("*");
        } else {
            var all = document.getElementById(list[j]).querySelectorAll("*");
        }

        for (let i = 0; i < all.length; i++) {
            all[i].style.color = appear;
        }

        for (let i = 0; i < all.length; i++) {//Here the selected part of the page, in the dropdown menu, changed with the selected change
            var stylo = window.getComputedStyle(all[i], null).getPropertyValue('font-size');
            var currentSize = parseInt(stylo);
            all[i].style.fontSize = (currentSize + (numb / 10)) + 'px';
        }
    }
}
