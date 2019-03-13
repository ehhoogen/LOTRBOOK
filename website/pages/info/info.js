function insertAllContent() {
    styleBody(document.getElementById("body"));
    addElement(document.getElementById("body"), "header", 'header');
    addElement(document.getElementById("header"), "container", 'div');
    addNav(document.getElementById("container"));
    styleNav(document.getElementById("nav1"));
    addElement(document.getElementById("body"), "pageTitle", 'div');
    addElement(document.getElementById("body"), "mainDiv", 'div');
    addElement(document.getElementById("mainDiv"), "section", 'section');
    addElement(document.getElementById("mainDiv"), "section2", 'section');
    addElement(document.getElementById("mainDiv"), "section3", 'section');
    addElement(document.getElementById("section"), "title", 'div');
    addElement(document.getElementById("section2"), "title2", 'div');
    addElement(document.getElementById("section3"), "title3", 'div');
    addStyleMenu(document.getElementById("container"));
    styleStyleMenu(document.getElementById("drops"));
    styleSection(document.getElementById("section"), "25vw", "40px");
    styleSection(document.getElementById("section2"), "25vw", "40px");
    styleSection(document.getElementById("section3"), "25vw", "40px");
    styleDiv(document.getElementById("mainDiv"));
    addTextElement("pageTitle", "information", "Information");
    styleTitle(document.getElementById("pageTitle"));
    /////////////////////////////////////////////////////////////////////////////////
    let Publish = new Publisher("George Allen & Unwin", "1871", "British", "George Allen & Sons", "1917", "Australian", "Lord of the Rings");
    let Tolkien = new Author("J.R.R. Tolkien", "South-Africa", "England", "Died in 1972 at the age of 81", "The Hobbit");
    let FOTR = new LordOfTheRings("The Fellowship of the Ring", Tolkien.name, "Literature & Fiction", Publish.name, "432", "978-0547928210", "4,7/5", "Lord of the Rings");
    let TTT = new LordOfTheRings("The Two Towers", Tolkien.name, "Literature & Fiction", Publish.name, "352", "978-0547928203", "4,9/5", "Lord of the Rings");
    let ROTK = new LordOfTheRings("The Return of the King", Tolkien.name, "Literature & Fiction", Publish.name, "432", "978-0547928197", "4,8/5", "Lord of the Rings");
    ///////////////////////////////////////////////////////////////////////////////////
    addTextElement("title", "titletext", "Name: " + FOTR.name); //de titel node vertakt in 3 verschillende bomen (1 voor elk boek)
    addTextElement("titletext", "authortext", "Author: " + FOTR.author);                    // elk boek heeft zelf een lineare boom die steeds van 1 node vertakt naar 1 andere node
    addTextElement("authortext", "genretext", "Genre: " + FOTR.genre);
    addTextElement("genretext", "publishertext", "Publisher: " + FOTR.publisher);
    addTextElement("publishertext", "pagestext", "Number of pages: " + FOTR.pages);
    addTextElement("pagestext", "ISBNtext", "ISBN: " + FOTR.ISBN);
    addTextElement("ISBNtext", "ratingtext", "Average amazon rating: " + FOTR.rating);
    addTextElement("ratingtext", "serietext", "Book series: " + FOTR.series);
    addIMGElement("serietext", "img1", "../../img/lotr1.jpg", "Cover of the first book of the series: the Fellowship of Ring"); //probeer er een plaatje in te krijgen
    ////////////////////////////////////////////////////////////////////////////////////////
    addTextElement("serietext", "astart", "Author:");
    addTextElement("astart", "a0", "");
    addLinkElement("a0", "a01", Tolkien.name,"https://en.wikipedia.org/wiki/J._R._R._Tolkien");
    addTextElement("a0", "a1", "Born in " + Tolkien.bornnationality);
    addTextElement("a1","a2", "Lived in " + Tolkien.truenationality);
    addTextElement("a2", "a3", Tolkien.age);
    addTextElement("a3", "a4", "Most important work: " + Tolkien.mostimportantwork);
    ///////////////////////////////////////////////////////////////////////////////////////
    addTextElement("title2", "title2text", "Name: " + TTT.name);
    addTextElement("title2text", "author2text", "Author: " + TTT.author);
    addTextElement("author2text", "genre2text", "Genre: " + TTT.genre);
    addTextElement("genre2text", "publisher2text", "Publisher: " + TTT.publisher);
    addTextElement("publisher2text", "pages2text", "Number of pages: " + TTT.pages);
    addTextElement("pages2text", "ISBN2text", "ISBN: " + TTT.ISBN);
    addTextElement("ISBN2text", "rating2text", "Average amazon rating: " + TTT.rating);
    addTextElement("rating2text", "serie2text", "Book series: " + TTT.series);
    addIMGElement("rating2text", "img2", "../../img/lotr2.jpg","Cover of the second book of the series: The Two Towers");
    ///////////////////////////////////////////////////////////////////////////////////////
    addTextElement("img2", "pstart", "Publisher:");
    addTextElement("pstart", "p0", "");
    addLinkElement("p0", "p01", Publish.name,"https://en.wikipedia.org/wiki/Allen_%26_Unwin");
    addTextElement("p0", "p1", "Founded in: " + Publish.age);
    addTextElement("p1","p2", "Founded as: " + Publish.foundedname);
    addTextElement("p2", "p3", "Original nationality: " + Publish.foundednationality);
    addTextElement("p3", "p4", "Bought up in: " + Publish.merged);
    addTextElement("p4", "p5", "New nationality: " + Publish.newnationality);
    addTextElement("p5", "p6", "Most important work: " + Publish.mostimportantwork);
    /////////////////////////////////////////////////////////////////////////////////////
    addTextElement("title3", "title3text", "Name: " + ROTK.name);
    addTextElement("title3text", "author3text", "Author: " + ROTK.author);
    addTextElement("author3text", "genre3text", "Genre: " + ROTK.genre);
    addTextElement("genre3text", "publisher3text", "Publisher: " + ROTK.publisher);
    addTextElement("publisher3text", "pages3text", "Number of pages: " + ROTK.pages);
    addTextElement("pages3text", "ISBN3text", "ISBN: " + ROTK.ISBN);
    addTextElement("ISBN3text", "rating3text", "Average amazon rating: " + ROTK.rating);
    addTextElement("rating3text", "serie3text", "Book series: " + ROTK.series);
    addIMGElement("rating3text", "img3", "../../img/lotr3.jpg", "Cover of the third and final book of the series: The Return of the King");
    ////////////////////////////////////////////////////////////////////////////////////////////
    styleElement(document.getElementById("titletext"), "gold", "0%", "70%", "200%");
    styleElement(document.getElementById("authortext"), "gold", "0%", "40px", "75%");
    /////////////////////////////////////////////////////////////////////////////////////////////////
    styleElement(document.getElementById("astart"), "gold", "0%", "20%", "200%");
    styleElement(document.getElementById("a0"), "gold", "0%", "0%", "50%");
    styleElement(document.getElementById("a01"), "gold");
    ////////////////////////////////////////////////////////////////////////////////////////////////
    styleElement(document.getElementById("title2text"), "gold", "0%", "70%", "200%");
    styleElement(document.getElementById("author2text"), "gold", "0%", "40px", "75%");
    ////////////////////////////////////////////////////////////////////////////////////////////////
    styleElement(document.getElementById("pstart"), "gold", "0%", "14%", "200%");
    styleElement(document.getElementById("p0"), "gold", "0%", "0%", "50%");
    styleElement(document.getElementById("p01"), "gold");
    ////////////////////////////////////////////////////////////////////////////////////////////////
    styleElement(document.getElementById("title3text"), "gold", "0%", "70%", "200%");
    styleElement(document.getElementById("author3text"), "gold", "0%", "40px", "75%");
    /////////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("p01").addEventListener("click", alert);


}


