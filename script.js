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

    // let div = document.createElement("div");
    // div.innerHTML = "<p>Hello</p>"
    // console.log(div)

    // // inserting newly created div element to the web page
    // document.body.appendChild(div)

    // // adding Id's and ClassNames  to the newly created div element.
    // div.id = "title"
    // div.className = "title"


    
    // * 2. appendChild() method

    // let menu = document.getElementById("menu");

    // let list = document.createElement("li");
    // list.innerHTML = "Contact";

    // menu.appendChild(list)



    // * textContent & innerText Property:

    //let menu = document.getElementById("menu");

    //console.log(menu.textContent)

    //console.log(menu.innerText)

    // Note:-> will show all the elements on the console even if 
   // they are hidden using the css. Though they'll stay hidden 
   // on the webpage. 

   //menu.textContent = "Hello!"   // this will remove all the 'li' elements from the 
                                   //  menu and add the 'Hello!' text on the webpage.
                                   //  But not on the console. 
   


    // * innerHTML proprty:

    // let menu = document.getElementById("menu");

    //menu.innerHTML = "Hello!";          
    //menu.innerHTML = "<h1>Hello!</h1>";      // innerHTML is able to add text in tags.
                                            // innerHTML renders the HTML tags if found

    //menu.textContent = "<h1>Hello!</h1>";      // output on the webpage: <h1>Hello!</h1>
                                              // textContent does not render the HTML tags
                                              // they display them as it is.


    // * after() Method:

    // we can use after() method to insert one or more
    // nodes after the element.

    // accepts multiple nodes/elements/strings -> we can insert multiple
    //  nodes/elements/strings to the parent node

    // like this -> menu.after(node1, node2, ... node N)
    // or
    // menu.after(str1, str2, ... str N)

    // let menu = document.getElementById("menu");
    
    // let newLi1 = document.createElement("li");
    // let newLi2 = document.createElement("li");
    
    // newLi1.innerHTML = "Portfolio";
    // newLi2.innerHTML = "Us";
    // menu.after(newLi1, newLi2);

    // let str1 = "Zenny";
    // let str2 = "Goku";
    // menu.after(str1, str2);



    //* append() Method:    --> similar to appendChild()
    // In summary, append() is generally more versatile than appendChild() because it 
    // allows for adding multiple nodes and strings simultaneously, while appendChild() 
    // is stricter and can only work with single nodes.

    // In appendChild(): If you try to pass a string, it will throw an error.

    // const parent = document.getElementById("parent");
    // const child1 = document.createElement("div");
    // const child2 = "Hello World!";
    // parent.append(child1, child2);




    //* prepend() method:
    // The prepend() method in JavaScript inserts content at the beginning of a 
    // parent element. It allows adding multiple nodes or strings directly:

    // Key Features:
    // 1. Adds at the Start: Unlike append(), which adds to the end, prepend() inserts at the start.
    // 2. Multiple Arguments: Can insert multiple elements or text in one call.
    // 3. Text Support: Allows direct text insertion without creating a text node.
    // 4. No Return Value: Returns undefined.

    // Example: 
    //const parent = document.getElementById("parent");
    //const child = document.createElement("li");
    //child.textContent = "Prepended";
    //parent.prepend(child, " - Text - ");



    












