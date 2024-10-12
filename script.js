    //* Selecting elements using DOM
    
    //& getElementById()
    // let msg = document.getElementById("message")
    // console.log(msg)


    //& getElementsByName()
    // let btn = document.getElementsByName("language")
    // console.log(btn)


    //& getElementsByTagName()
    // let heading = document.getElementsByTagName("h1")
    // console.log(heading)


    //& getElementsByClassName()
    // let msg = document.getElementsByClassName("message")

    // let cont = document.getElementById("container")
    // let msg = cont.getElementsByClassName("message")
    // console.log(msg)


    //& querySelector() And querySelectorAll()
    //let msg = document.querySelector(".message")
    //console.log(msg);

    // let msg = document.querySelectorAll(".message")
    // console.log(msg);

    // Using elements:
    // let cont = document.getElementById("container")
    // let msg = cont.querySelector(".message")
    // let msg = cont.querySelectorAll(".message")
    // console.log(msg)

    // For accessing elements with ID:
    // let msg = document.querySelectorAll("#container")
    // let msg = document.querySelector("#container")
    // console.log(msg)

    // For accessing elements directly:
    // let msg = document.querySelectorAll("div")
    // let msg = document.querySelectorAll("div, h1")
    // console.log(msg)




    // * TRAVERSING ELEMENTS *
    // & To get the parent node of a specified node in the DOM tree, we can use the 'parentNode' property. 

    // let txt = document.querySelector(".text")
    // console.log(txt.parentNode)



    // * Selecting Child Elements *
    // & We will learn about how to get the 'firstChild' element, 'lastChild' element and 'all children' of the specified element.

    //let parent = document.querySelector(".title")
    //console.log(parent.firstChild)          // #text

    //console.log(parent.firstElementChild)  // <p>Welcome to GreatStack 1</p> 

    //console.log(parent.lastElementChild)  // <p>Welcome to GreatStack 4</p> 

    //console.log(parent.childNodes)  // NodeList(9) [text, p, ........4]



     // * Selecting Next Siblings and Previous Siblings of an element *

     //let second = document.querySelector(".second");
     //console.log(second.previousElementSibling)    //Previous Sibling of Second element -->> // <p>Welcome to GreatStack 1</p>

     //console.log(second.nextElementSibling)       //Next Sibling of Second element -->> // <p>Welcome to GreatStack 3</p>




    // * MANIPULATING HTML ELEMENTS *
    // * 1. createElement() method

    let div = document.createElement("div");
    div.innerHTML = "<p>Hello</p>"
    console.log(div)

    // inserting newly created div element to the web page
    document.body.appendChild(div)

    // adding Id's and ClassNames  to the newly created div element.
    div.id = "title"
    div.className = "title"










