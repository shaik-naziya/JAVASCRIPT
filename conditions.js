// function conditioncheck(userRole,action){
//     let permission ={
//         admin : ["create","update","read","delete"],
//         user : ["read","update"],
//         guest : ["read"]
//     }
//     if(permission.admin .includes(action) && "admin" == userRole){
//         console.log("permission grantned");
//     }
//     else if(permission.user .includes(action) && "user" == userRole)
//         console.log("permission granted");
//     else if(permission.guest .includes(action) && "guest" == userRole)
//         console.log("permission granted");
//     else{
//         console.log("not granted");
//     }
// }
//  conditioncheck("admin","delete")
//  conditioncheck("user","update")
//  conditioncheck("guest","update")


 function discountPrice(productname,price){
    let product = [
                    {product:productname,price:price}]
    product.map(elem =>{
            if(elem.price>=50){
                console.log(elem.price-10/100);
            }
        }
    )
 
 
 
 
}
discountPrice("mobile",80)
