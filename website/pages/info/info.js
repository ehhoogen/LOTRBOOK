function insertAllContent() {
    styleBody(document.getElementById("body"));
    addNav();
    styleNav(document.getElementById("nav1"));
    styleSection(document.getElementById("section"), "25vw", "40px");
    styleSection(document.getElementById("section2"), "25vw", "40px");
    styleSection(document.getElementById("section3"), "25vw", "40px");
    styleDiv(document.getElementById("mainDiv"));
    let tolkien = new Author("J.R.R. Tolkien");
    let theFellowshipOfTheRing = new LordOfTheRings("The Fellowship of the Ring", tolkien.name, "Literature & Fiction", "The Saul Zaentz Company", "432", "978-0547928210", "4,7/5", "Lord of the Rings");
    let theTwoTowers = new LordOfTheRings("The Two Towers", tolkien.name, "Literature & Fiction", "The Saul Zaentz Company", "352", "978-0547928203", "4,9/5", "Lord of the Rings");
    let theReturnOfTheKing = new LordOfTheRings("The Return of the King", tolkien.name, "Literature & Fiction", "The Saul Zaentz Company", "432", "978-0547928197", "4,8/5", "Lord of the Rings");
    let FOTR = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", "Literature & Fiction", "The Saul Zaentz Company", "432", "978-0547928210", "4,7/5");
    let TTT = new Book("The Two Towers", "J.R.R. Tolkien", "Literature & Fiction", "The Saul Zaentz Company", "352", "978-0547928203", "4,9/5");
    let ROTK = new Book("The Return of the King", "J.R.R. Tolkien", "Literature & Fiction", "The Saul Zaentz Company", "432", "978-0547928197", "4,8/5");
    ///////////////////////////////////////////////////////////////////////////////////
    addTextElement("title", "titletext", "Name: " + FOTR.name); //de titel node vertakt in 3 verschillende bomen (1 voor elk boek)
    addTextElement("titletext", "authortext", "Author: " + FOTR.author);                    // elk boek heeft zelf een lineare boom die steeds van 1 node vertakt naar 1 andere node
    addTextElement("authortext", "genretext", "Genre: " + FOTR.genre);
    addTextElement("genretext", "publishertext", "Publisher: " + FOTR.publisher);
    addTextElement("publishertext", "pagestext", "Number of pages: " + FOTR.pages);
    addTextElement("pagestext", "ISBNtext", "ISBN: " + FOTR.ISBN);
    addTextElement("ISBNtext", "ratingtext", "Average amazon rating: " + FOTR.rating);
    //addTextElement("ratingtext", "serietext", FOTR.series);
    addIMGElement("ratingtext", "img1", "../../img/slider1.jpg"); //probeer er een plaatje in te krijgen
    ////////////////////////////////////////////////////////////////////////////////////////
    addTextElement("title2", "title2text", "Name: " + TTT.name);
    addTextElement("title2text", "author2text", "Author: " + TTT.author);
    addTextElement("author2text", "genre2text", "Genre: " + TTT.genre);
    addTextElement("genre2text", "publisher2text", "Publisher: " + TTT.publisher);
    addTextElement("publisher2text", "pages2text", "Number of pages: " + TTT.pages);
    addTextElement("pages2text", "ISBN2text", "ISBN: " + TTT.ISBN);
    addTextElement("ISBN2text", "rating2text", "Average amazon rating: " + TTT.rating);
    //addTextElement("rating2text", "serie2text", TTT.series);
    addIMGElement("rating2text", "img2", "../../img/slider2.jpg");
    /////////////////////////////////////////////////////////////////////////////////////
    addTextElement("title3", "title3text", "Name: " + ROTK.name);
    addTextElement("title3text", "author3text", "Author: " + ROTK.author);
    addTextElement("author3text", "genre3text", "Genre: " + ROTK.genre);
    addTextElement("genre3text", "publisher3text", "Publisher: " + ROTK.publisher);
    addTextElement("publisher3text", "pages3text", "Number of pages: " + ROTK.pages);
    addTextElement("pages3text", "ISBN3text", "ISBN: " + ROTK.ISBN);
    addTextElement("ISBN3text", "rating3text", "Average amazon rating: " + ROTK.rating);
    //addTextElement("rating3text", "serie3text", ROTK.series);
    addIMGElement("rating3text", "img3", "../../img/slider3.jpg");
    ////////////////////////////////////////////////////////////////////////////////////////////
    styleElement(document.getElementById("titletext"), "gold", "0%", "150%", "200%");
    styleElement(document.getElementById("authortext"), "gold", "0%", "40px", "75%");
    /////////////////////////////////////////////////////////////////////////////////////////////////
    styleElement(document.getElementById("title2text"), "gold", "0%", "150%", "200%");
    styleElement(document.getElementById("author2text"), "gold", "0%", "40px", "75%");
    ////////////////////////////////////////////////////////////////////////////////////////////////
    styleElement(document.getElementById("title3text"), "gold", "0%", "150%", "200%");
    styleElement(document.getElementById("author3text"), "gold", "0%", "40px", "75%");
    //////////////////////////////////////////////////////////////////////////////////////////////////

}

