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

