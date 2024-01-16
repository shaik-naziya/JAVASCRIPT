var p = document.querySelector("p")
console.log(p)

var pa1 = document.querySelector("#p1")
console.log(pa1)
var pa2 = document.querySelector("#p2")
console.log(pa2)
var pa3 = document.querySelector("#p3")
console.log(pa3)
var pa4 = document.querySelector("#p4")
console.log(pa4)

var para = document.querySelectorAll("p")
console.log(para)

var par = document.getElementById("p4")
.textContent = "Fourth para"
console.log(par)

var parag1 = document.querySelectorAll("p")[0]
console.log(parag1)
p.setAttribute('para1',p)
var parag2 = document.querySelectorAll("p")[1]
console.log(parag2)
p.setAttribute('para2',p)
var parag3 = document.querySelectorAll("p")[2]
console.log(parag3)
p.setAttribute('para3',p)
var parag4 = document.querySelectorAll("p")[3]
console.log(parag4)
p.setAttribute('para4',p)

var pg1 = document.getElementById("p3")
pg1.style.backgroundColor = "gray"
pg1.style.fontSize = "20px"
pg1.style.fontFamily = 'inter'
pg1.style.border = "2px solid black" 

var pg2 = document.getElementById("p1")
pg2.style.fontSize = "20px"
pg2.style.backgroundColor = "lightpink"
pg2.style.border = "2px solid black" 

var pg3 = document.getElementById("p2")
pg3.style.fontSize = "20px"
pg3.style.backgroundColor = "lightblue"
pg3.style.border = "2px solid black" 

var pg4 = document.getElementById("p4")
pg4.style.fontSize = "40px"
pg4.style.backgroundColor = "yellow"
pg4.style.border = "2px solid black" 

var h1 = document.getElementById("hed")
// setInterval(function(){
//    let a = Math.random()
//    h1.style.backgroundColor = "#ff0000"
//    h1.style.backgroundColor = "#ff4000"
//    h1.style.backgroundColor = " #ff8000"
//    for(let i = 0; i<=20; i++){
//     console.log(i);
//    }
    
// },2000)
// setInterval(function(){
//     h1.style.backgroundColor = "gray"
//     h1.style.Color = "color"
// },2000)
const colors = ['red', 'blue', 'green', 'orange','black','teal'];
let index = 0;

        setInterval(() => {
            h1.style.backgroundColor = colors[index];
            console.log(index);
            index = (index + 1) % colors.length;
            console.log(index);   
        }, 2000);
      