class Book {
    constructor(name, author, genre, publisher, pages, ISBN, rating){
        this.name = name;
        this.author = author;
        this.genre = genre;
        this.publisher = publisher;
        this.ISBN = ISBN;
        this.rating = rating;
        this.pages = pages;
    }
}

class LordOfTheRings extends Book{
    constructor(name, author, genre, publisher, pages, ISBN, rating, series){
        super(name, author, genre, publisher, pages, ISBN, rating);
        this.series = series;
    }
}

class Author {
    constructor(name){
        this.name = name;
    }
}

function addNav () {
    var names = ["Home", "Info", "Summary", "Characters", "Author", "Middle-Earth"];
    var links = ["../../index.html", "#", "../../summary.html", "../../characters.html", "../../author.html", "../../map.html"];
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
    var newDiv = document.createElement("p");
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
    nav.style.marginTop = "0";
    for(let i = 1; i <= nav.childElementCount; i++){
        if(i == 1){
            nav.childNodes[i].style.float = "right";
            nav.childNodes[i].style.textAlign = "center";
            nav.childNodes[i].style.fontSize = "16px";
            nav.childNodes[i].style.margin = "4.7vh 8vw 0 3.15vw";
            nav.childNodes[i].style.color = "black";
            nav.childNodes[i].style.textDecoration = "none";
            nav.childNodes[i].style.textTransform = "uppercase";
            nav.childNodes[i].addEventListener("mouseover", function() { nav.childNodes[i].style.color = "white"; });
            nav.childNodes[i].addEventListener("mouseout", function() { nav.childNodes[i].style.color = "black"; });
        }
        else{
            nav.childNodes[i].style.float = "right";
            nav.childNodes[i].style.textAlign = "center";
            nav.childNodes[i].style.fontSize = "16px";
            nav.childNodes[i].style.margin = "4.7vh 3vw 0 3.4vw";
            nav.childNodes[i].style.color = "black";
            nav.childNodes[i].style.textDecoration = "none";
            nav.childNodes[i].style.textTransform = "uppercase";
            nav.childNodes[i].addEventListener("mouseover", function() { nav.childNodes[i].style.color = "white"; });
            nav.childNodes[i].addEventListener("mouseout", function() { nav.childNodes[i].style.color = "black"; });
        }
    }
}
function styleElement (element, color, marginleft, margintop, fontsize, marginright) {
    element.style.color = color;
    element.style.marginLeft = marginleft;
    element.style.marginTop = margintop;
    element.style.fontSize = fontsize;
    element.style.marginRight = marginright;
}

function styleDiv (element){
    element.style.position = "absolute";
    element.style.display = "flex";
    element.style.justifyContent = "space-around";
}

function styleSection (section, width, padding) {
    section.style.width = width;
    section.style.padding = padding;
}
