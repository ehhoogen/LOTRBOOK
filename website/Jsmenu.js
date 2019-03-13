/*var save = document.getElementById("save");
if(save){
    save.addEventListener("click", colsel);
}
*/
document.getElementById("save").addEventListener("click", colsel);

function colsel()
{
    var a = document.getElementById("tselect").value;
    var appear = document.getElementById('cselect').value;
    var numb = parseInt(appear);
    console.log(a);
    var list = a.split(',');
    console.log(a);
    for (var j = 0; j < list.length; j++) {

        if(a==="body"){
            var all = document.getElementsByTagName("*");
        }
        else{
            var all = document.getElementById(list[j]).querySelectorAll("*");
        }

        for (let i = 0; i < all.length; i++) {
            all[i].style.color = appear;
        }

        for (let i = 0; i < all.length; i++) {
            var stylo = window.getComputedStyle(all[i], null).getPropertyValue('font-size');
            var currentSize = parseInt(stylo);
            all[i].style.fontSize = (currentSize+(numb/10)) + 'px';
        }
    }
}
