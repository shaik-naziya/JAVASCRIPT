//map

let arr = ['html','css','js']
let newArr = arr.map((elem)=>{
    return elem.toUpperCase()
})
console.log(newArr);

let arr1 = [4,16,25]
let newArr1 = arr1.map((elem)=>{
    return Math.sqrt(elem)
})
console.log(newArr1);


let products = [{product:'mobile',price:'25000'},{product:'headset',price:'5000'},{product:'bluetooth',price:'5500'}]
let newArr2 = products.map((elem)=>{
    return elem.product
})
console.log(newArr2)


let arr3 = [{name:'rahul',age:25},{name:'ravi',age:30},{name:'rajiv',age:35}]
let currentyr = 2023
let newArr3 = arr3.map((arr3)=>{
   let yr = currentyr-arr3.age
   return arr3.name,yr
})
console.log(newArr3);

//filter

let arr4 = [1,2,3,4,5,6,7,8,9,10]
let newArr4 = arr4.filter((elem) =>{
    return elem %2==0
})
console.log(newArr4)

let arr5 = ['Indonesia','France','Uk','Usa','palastine','japan','Egypt']
let newArr5 = arr5.filter((arr5)=>{
    return arr5.length<6
})
console.log(newArr5)


let arr6 = ['Indonesia','France','Uk','Usa','palastine','japan','Egypt']
let newArr6 = arr6.filter((arr6)=>{
    return arr6.startsWith('E')
})
console.log(newArr6)

let arr7= [{name:'Pizza',price:'15'},{name:'Ice_cream',price:'8'},{name:'Burger',price:'10'},{name:'Redvelvet',price:'6'}]
let newArr7 = arr7.filter((arr7)=>{ 
   return arr7.price<10
})
console.log(newArr7)

const employees = [{name:'employee1', salary:55500},{name:'employee2', salary:50000},{name:'employee3', salary:9500},{name:'employee4', salary:500},{name:'employee5', salary:85500}]
const newArr8 = employees.filter((employee,salary)=>{
    return employee.salary>=50000
})
// arr8.filter((arr8)=>{
//     return  arr8.salary>=50000
// })
console.log(newArr8)

//reduce

let numbers = [1,2,3,4,5,6,7,8,9]
let sum = numbers.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
    let output = [sum]
console.log(output)

let arr9 = ['Full','Stack','Developer.']
let newArr9 = arr9.reduce((sentence, currentWord)=>{
    return sentence + ' ' + currentWord
})
console.log(newArr9)

let ar1 = [{name:'garments', price:200},{name:'tshirts', price:800},{name:'frocks', price:1100}]
let newAr1 = ar1.reduce((total,product)=>{
    return total+product.price
},0)
console.log('Total price of all products:',newAr1)

let ar2 = [{type:'debit', amount:50},{type:'credit', amount:500},{type:'credit', amount:100},{type:'debit', amount:100}]
let initialBalance = 0
let acbalance = ar2.reduce((balance,transaction)=>{
    if(transaction.type=='debit'){
        return balance-transaction.amount
    }
    else if(transaction.type=='credit'){
        return balance+transaction.amount
    }
    return balance
},initialBalance)
console.log('the account balance is:', acbalance)