import data from "./data.js";
const allProducts = {
  render: () => {
    const { products } = data;
    return `${products
      .map(
        (product) => `
            <div class="section--allProducts__container-products" data-id=${product._id}>
          <img
            src=${product.image}
            alt=${product.name}
            
          />
          <div class="section--allProducts__container-products_txt">
            <h3 class="section--allProducts__container-products_txt_addToCart" id="addToCart" >Add To Cart</h3>
            <h3>${product.name}</h3>
            <h3>${product.salePrice}&nbsp ${product.price}</h3>
          </div> 
          </div>   
`
      )
      .join("")}`;
  },
};
export default allProducts;
