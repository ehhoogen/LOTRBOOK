function insertAllContent() {
    styleBody(document.getElementById("body"));
    addNav();
    styleNav(document.getElementById("nav1"));
    let FOTR = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", "Literature & Fiction", "The Saul Zaentz Company", "432", "978-0547928210", "4,7/5", "Lord of the Rings");
    let TTT = new Book("The Two Towers", "J.R.R. Tolkien", "Literature & Fiction", "The Saul Zaentz Company", "352", "978-0547928203", "4,9/5", "Lord of the Rings");
    let ROTK = new Book("The Return of the King", "J.R.R. Tolkien", "Literature & Fiction", "The Saul Zaentz Company", "432", "978-0547928197", "4,8/5", "Lord of the Rings");
    ///////////////////////////////////////////////////////////////////////////////////
    addTextElement("title", "titletext", FOTR.name); //de titel node vertakt in 3 verschillende bomen (1 voor elk boek)
    addTextElement("titletext", "authortext", FOTR.author);                    // elk boek heeft zelf een lineare boom die steeds van 1 node vertakt naar 1 andere node
    addTextElement("authortext", "genretext", FOTR.genre);
    addTextElement("genretext", "publishertext", FOTR.publisher);
    addTextElement("publishertext", "pagestext", FOTR.pages);
    addTextElement("pagestext", "ISBMtext", FOTR.ISBN);
    addTextElement("ISBMtext", "ratingtext", FOTR.rating);
    addTextElement("ratingtext", "serietext", FOTR.series);
    addIMGElement("serietext", "img1", "../../img/slider1.jpg");
    ////////////////////////////////////////////////////////////////////////////////////////
    addTextElement("title", "title2text", TTT.name);
    addTextElement("title2text", "author2text", TTT.author);
    addTextElement("author2text", "genre2text", TTT.genre);
    addTextElement("genre2text", "publisher2text", TTT.publisher);
    addTextElement("publisher2text", "pages2text", TTT.pages);
    addTextElement("pages2text", "ISBM2text", TTT.ISBN);
    addTextElement("ISBM2text", "rating2text", TTT.rating);
    addTextElement("rating2text", "serie2text", TTT.series);
    addIMGElement("serie2text", "img2", "../../img/slider2.jpg");
    /////////////////////////////////////////////////////////////////////////////////////
    addTextElement("title", "title3text", ROTK.name);
    addTextElement("title3text", "author3text", ROTK.author);
    addTextElement("author3text", "genre3text", ROTK.genre);
    addTextElement("genre3text", "publisher3text", ROTK.publisher);
    addTextElement("publisher3text", "pages3text", ROTK.pages);
    addTextElement("pages3text", "ISBM3text", ROTK.ISBN);
    addTextElement("ISBM3text", "rating3text", ROTK.rating);
    addTextElement("rating3text", "serie3text", ROTK.series);
    addIMGElement("serie3text", "img3", "../../img/slider3.jpg");
    ////////////////////////////////////////////////////////////////////////////////////////////
    styleElement(document.getElementById("titletext"), "gold", "0%", "0px", "35px", "rgb(0,0,0,0.2)", "66%");
    styleElement(document.getElementById("authortext"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.0)");
    styleElement(document.getElementById("genretext"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.0)");
    styleElement(document.getElementById("publishertext"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.0)");
    styleElement(document.getElementById("pagestext"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.0)");
    styleElement(document.getElementById("ISBMtext"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.0)");
    styleElement(document.getElementById("ratingtext"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.0)");
    styleElement(document.getElementById("serietext"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.0)");
    /////////////////////////////////////////////////////////////////////////////////////////////////
    styleElement(document.getElementById("title2text"), "gold", "33%", "0px", "35px", "rgb(0,0,0,0.2)", "33%");
    styleElement(document.getElementById("author2text"), "gold", "0%", "40px", "25px" );
    styleElement(document.getElementById("genre2text"), "gold", "0%", "40px", "25px");
    styleElement(document.getElementById("publisher2text"), "gold", "0%", "40px", "25px");
    styleElement(document.getElementById("pages2text"), "gold", "0%", "40px", "25px");
    styleElement(document.getElementById("ISBM2text"), "gold", "0%", "40px", "25px");
    styleElement(document.getElementById("rating2text"), "gold", "0%", "40px", "25px");
    styleElement(document.getElementById("serie2text"), "gold", "0%", "40px", "25px" );
    ////////////////////////////////////////////////////////////////////////////////////////////////
    styleElement(document.getElementById("title3text"), "gold", "66%", "0px", "35px", "rgb(0,0,0,0.2)", "0%");
    styleElement(document.getElementById("author3text"), "gold", "0%", "40px", "25px");
    styleElement(document.getElementById("genre3text"), "gold", "0%", "40px", "25px");
    styleElement(document.getElementById("publisher3text"), "gold", "0%", "40px", "25px");
    styleElement(document.getElementById("pages3text"), "gold", "0%", "40px", "25px");
    styleElement(document.getElementById("ISBM3text"), "gold", "0%", "40px", "25px");
    styleElement(document.getElementById("serie3text"), "gold", "0%", "40px", "25px");
    styleElement(document.getElementById("rating3text"), "gold", "0%", "40px", "25px");
    //////////////////////////////////////////////////////////////////////////////////////////////////


}

/*class Book {

    constructor(name, author, pages){
        this.name = name;
        this.author = author;
        this.pages = pages;
    }
    talk()
    {
        window.alert("weyo");
    }
}

class LordOfTheRings extends Book{
    constructor(name, author, pages){
        super(name);
        super(author);
        super(pages);
    }
}
*/

class Book {
    constructor(name, author, genre, publisher, pages, ISBN, rating, series){
        this.name = name;
        this.author = author;
        this.genre = genre;
        this.publisher = publisher;
        this.ISBN = ISBN;
        this.rating = rating;
        this.pages = pages;
        this.series = series;
    }
}

class LordOfTheRings extends Book{
    constructor(name, author, genre, publisher, pages, ISBN, rating, series){
        super(name);
        super(author);
        super(genre);
        super(publisher);
        super(pages);
        super(ISBN);
        super(rating);
        this._series = series;
    }
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

function addIMGElement(id, newid, source) {
    var newDiv = document.createElement("div");
    newDiv.id = newid;
    var newContent = document.createElement("img");
    newContent.src = source;
    newContent.setAttribute("height", "100%");
    newContent.setAttribute("width", "70%");
    newContent.setAttribute("marginLeft", "20%");
    newContent.setAttribute("alt", "this image is not loaded correctly")
    newDiv.appendChild(newContent);
    document.getElementById(id).appendChild(newDiv);
}

function addTextElement (id, newid, text) {
    // create a new div element
    var newDiv = document.createElement("div");
    // give the new div an id
    newDiv.id = newid;
    // and give it some content
    var newContent = document.createTextNode(text);
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    //
    document.getElementById(id).appendChild(newDiv);

}

function styleBody(body){
    body.style.width = "98vw";
    body.style.height = "100vh";
    body.style.backgroundColor = "black";
    body.style.backgroundImage = "url('../../img/background.jpg')";
    body.style.backgroundPosition = "0 -70px";
    body.style.backgroundSize = "100%";
    body.style.backgroundRepeat = "no-repeat";
}


function styleNav(nav){
    nav.style.width = "97.85vw";
    nav.style.height = "7.1vh";
    nav.style.backgroundColor = "rgba(160, 160, 160, 0.5)";
    nav.style.float = "left";
    for(let i = 1; i <= nav.childElementCount; i++){
        nav.childNodes[i].style.float = "right";
        nav.childNodes[i].style.textAlign = "center";
        nav.childNodes[i].style.fontSize = "16px";
        nav.childNodes[i].style.margin = "4.7vh 2.97vw 0 3.15vw";
        nav.childNodes[i].style.color = "black";
        nav.childNodes[i].style.textDecoration = "none";
        nav.childNodes[i].style.textTransform = "uppercase";
        nav.childNodes[i].addEventListener("mouseover", function() { nav.childNodes[i].style.color = "white"; });
        nav.childNodes[i].addEventListener("mouseout", function() { nav.childNodes[i].style.color = "black"; });
    }
}
function styleElement (element, color, marginleft, margintop, fontsize,rgba, marginright) {
    element.style.color = color;
    element.style.marginLeft = marginleft;
    element.style.marginTop = margintop;
    element.style.fontSize = fontsize;
    element.style.backgroundColor = rgba;
    element.style.marginRight = marginright;
}

