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
list_item[2].style.backgroundColor = "green";

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
document.getElementsByClassName("list-group-item")[4].style.backgroundColor ="red"