class Book {
    constructor(name, author, genre, publisher, pages, ISBN, rating, series){
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
    constructor(name, bornnat, truenat, age, miw){
        this.name = name;
        this.bornnationality = bornnat;
        this.truenationality = truenat;
        this.age = age;
        this.mostimportantwork = miw;
        this.link = "https://en.wikipedia.org/wiki/J._R._R._Tolkien"
    }
}


class Publisher {
    constructor(name, age, fnat, fname, merged, newnat, miw){
            this.name = name;
            this.age = age;
            this.foundednationality = fnat;
            this.foundedname = fname;
            this.merged = merged;
            this.newnationality = newnat;
            this.mostimportantwork = miw;
            this.link = "https://en.wikipedia.org/wiki/Allen_%26_Unwin";

    }
}
function addNav (element) {
    var navigation = document.createElement('nav');
    navigation.id = "nav1";
    var names = ["Home", "Info", "Summary", "Characters", "Author", "Middle-Earth"];
    var links = ["../../index.html", "#", "../../summary.html", "../../characters.html", "../../author.html", "../../map.html"];
    for(let i = names.length; i > 0; i--) {
        var newContent = document.createTextNode(names[i-1]);
        var newLink = document.createElement("a");
        newLink.href = links[i-1];
        newLink.appendChild(newContent);
        navigation.appendChild(newLink);
    }
    element.appendChild(navigation);
}

function addIMGElement(id, newid, source, alt) {
    var newDiv = document.createElement("div");
    newDiv.id = newid;
    var newContent = document.createElement("img");
    newContent.src = source;
    newContent.setAttribute("height", "100%");
    newContent.setAttribute("width", "70%");
    newContent.setAttribute("alt", alt);
    newContent.border = "2px solid";
    newContent.marginTop = "10%";
    newDiv.appendChild(newContent);
    document.getElementById(id).appendChild(newDiv);
}

function addTextElement (id, newid, text) {
    // create a new div element
    var newDiv1 = document.createElement("p");
    // give the new div an id
    newDiv1.id = newid;
    // and give it some content
    var newContent = document.createTextNode(text);
    // add the text node to the newly created div
    newDiv1.appendChild(newContent);
    //
    document.getElementById(id).appendChild(newDiv1);

}

function addLinkElement (id, newid, text, link) {
    var newDiv = document.createElement('a');
    newDiv.id = newid;
    newDiv.href = link;
    newDiv.title = text;
    newDiv.target = "_blank";
    var newContent = document.createTextNode(text);
    newDiv.appendChild(newContent);
    document.getElementById(id).appendChild(newDiv);
}

function addStyleMenu(element){
    var newFirstElement = document.createElement('div');
    newFirstElement.id = "drops";
    element.insertBefore(newFirstElement, element.firstChild);
    var select1 = document.createElement('select');
    select1.id = "tselect";
    var select2 = document.createElement('select');
    select2.id = "cselect";
    newFirstElement.appendChild(select1);
    newFirstElement.appendChild(select2);
    var tekst1 = ["Select text", "Page", "Header", "Sections", "Articles", "Footer"];
    var values1 = ["body", "nav1,tselect,cselect", "section,section2,section3", "art1", "foot"];
    for(let i = 0; i < tekst1.length; i++){
        var option1 = document.createElement('option');
        option1.textContent = tekst1[i];
        if(i > 0){
            option1.value = values1[i-1];
        }
        select1.appendChild(option1);
    }
    var tekst2 = ["Text appearence", "Text Color:Blue", "Text Color:Red", "Text Color:Purple", "Text Color:White", "Font Size -10 px", "Font Size +10 px"];
    var values2 = ["Blue", "Red", "Purple", "White", "-10", "10"];
    for(let i = 0; i < tekst2.length; i++){
        var option2 = document.createElement('option');
        option2.textContent = tekst2[i];
        if(i > 0){
            option2.value = values2[i-1];
        }
        select2.appendChild(option2);
    }
}

function addElement(element, id, tagName){
    var div = document.createElement(tagName);
    div.id = id;
    element.appendChild(div);
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
    nav.style.marginTop = "-2.6%";
    nav.style.zIndex = "100";
    for(let i = 0; i < nav.childElementCount; i++){
        if(i === 1){
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
function styleElement (element, color, marginleft, margintop, fontsize, width, height) {
    element.style.color = color;
    element.style.marginLeft = marginleft;
    element.style.marginTop = margintop;
    element.style.fontSize = fontsize;
    element.style.width = width;
    element.style.height = height;
}
function styleDiv (element){
    element.style.position = "absolute";
    element.style.display = "flex";
    element.style.justifyContent = "space-around";
    element.style.zIndex = "-100";
}

function styleTitle (title){
    title.style.color = "gold";
    title.style.marginLeft = "38%";
    title.style.marginTop = "14%";
    title.style.fontSize = "70px";
    title.style.textShadow = "0.016em 0 black, 0 0.016em black, -0.016em 0 black, 0 -0.016em black";
}

function styleSection (section, width, padding) {
    section.style.width = width;
    section.style.padding = padding;
}

function styleStyleMenu (element){
    element.style.marginTop = "1.85%";
    element.style.marginLeft = "5%";
    var select1 = element.firstChild;
    var select2 = element.lastChild;
    select1.style.color = "white";
    select1.style.backgroundColor = "black";
    select1.style.marginLeft = "4px";
    select2.style.color = "white";
    select2.style.backgroundColor = "black";
    select2.style.marginLeft = "8px";
}
