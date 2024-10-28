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

//* insertAdjacentHTML() method:
//* syntax: element.insertAdjacentHTML("positionName", "element")

// let menu = document.getElementById("menu");

// menu.insertAdjacentHTML("afterbegin", "<li>Contact</li>" )
// menu.insertAdjacentHTML("beforeend", "<li>Contact</li>" )
// menu.insertAdjacentHTML("beforebegin", "<li>Contact</li>" )
// menu.insertAdjacentHTML("afterend", "<li>Contact</li>" )

//* replaceChild() method:
//* syntax: element.replaceChild(newChild, oldChild)

// use to replace old child with a new one!

// let menu = document.getElementById('menu');
// let projectLi = document.getElementById('project');

// let li = document.createElement('li');
// li.innerHTML = 'Soon';

// menu.replaceChild(li, projectLi);

//* replaceChild() method:
//* syntax: element.replaceChild(newChild, oldChild)

// use to clone the old node!

// let menu = document.getElementById('menu');

// let newNode = menu.cloneNode(true);
// let newNode = menu.cloneNode('menu');
// console.log(newNode);

// document.body.appendChild(newNode)

//* removeChild() method:
//* Use to remove the child element of a node we can use removeChild() method

//* syntax: parentNode.removeChild(childNode);

//let menu = document.getElementById('menu');

//menu.removeChild(menu.lastElementChild);    // will remove the 'project' from the list
//menu.removeChild(menu.firstElementChild);    // will remove the 'Home' from the list

//* insertBefore() method:
//* Use insertBefore() method to insert a new node before an exisiting node as a child node a parent node.

//* syntax: parentNode.insertBefore(newNode, existingNode);

// let menu = document.getElementById('menu');
// let li = document.createElement("li");
// li.innerHTML = "Hackathon"
// menu.insertBefore(li, menu.firstElementChild)

//* ATTRIBUTES METHODS

// let inputBox = document.getElementById("username")
// console.log(inputBox.attributes)

//* 1. getAttribute() method

//console.log(inputBox.getAttribute("placeholder"))
//console.log(inputBox.getAttribute("type"))

//* 2. setAttribute() method

// let inputBox = document.getElementById('username');

// inputBox.setAttribute('name', 'username');
// inputBox.setAttribute('class', 'user');

// console.log(inputBox.attributes)
// console.log(inputBox.getAttribute('name'))
// console.log(inputBox.getAttribute('class'))
// console.log(inputBox)

//* 3. hasAttribute() method

// let inputBox = document.getElementById('username');

// console.log(inputBox.hasAttribute("class"))
// console.log(inputBox.hasAttribute("id"))

//* 4. removeAttribute() method
// That will remove the attribute from the element

// let inputBox = document.getElementById('username');

// console.log(inputBox.attributes);
// inputBox.removeAttribute("placeholder")
// console.log(inputBox.attributes)

//* MANIPULATINGS ELEMENT'S STYLE:

// let inputBox = document.getElementById('username');

// to get all the styles
// console.log(inputBox.style);

// to get the specific style
// console.log(inputBox.style.backgroundColor);  // black
// console.log(inputBox.style.fontSize);        //  20px



//* setting styles to the elements:


// let inputBox = document.getElementById('username');

// inputBox.style.padding = "20px"

// console.log(inputBox)


//* another way to add inline css using "cssText" property...

// let inputBox = document.getElementById('username');

// But this will overwrite the existing css
//inputBox.style.cssText = "width: 200px"
//console.log(inputBox)

// If you want to keep the all the inline css property then use concatenating "+="
// inputBox.style.cssText += "width: 200px"
// console.log(inputBox)


// we can add multiple styles using this cssText property
// inputBox.style.cssText = "width: 200px; height: 100px"
// console.log(inputBox.style)
// console.log(inputBox.style.getPropertyValue('height'))




//* getComputedStyle() method:
// If you want to read internal css written in head you'll use getComputedStyle() method.
// getComputedStyle() is a window object. Read-only

// syntax: window.getComputedStyle(element, pseudoElement)

// let inputBox = document.getElementById('username');
// console.log(window.getComputedStyle(inputBox))
// console.log(window.getComputedStyle(inputBox).fontSize)
// console.log(window.getComputedStyle(inputBox).backgroundColor)
// console.log(window.getComputedStyle(inputBox).width)



//* className property:

// let title = document.getElementById('title');
//console.log(title.className);    // will return all the classes

//title.className = "new"             // will add the "new" class to the h1 element. But will overwrite the existing ones.
//console.log(title);

// if you want to have the existing + new class then use concatenating +=

// title.className += " new" 
// console.log(title);  





//* classList property: -> The classList returns the collection of CSS classes.


// let title = document.getElementById('title');

// console.log(title.classList);  // will return all the available classes

// add classes
//title.classList.add("new")              // for adding single class
//title.classList.add("new", "new2")      // for adding multiple classes
//console.log(title)


// remove classes
//title.classList.remove("message")              // for removing single class
//title.classList.remove("message", "main")      // for removing multiple classes
//console.log(title)



// replace classes
//title.classList.replace("message", "msg")         // in first arguement write the existing classname and in the second write new classname.
//title.classList.replace("message", "main")      
//console.log(title)


// check classes if exists or not
//console.log(title.classList.contains("message"))        // if class exists then it'll return true
                                                        // otherwise false.


// toggle: -> will remove the class if it exists, if class doesn't exist then it'll add that class to the element.

// title.classList.toggle("message");
// title.classList.toggle("msg");
// console.log(title)




//* JavaScript Events

//& 1. HTML Event Handler Attributes:

// Ex - onclick, onchange

// function displayMsg() {
//     console.log("Button Clicked from function!");
// }


//& 2. Adding Event handler name in JS:

// let btn = document.getElementById("btn");

//btn.onclick = function() {
    // console.log("Button Clicked!");
    // console.log(this.id);                // btn
    // console.log(id);                    // undefined
    // console.log(type);                  // undefined   
//}


// to remove the event handler:

//btn.onclick = null;     // it'll remove the event handler




//& 3. addEventListener() And removeEventListner() :

//& These are two methods that handles the event

//^ 1. addEventListener():

//^ Syntax -> addEventListener(event, function(), useCapture) 

//^ event -> any click, mouseover, mousemove, keypress etc... 
//^ function() -> function to be executed when clicked
//^ useCapture -> by default false, used for event capturing and bubbling... 


let btn = document.getElementById("btn");

// btn.addEventListener('click', function(event){
//     console.log("Button Clicked!");
//     console.log(event);
//     console.log(event.type);
// })

//! or

// function displayMsg(event) {
//     console.log("Button Clicked!");
//     console.log(event);
//     console.log(event.type);
// }

// btn.addEventListener('click', displayMsg)


//^ 2. removeEventListner(): 


// btn.addEventListener('click', function(event){
//     console.log("Button Clicked!");
//     console.log(event);
//     console.log(event.type);
// })

// btn.removeEventListener('click', function(){
//     console.log("Event Listener removed!");
// })

//! Note:- Cannot remove the anonoumous function as above

function displayMsg(event) {
    console.log("Button Clicked!");
    console.log(event);
    console.log(event.type);
}

btn.addEventListener('click', displayMsg)

btn.removeEventListener('click', displayMsg)

