let products = [
{
title:"Laptop",
description:"High performance laptop for work and gaming"
},
{
title:"Mobile Phone",
description:"Latest smartphone with AI camera"
},
{
title:"Smart Watch",
description:"Track health and fitness activities"
},
{
title:"Headphones",
description:"Noise cancellation wireless headphones"
}
];

function displayProducts(){

const container =
document.getElementById("productContainer");

container.innerHTML="";

products.forEach(product=>{

container.innerHTML += `
<div class="card">

<h3>${product.title}</h3>

<p>${product.description}</p>

<button onclick="showProduct('${product.title}')">
View Product
</button>

</div>
`;
});
}

function sortProducts(){

products.sort((a,b)=>
a.title.localeCompare(b.title));

displayProducts();

}

function showProduct(title){

alert("Selected Product: " + title);

}

displayProducts();