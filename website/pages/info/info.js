function insertAllContent() {
    styleBody(document.getElementById("body"));
    addNav();
    styleNav(document.getElementById("nav1"));
    addTextElement("author", "authortext", "Author: J.R.R. Tolkien");
    addTextElement("div2");
    styleElement(document.getElementById("author"), "gold", "50%", "30px", "50px");
    styleElement(document.getElementById("div2"), "blue", "400px", "60px", "20px");

}

function addNav () {
    var names = ["Home", "Info", "Summary", "Characters", "Author", "Middle-Earth"];
    var links = ["../../home.html", "#", "../../summary.html", "../../characters.html", "../../author.html", "../../map.html"];


    for(let i = names.length; i > 0; i--) {
        var newContent = document.createTextNode(names[i-1]);
        var newLink = document.createElement("a");
        newLink.href = links[i-1];
        newLink.appendChild(newContent);
        document.getElementById("nav1").appendChild(newLink);
    }
}

function addTextElement (id, newid, text) {
    // create a new div element
    var newDiv = document.createElement("div");
    // give the new div an id
    newDiv.id = newid
    // and give it some content
    var newContent = document.createTextNode(text);
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    //
    document.getElementById(id).appendChild(newDiv);

}

function styleBody(body){
    body.style.width = "100%";
    body.style.height = "100vh";
    body.style.backgroundImage = "url('../../img/background.jpg')";
    body.style.backgroundPosition = "0 -70px";
    body.style.backgroundSize = "100%";
    body.style.backgroundRepeat = "no-repeat";
}


function styleNav(nav){
    nav.style.width = "1503px";
    nav.style.height = "53px";
    nav.style.backgroundColor = "rgba(160, 160, 160, 0.5)";
    nav.style.float = "left";
    for(let i = 1; i <= nav.childElementCount; i++){
        nav.childNodes[i].style.float = "right";
        nav.childNodes[i].style.textAlign = "center";
        nav.childNodes[i].style.padding = "15px 45px 0 50px";
        nav.childNodes[i].style.fontSize = "16px";
        nav.childNodes[i].style.marginTop = "20px";
        nav.childNodes[i].style.color = "black";
        nav.childNodes[i].style.textDecoration = "none";
        nav.childNodes[i].style.textTransform = "uppercase";
        nav.childNodes[i].addEventListener("mouseover", function() { nav.childNodes[i].style.color = "white"; });
        nav.childNodes[i].addEventListener("mouseout", function() { nav.childNodes[i].style.color = "black"; });
    }
}

function styleElement (element, color, marginleft, margintop, fontsize) {
    element.style.color = color;
    element.style.marginLeft = marginleft;
    element.style.marginTop = margintop;
    element.style.fontSize = fontsize;
}
