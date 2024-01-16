let title = document.getElementById('input')
let desc = document.getElementById('desc')
let btn = document.querySelector('#btn')
let editbtn = document.querySelector('#editbtn')
let div = document.querySelector('#div')
let listVals = []

let titleVal
let descVal

onload = function(){
    let dataLS = JSON.parse(localStorage.getItem('data'))
   
    console.log(typeof dataLS," ",dataLS);
    let items = dataLS.map(function(e){
        let elem = `<h1>${e.titleVal}</h1>
                    <h3>${e.descVal}</h3>`
                    return elem
    })
    div.innerHTML = items.join('')
}
  
title.addEventListener("keyup",function(e){
    titleVal = e.target.value
    // console.log(titleVal);
})


desc.addEventListener("keyup",function(e){
    descVal = e.target.value
    // console.log(descVal);
})


btn.addEventListener("click",function(e){
    // console.log("clicked");
    let objInputs = {titleVal:titleVal, descVal:descVal}
    let dataLS = JSON.parse(localStorage.getItem('data')) || []
    dataLS.push(objInputs)
    localStorage.setItem("data", JSON.stringify(dataLS))
    console.log(dataLS);
    displayItems(dataLS)
})
    
function displayItems(dataLS){
    console.log(dataLS);
    let items = dataLS.map(function(e,i){
        let elem = `<h1>${e.titleVal}</h1>
                    <h3>${e.descVal}</h3>
                    <button onclick = "edit(${i})">Edit</button>
                    <button onclick = "del(${i})">Delete</button>`
                    return elem
    })
    // console.log(items);
    div.innerHTML = items.join('')
}
function del(i){
    let dataLS = JSON.parse(localStorage.getItem('data')) ||[]
    dataLS.splice(i,1)
    localStorage.setItem("data", JSON.stringify(dataLS))
    displayItems(dataLS)
}


function edit(i){
    btn.setAttribute('class','editb')
    let dataLS = JSON.parse(localStorage.getItem('data')) || []
    title.value = dataLS[i].titleVal
    console.log(titleVal);
    
    title.addEventListener("keyup",function(e){
        titleVal = e.target.value
    })
    desc.addEventListener("keyup",function(e){
        descVal = e.target.value
    })
    editbtn.addEventListener("click",function(e){
        dataLS[i].titleVal = titleVal
        localStorage.setItem("data",JSON.stringify(dataLS))
        displayItems(dataLS)
})
}

let edit = document.querySelector('#editbtn')
edit.addEventListener("click",function(e){
    titleVal = " "
    descVal = " "
    dataLS[i].titleVal = titleVal
    editbtn.computedStyleMap.display = "none"
    btn.setAttribute("class"," ")
})
