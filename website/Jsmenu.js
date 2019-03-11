function colsel()
{
    a=document.getElementById("tselect").value;
    var appear = document.getElementById('cselect').value;
    numb=parseInt(appear);
    var list=a.split(',');
    for (var j=0;j<list.length;j++) {
        var all = document.getElementById(list[j]).querySelectorAll("*");

        for (var i = 0, max = all.length; i < max; i++) {
            all[i].style.color = appear;
        }

        for (var i = 0, max = all.length; i < max; i++) {
            stylo = window.getComputedStyle(all[i], null).getPropertyValue('font-size');
            currentSize = parseInt(stylo);
            all[i].style.fontSize = (currentSize+numb) + 'px';
        }
        /*if (list.length<=1){
            var all = document.getElementById(list[0]);
            all.style.color = appear;
            stylo = window.getComputedStyle(all, null).getPropertyValue('font-size');
            currentSize = parseInt(stylo);
            all.style.fontSize = (currentSize+numb) + 'px';
        }*/

    }
}