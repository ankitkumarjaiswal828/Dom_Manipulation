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
// let li = document.createElement("li")
// let text = document.createTextNode("item 5")
// li.appendChild(text)
// let addli = document.getElementById("items").appendChild(li)

//set class and id in items5
// addli.className = "list-group-item";
// addli.id = "itemid"

// document.getElementById("itemid").style.fontWeight = "bold"
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

// let createnode = document.createElement('div')
// let txt = document.createTextNode("Hello World!!")
// createnode.appendChild(txt)

// createnode.className ="cls"
// createnode.id = 'ids'
// createnode.setAttribute('title',"Dummy")
// console.log(createnode)

// let container = document.querySelector('header .container')
// let h1 = document.querySelector('header h1')
// console.log(container)
// container.insertBefore(txt,h1)

// let ul = document.querySelector('ul .list-group-item')
// console.log(ul)
// let lis = document.querySelector('ul li')[1]
// ul.insertBefore(txt,lis)





//Delete and Edit functionality

let form = document.getElementById("addForm")
let addList = document.getElementById("items")
let filter  =  document.getElementById("filter")

//create event
addEventListener('submit',addItems)
addEventListener('click',removeItem)
addEventListener('keyup',filterItems)

function addItems(e)
{
    e.preventDefault()
    //get input
    let newItem = document.getElementById("item").value
    let newItem2 = document.getElementById("item2").value;


    //create li
    let li = document.createElement("li")

    //add class name
    li.className = "list-group-item"

    //add text node with input value
    li.appendChild(document.createTextNode(newItem))
    li.appendChild(document.createTextNode(newItem2))

    //create delete button

    let deletebtn = document.createElement('button')

    deletebtn.className = "btn btn-danger btn-sm float-right delete";

    deletebtn.appendChild(document.createTextNode('X'))

    li.appendChild(deletebtn)


    let editbtn = document.createElement("button");

    editbtn.className = "btn btn-success  btn-sm float-right";

    editbtn.style.marginRight ="10px"

    editbtn.appendChild(document.createTextNode("Edit"));

    li.appendChild(editbtn);

    addList.appendChild(li)
}


function  removeItem(e){

    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li  = e.target.parentElement;
            addList.removeChild(li)
        }
    }
}


function filterItems(e)
{   
    //convert all text to lowercase
    let lowertxt   = e.target.value.toLowerCase()
    //console.log(lowertxt)

    //get li
    let items = addList.getElementsByTagName('li')

    //convert into array

    Array.from(items).forEach(function(item){

        let itemName = item.firstChild.textContent;
        let description = item.childNodes[1].textContent

        if(itemName.toLowerCase().indexOf(lowertxt)!=-1 || description.toLowerCase().indexOf(lowertxt)!=-1)
        {
            item.style.display = "block"
        }

        else{
            item.style.display = "none"
        }
    })
}