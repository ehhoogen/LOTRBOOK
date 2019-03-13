/*var save = document.getElementById("save");
if(save){
    save.addEventListener("click", colsel);
}
*/
function onload() {
    document.getElementById("save").addEventListener("click", colsel);
}

function colsel() {
    var a = document.getElementById("tselect").value;
    var appear = document.getElementById('cselect').value;
    var numb = parseInt(appear);
    /* de geselcteerde id's worden in een lijst gezet. var a is een string met id's en spaties ertussen*/
    var list = a.split(',');
    console.log(a);
    for (var j = 0; j < list.length; j++) {

        if (a === "body") {/*hier wordt elk element van de page geselecteerd en veranderd door de geselecteerde verandering*/
            var all = document.getElementsByTagName("*");
        } else {
            var all = document.getElementById(list[j]).querySelectorAll("*");
        }

        for (let i = 0; i < all.length; i++) {
            all[i].style.color = appear;
        }

        for (let i = 0; i < all.length; i++) {/*hier wordt het geselecteerde deel die in het dropdown menu geselcteerd is, veranderd door de geselecteerde verandering*/
            var stylo = window.getComputedStyle(all[i], null).getPropertyValue('font-size');
            var currentSize = parseInt(stylo);
            all[i].style.fontSize = (currentSize + (numb / 10)) + 'px';
        }
    }
}