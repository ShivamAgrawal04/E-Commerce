// let arr = [1, 2, 3, 4, 5];
// console.log("removed elements", arr.splice(2, 2)); // Removes 2 elements starting from index 2
// console.log(arr); // [1, 2, 5]

const run = async () => {
  const responst = await fetch("https://dummyjson.com/products?limit=100000");
  const data = await responst.json();
  const products = data.products;
  products.forEach((product) => {
    if (product.category.startsWith("mens")) {
      console.log(product.category);
    }
  });
};

run();
