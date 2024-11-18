const productList = document.getElementById("product-list");

const productCards = fruits.map((fruit) => {
  return `
    <div class="product-card">
      <img src="${fruit.imageUrl}" alt="${fruit.name}">
      <h3>${fruit.name}</h3>
      <p>${fruit.description}</p>
      <p class="price">Price: $${fruit.price}</p>
      <p class="stock">Stock: ${fruit.stock}</p>
      <p>Rating: ${fruit.rating} / 5</p>
      <p>Brand: ${fruit.brand}</p>
    </div>
  `;
}).join(""); 

productList.innerHTML = productCards; 
