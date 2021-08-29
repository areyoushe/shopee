
 
function updatePrice(){
    console.log("called")
    var quantity = document.getElementsByClassName("cart-quantity");
    var priceCart = document.getElementsByClassName("cartPrice");
    var totalprice = 0;
    for(var j=0; j<quantity.length; j++){
        var quant = quantity[j].value;
        var price = priceCart[j].innerHTML.replace("$","");
        totalprice = totalprice+quant*price
        console.log(totalprice)
        document.querySelector(".total").innerHTML = "Total : $" +totalprice
    }
    document.querySelector(".total").innerHTML = "Total : $" +totalprice
}
updatePrice()

var purchasebutton = document.getElementsByClassName("btn-grad")

for( var i = 0; i<purchasebutton.length; i++){
    var singlepurchasebutton = purchasebutton[i];
    singlepurchasebutton.addEventListener("click", (e)=>{
        var clicked = e.target;
        var productCode = clicked.parentElement
        var productname = productCode.querySelector(".product-name").innerHTML
        console.log(productname)
        var productprice = productCode.querySelector(".product-price").innerHTML
        addtocart(productname, productprice)
        console.log(productprice)
    })
}

function addtocart(name,price){
    var table = document.querySelector(".table");
var newRow= document.createElement("tr");

var cartProductName = table.getElementsByClassName("cart-product-name")
 for( var i=0; i<cartProductName.length; i++){
     var alreadyAddedProducts = cartProductName[i].innerHTML;
     if (alreadyAddedProducts == name){
         alert ("The Product Is Already Added!")
         return;
     }
 }
newRow.innerHTML = `
<td class = "name cart-product-name">${name}</td>
<td class = "name"><input type = "number" min = 1 value = 1  class = "cart-quantity" ></td>
<td class = "cartPrice">${price}</td>
<td class = "btn"><button class="btn-grad1">Remove</button></td>
             `;
table.append(newRow);
updatePrice()
var removeButtons = document.getElementsByClassName("btn-grad1")
for(var i=0; i<removeButtons.length; i++){
    removeButtons[i].addEventListener("click", (e)=>{
        console.log("button 1")
        var clickedButton = e.target;
        clickedButton.parentElement.parentElement.remove()
        updatePrice()
    })
}
var quantity = document.getElementsByClassName("cart-quantity");

for (var i=0 ; i < quantity.length; i++){
    var singleQuantiy = quantity[i];
    singleQuantiy.addEventListener("change", (e)=>{
        var ClickedQuantity = e.target;
        if( ClickedQuantity.value<1
        ){
            ClickedQuantity.value = 1
        }
        updatePrice()
    })
}
}

