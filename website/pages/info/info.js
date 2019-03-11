function insertAllContent() {
    styleBody(document.getElementById("body"));
    addNav();
    styleNav(document.getElementById("nav1"));
    let theFellowshipOfTheRing = new LordOfTheRings("The Fellowship of the Ring", "J.R.R. Tolkien", "Literature & Fiction", "The Saul Zaentz Company", "432", "978-0547928210", "4,7/5", "Lord of the Rings");
    let theTwoTowers = new LordOfTheRings("The Two Towers", "J.R.R. Tolkien", "Literature & Fiction", "The Saul Zaentz Company", "352", "978-0547928203", "4,9/5", "Lord of the Rings");
    let theReturnOfTheKing = new LordOfTheRings("The Return of the King", "J.R.R. Tolkien", "Literature & Fiction", "The Saul Zaentz Company", "432", "978-0547928197", "4,8/5", "Lord of the Rings");
    /*addTextElement("title", "titletext", "Lord of the Rings: The Fellowship of the Ring"); //de titel node vertakt in 3 verschillende bomen (1 voor elk boek)
    addTextElement("titletext", "authortext", "Author: J.R.R. Tolkien");                    // elk boek heeft zelf een lineare boom die steeds van 1 node vertakt naar 1 andere node
    addTextElement("authortext", "genretext", "Genre: Literature & Fiction");
    addTextElement("genretext", "publishertext", "Publisher: The Saul Zaentz Company");
    addTextElement("publishertext", "pagestext", "Number of pages: 432");
    addTextElement("pagestext", "ISBMtext", "ISBM: 978-0547928210");
    addTextElement("ISBMtext", "ratingtext", "Average Amazon rating: 4,7/5");
    addIMGElement("ratingtext", "img1", "../../img/slider1.jpg"); //probeer er een plaatje in te krijgen
    ////////////////////////////////////////////////////////////////////////////////////////
    addTextElement("title", "title2text", "Lord of the Rings: The Two Towers");
    addTextElement("title2text", "author2text", "Author: J.R.R. Tolkien");
    addTextElement("author2text", "genre2text", "Genre: Literature & Fiction");
    addTextElement("genre2text", "publisher2text", "Publisher: The Saul Zaentz Company");
    addTextElement("publisher2text", "pages2text", "Number of pages: 352");
    addTextElement("pages2text", "ISBM2text", "ISBM: 978-0547928203");
    addTextElement("ISBM2text", "rating2text", "Average Amazon rating: 4,9/5");
    /////////////////////////////////////////////////////////////////////////////////////
    addTextElement("title", "title3text", "Lord of the Rings: The Return of the King");
    addTextElement("title3text", "author3text", "Author: J.R.R. Tolkien");
    addTextElement("author3text", "genre3text", "Genre: Literature & Fiction");
    addTextElement("genre3text", "publisher3text", "Publisher: The Saul Zaentz Company");
    addTextElement("publisher3text", "pages3text", "Number of pages: 432");
    addTextElement("pages3text", "ISBM3text", "ISBM: 978-0547928197");
    addTextElement("ISBM3text", "rating3text", "Average Amazon rating: 4,8/5");
    ////////////////////////////////////////////////////////////////////////////////////////////
    styleElement(document.getElementById("titletext"), "gold", "0%", "0px", "35px", "rgb(0,0,0,0.0)", "66%");
    styleElement(document.getElementById("authortext"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.2)");
    styleElement(document.getElementById("genretext"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.2)");
    styleElement(document.getElementById("publishertext"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.2)");
    styleElement(document.getElementById("pagestext"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.2)");
    styleElement(document.getElementById("ISBMtext"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.2)");
    styleElement(document.getElementById("ratingtext"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.2)");
    /////////////////////////////////////////////////////////////////////////////////////////////////
    styleElement(document.getElementById("title2text"), "gold", "33%", "0px", "35px", "rgb(0,0,0,0.0)", "33%");
    styleElement(document.getElementById("author2text"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.2)", );
    styleElement(document.getElementById("genre2text"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.2)",);
    styleElement(document.getElementById("publisher2text"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.2)",);
    styleElement(document.getElementById("pages2text"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.2)",);
    styleElement(document.getElementById("ISBM2text"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.2)",);
    styleElement(document.getElementById("rating2text"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.2)");
    ////////////////////////////////////////////////////////////////////////////////////////////////
    styleElement(document.getElementById("title3text"), "gold", "66%", "0px", "35px", "rgb(0,0,0,0.0)", "0%");
    styleElement(document.getElementById("author3text"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.2)", );
    styleElement(document.getElementById("genre3text"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.2)",);
    styleElement(document.getElementById("publisher3text"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.2)",);
    styleElement(document.getElementById("pages3text"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.2)",);
    styleElement(document.getElementById("ISBM3text"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.2)",);
    styleElement(document.getElementById("rating3text"), "gold", "0%", "40px", "25px", "rgb(0,0,0,0.2)");*/
    //////////////////////////////////////////////////////////////////////////////////////////////////

}

class Book {
    constructor(name, author, genre, publisher, pages, ISBN, rating){
        this.name = name;
        this.author = author;
        this.genre = genre;
        this.publisher = publisher;
        this.pages = pages;
        this.ISBN = ISBN;
        this.rating = rating;
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
        this.series = series;
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

function addIMGElement(id, newid, source) {                                //dit is mijn pging tot het bouwen van een functie die een imgnode maakt
    var newDiv = document.createElement("div");                   // gaat alleen niet helemaal goed, maar weet niet wat er fout gaat helaas
    newDiv.id = newid;
    var newContent = document.createElement("img");
    newContent.src = source;
    newContent.setAttribute("height", "100%");
    newContent.setAttribute("width", "100%");
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

