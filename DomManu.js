document.title;
document.title = "Change Kar diya title";

let headertit = document.getElementById("header-title");

document.getElementById("header-title").textContent = "Hello world";
document.getElementById("header-title").innerText = "cool world";


//headertit.innerText = "<h1>Hello...;;</h1>";

headertit.style.borderBottom = " solid 10px #000"
headertit.style.fontWeight = "bolder"
headertit.style.color = "green"