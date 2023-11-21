document.title;
//document.title = "Change Kar diya title";

let headertit = document.getElementById("header-title");

// document.getElementById("header-title").textContent = "Hello world";
// document.getElementById("header-title").innerText = "cool world";


//headertit.innerText = "<h1>Hello...;;</h1>";

// headertit.style.borderBottom = " solid 10px #000"
// headertit.style.fontWeight = "bolder"
// headertit.style.color = "green"

let list_item = document.getElementsByClassName("list-group-item");
//list_item[2].style.backgroundColor = "green";

//change all element

for(let i=0;i<list_item.length;i++){
    list_item[i].style.fontWeight="bold"
}



//add new li tag and child text node
let li = document.createElement("li")
let text = document.createTextNode("item 5")
li.appendChild(text)
let addli = document.getElementById("items").appendChild(li)

//set class and id in items5
addli.className = "list-group-item";
addli.id = "itemid"

document.getElementById("itemid").style.fontWeight = "bold"
//document.getElementsByClassName("list-group-item")[4].style.backgroundColor ="red"



//QuerySelector && QuerySelectorALL

// document.querySelector(".list-group-item:first-child").style.color = "red";
// document.querySelector(".list-group-item:last-child").style.color="yellow"

// let query = document.querySelector(".list-group-item:nth-child(2)")
// query.style.backgroundColor = "green"

// let invisible = document.querySelector(".list-group-item:nth-child(3)")
// invisible.style.visibility = "hidden";


// document.querySelectorAll(".list-group-item")[1].style.color = "yellow";

// let odd = document.querySelectorAll("li:nth-child(odd)");

// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = "grey"
// }



//Creating Nodes and Modifying Dom

let node = document.querySelector("#items")

//parentElement
//console.log(node.parentElement)
//console.log(node.parentElement.parentElement.parentElement)

//parentNode
//console.log(node.parentNode)
//console.log(node.parentNode.parentNode.parentNode)

//childNodes
// console.log(node.childNodes)

//children
// console.log(node.children)
// console.log(node.children[2]);

//firstChild
//console.log(node.firstChild)
//console.log(node.lastChild)
// console.log(node.firstElementChild)
// console.log(node.lastElementChild)

//nextSliblings
// console.log(node.nextSibling)
// console.log(node.nextElementSibling)

//previoussiblings
//console.log(node.previousSibling)
// console.log(node.previousElementSibling)

//create Element

let createnode = document.createElement('div')
let txt = document.createTextNode("Hello World!!")
createnode.appendChild(txt)

createnode.className ="cls"
createnode.id = 'ids'
createnode.setAttribute('title',"Dummy")
console.log(createnode)

let container = document.querySelector('header .container')
let h1 = document.querySelector('header h1')
console.log(container)
container.insertBefore(txt,h1)

let ul = document.querySelector('ul .list-group-item')
console.log(ul)
let lis = document.querySelector('ul li')[1]
ul.insertBefore(txt,lis)