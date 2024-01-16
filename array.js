let arr = [ ] 
console.log(arr)
const arr1 = ["full","stack","development","course"]
console.log(arr1)
console.log(arr1.length)
console.log(arr1[0])
console.log(arr1[1])
console.log(arr1[3])
let arr2 = [1,2,"ASDC","shaa","ali","banda",0.2,22/7,null,true,false,undefined]
console.log(arr2)
console.log(arr2.length)
let itcompanies = ["microsoft","IBM","apple","google","facebook","oracle"]
console.log( itcompanies)
console.log(itcompanies.length)
console.log(itcompanies[0])
console.log(itcompanies[2])
console.log(itcompanies[5])
let str = "microsoft"
console.log(str.toUpperCase())
let str1 = "IBM"
console.log(str1.toUpperCase())
let str2 = "apple"
console.log(str2.toUpperCase())
let str3 = "google"
console.log(str3.toUpperCase())
let str4 = "facebook"
console.log(str4.toUpperCase())
let str5 = "oracle"
console.log(str5.toUpperCase())
let arr4 = ["microsoft","IBM","apple","google","facebook", "oracle", "are big it companies"]
console.log(arr4.join())
console.log(itcompanies.includes("microsoft"))
console.log(itcompanies.includes("capgemini"))

var shoppingCart = ['Milk','Coffee','Tea','Honey']
shoppingCart.unshift("Meat")
console.log(shoppingCart)
shoppingCart.push("Sugar")
console.log(shoppingCart)
shoppingCart.splice(4,4,"sugar")
console.log(shoppingCart)
shoppingCart.splice(2,3,"Greentea","sugar")
console.log(shoppingCart)
let countries = ["India","USA","UAE","uk","Thailand"]
console.log(countries)
console.log(countries[0])
let fullstack = ['HTML','CSS','JS']
let fullstack1 = ['NODE','EXPRESS','MONGODB']
console.log(fullstack.concat(fullstack1))
var ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)
console.log(ages[0])
console.log(ages[9])
console.log(ages[4]/2+ages[5]/2)
console.log(ages[0]/10+ages[1]/10+ages[2]/10+ages[3]/10+ages[4]/10+ages[5]/10+ages[6]/10+ages[7]/10+ages[8]/10+ages[9]/10)
console.log(ages[9]-ages[0])
console.log(Math.abs(19-22.8))
console.log(Math.abs(26-22.8))
    var arrn = ['computer','cpu','mouse','key','printer']
    console.log(arrn)
    var newArr = arrn.filter((elem)=>{
        return elem.length>3
    })
    console.log(newArr)
var shopping = ["shoes","watches","mobiles","laptops"]
console.log(shopping)
shopping.pop(shopping[3])
console.log(shopping)
