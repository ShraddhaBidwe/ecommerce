import React, { useState} from "react";
import { useParams } from "react-router";
import "./SingleProduct.css";
import Header from './Header';
import Footer from './Footer';
import ProductList from "./ProductList";

const SingleProduct = () => {
  const params = useParams();
  const sing_product=ProductList.find((p) => Number(p.id) === Number(params.id))
  
  // This product info use only to view the single product webpage. 
  const product={
    productName:sing_product.product,
    price:sing_product.price,
    description:sing_product.prod_info,
    mainImage:sing_product.src,
    img1:sing_product.img1,
    img2:sing_product.img2,
    img3:sing_product.img3,
    img4:sing_product.img4,
}
// console.log(product.productName);


  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [mainImage, setMainImage] = useState(product.mainImage);

  const onImageHover=(new_img)=>{
    setMainImage(new_img)
    
  }

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = () => {

  };

  const handleWishlist=()=>{
    setIsWishlisted(!isWishlisted);
  };

  const handleBuyNow = () => {

  };
  
    return(
      <>
        <Header />
        <div className="product-page">

          {/* left container has  */}
          <div className="left-container">
            <img className='main_Image' src={mainImage} alt="Product"/>
            <div className="image-gallery">
              <img src={product.img1}  alt='' onClick={()=>onImageHover(product.img1)}/>
              <img src={product.img2}  alt='' onClick={()=>onImageHover(product.img2)}/>
              <img src={product.img3}  alt='' onClick={()=>onImageHover(product.img3)}/>
              <img src={product.img4}  alt='' onClick={()=>onImageHover(product.img4)}/>
            </div>

            <div className='all_buttons'>
            <button className="cart_button" onClick={handleAddToCart}>Add to Cart</button>

            <div className="wishlist">
              <button className="cart_button" onClick={handleWishlist}>
              {isWishlisted ? "Remove from list" : "Add to wishlist"}
              {isWishlisted ? (
                <i className="list"></i>
              ) : (
                <i className="list"></i>
              )}
              </button>
            </div>

            <button className="cart_button" onClick={handleBuyNow}>Buy Now</button>
            </div>
          </div>

          {/* Right container has products details */}
          <div className="right-container">
            <h1 className='product_block' >{product.productName}</h1>
            <p className="price block">{product.price}</p>

            <div className="size-container-block">
              <labels htmlFor="size">Size:</labels>
              <select className='select-size' name="size" id="size">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </div>

            <div className="quantity-container-block">
              <label_quantity htmlFor="quantity">Quantity:</label_quantity>
              <input className='select-size'
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="10"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>

            <p className="description block"><b>Product Details:</b> {product.description}</p>
          </div>

        </div>
        <Footer />  
      </>
    );
  };
  export default SingleProduct;