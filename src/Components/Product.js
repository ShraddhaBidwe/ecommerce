import React from "react";
import Sections from "./Sections";
import Allproduct from "./Allproduct";
import { Link } from "react-router-dom";
const Product = () => {
  const electronic_images = [
    {
      src: "https://m.media-amazon.com/images/I/41IcuNkyrdL._SX300_SY300_QL70_FMwebp_.jpg",
      alt: "Product Image 1",
      product: "Mobile",
      price: "$300",
      desc: "Samsung M04",
    },
    {
      src: "https://m.media-amazon.com/images/I/718XDEWTPIL._UL1500_.jpg",
      alt: "Product Image 2",
      product: "Watch",
      price: "$120",
      desc: "Redux Watch",
    },
    {
      src: "https://m.media-amazon.com/images/I/51UhwaQXCpL._SX679_.jpg",
      alt: "Product Image 3",
      product: "Earphones",
      price: "$70",
      desc: "Boat earphones",
    },
    {
      src: "https://m.media-amazon.com/images/I/51tS-cfYoXL._SX679_.jpg",
      alt: "Product Image 4",
      product: "Charger",
      price: "$50",
      desc: "Apple charger",
    },
    {
      src: "https://m.media-amazon.com/images/I/51sZaNaWzZL._SX300_SY300_QL70_FMwebp_.jpg",
      alt: "Product Image 5",
      product: "Laptop",
      price: "$1000",
      desc: "HP Laptop",
    },
    {
      src: "https://m.media-amazon.com/images/I/81WtQ64-SOL._SX522_.jpg",
      alt: "Product Image 6",
      product: "Camera",
      price: "$500",
      desc: "Nikon Camera",
    },
    {
      src: "https://m.media-amazon.com/images/I/71S-WpFnW+L._SL1500_.jpg",
      alt: "Product Image 7",
      product: "TV",
      price: "$500",
      desc: "Television",
    },
    {
      src: "https://m.media-amazon.com/images/I/71GU85VOpnL._SX522_.jpg",
      alt: "Product Image 8",
      product: "Projector",
      price: "$500",
      desc: "Projector",
    },
    {
      src: "https://m.media-amazon.com/images/I/31NVItwqOnL._SX300_SY300_QL70_FMwebp_.jpg",
      alt: "Product Image 9",
      product: "Printer",
      price: "$500",
      desc: "Hourse Hold Printer",
    },
  ];

  const grocery_images = [
    {
      src: "https://m.media-amazon.com/images/I/51GyUUKe-0L._AC_UL320_.jpg",
      alt: "Product Image 1",
      product: "Oil",
      price: "Rs 139",
      desc: "Fortiune oil",
    },
    {
      src: "https://m.media-amazon.com/images/I/91eEvcDs51L._AC_UL320_.jpg",
      alt: "Product Image 2",
      product: "Pulses",
      price: "Rs 245",
      desc: "Moong Dal",
    },
    {
      src: "https://m.media-amazon.com/images/I/81+FF+RsymL._AC_UL320_.jpg",
      alt: "Product Image 3",
      product: "Atta",
      price: "Rs 300",
      desc: "Ashirvad Atta",
    },
    {
      src: "https://m.media-amazon.com/images/I/81Xzx5PHTFL._AC_UL320_.jpg",
      alt: "Product Image 4",
      product: "Maggie",
      price: "Rs 20",
      desc: "Maggie Noodels",
    },
    {
      src: "https://m.media-amazon.com/images/I/814iBcUf1aL._AC_UL320_.jpg",
      alt: "Product Image 5",
      product: "Cookies",
      price: "Rs 225",
      desc: "Unibic Cookies",
    },
    {
      src: "https://m.media-amazon.com/images/I/71foBxdA7tL._AC_UL320_.jpg",
      alt: "Product Image 6",
      product: "BournVita",
      price: "Rs 500",
      desc: "Health Drink",
    },
    {
      src: "https://m.media-amazon.com/images/I/81hqKpscwCL._AC_UL320_.jpg",
      alt: "Product Image 7",
      product: "Fruits",
      price: "Rs 100",
      desc: "Grapes",
    },
    {
      src: "https://m.media-amazon.com/images/I/71MekfPhKNL._AC_UL320_.jpg",
      alt: "Product Image 8",
      product: "Honey",
      price: "Rs 600",
      desc: "Dabur honey",
    },
    {
      src: "https://m.media-amazon.com/images/I/61SpB8J3HqL._AC_UL320_.jpg",
      alt: "Product Image 9",
      product: "Toothpaste",
      price: "Rs 50",
      desc: "Colgate Maxfresh",
    },
  ];

  const home_images = [
    {
      src: "https://m.media-amazon.com/images/I/71ephbjp7FL._AC_UL320_.jpg",
      alt: "Product Image 1",
      product: "Shoe Rack",
      price: "Rs 711",
      desc: "KSP metal shoe rack",
    },
    {
      src: "https://m.media-amazon.com/images/I/81SOycLGtdL._AC_UL320_.jpg",
      alt: "Product Image 2",
      product: "Mat",
      price: "Rs 340",
      desc: "Door mat",
    },
    {
      src: "https://m.media-amazon.com/images/I/71pG4CvrxvL._AC_UL320_.jpg",
      alt: "Product Image 3",
      product: "Chopper",
      price: "Rs 600",
      desc: "Vegetable chopper",
    },
    {
      src: "https://m.media-amazon.com/images/I/81ml0s5AHZL._AC_UL320_.jpg",
      alt: "Product Image 4",
      product: "Home Temple",
      price: "Rs 2000",
      desc: "Wooden puja stand",
    },
    {
      src: "https://m.media-amazon.com/images/I/71QjQZ-nZCL._AC_UL320_.jpg",
      alt: "Product Image 5",
      product: "Lunch box",
      price: "$1000",
      desc: "HP Laptop",
    },
    {
      src: "https://m.media-amazon.com/images/I/61c6L8Y-0aL._AC_UL320_.jpg",
      alt: "Product Image 6",
      product: "Fan",
      price: "$500",
      desc: "Exhaust fan for kitchen",
    },
    {
      src: "https://m.media-amazon.com/images/I/61SzlTQhA4L._AC_UL320_.jpg",
      alt: "Product Image 7",
      product: "Bedsheet",
      price: "Rs 500",
      desc: "BSB Cotton Bedsheet",
    },
    {
      src: "https://m.media-amazon.com/images/I/61r+cjuG37L._AC_UL320_.jpg",
      alt: "Product Image 8",
      product: "Freshener",
      price: "Rs 100",
      desc: "Godrej aer freshener",
    },
    {
      src: "https://m.media-amazon.com/images/I/314lsfI3d8L._AC_UL320_.jpg",
      alt: "Product Image 9",
      product: "Furniture",
      price: "$500",
      desc: "Seater home sofa",
    },
  ];

  const books_images = [
    {
      src: "https://m.media-amazon.com/images/I/81uL5oJmQxL._AC_UY218_.jpg",
      alt: "Product Image 1",
      product: "Vocabulary",
      price: "Rs 280",
      desc: "English vocabulary",
    },
    {
      src: "https://m.media-amazon.com/images/I/71xWWxjzF7L._AC_UY218_.jpg",
      alt: "Product Image 2",
      product: "Mythology",
      price: "Rs 200",
      desc: "Story books for kids",
    },
    {
      src: "https://m.media-amazon.com/images/I/81gTwYAhU7L._AC_UY218_.jpg",
      alt: "Product Image 3",
      product: "Motivational ",
      price: "Rs 500",
      desc: "Subconcious Mind",
    },
    {
      src: "https://m.media-amazon.com/images/I/7175YpTSa7L._AC_UY218_.jpg",
      alt: "Product Image 4",
      product: "Kids",
      price: "100",
      desc: "brain activity",
    },
    {
      src: "https://m.media-amazon.com/images/I/71SkkYOAaLL._AC_UY218_.jpg",
      alt: "Product Image 5",
      product: "Stock Market",
      price: "Rs 500",
      desc: "Price action trading",
    },
    {
      src: "https://m.media-amazon.com/images/I/71U0g18pxyS._AC_UY218_.jpg",
      alt: "Product Image 6",
      product: "Poems",
      price: "Rs 300",
      desc: "50 greatest poems",
    },
    {
      src: "https://m.media-amazon.com/images/I/819n0tHLQAL._AC_UY218_.jpg",
      alt: "Product Image 7",
      product: "Horror",
      price: "Rs 1000",
      desc: "Horror Stories",
    },
    {
      src: "https://m.media-amazon.com/images/I/71KM8qTSbUL._AC_UY218_.jpg",
      alt: "Product Image 8",
      product: "Pregancy",
      price: "Rs 400",
      desc: "Belly to Baby",
    },
    {
      src: "https://m.media-amazon.com/images/I/41n1edvVlLL._AC_UY218_.jpg",
      alt: "Product Image 9",
      product: "Biography",
      price: "Rs 360",
      desc: "Steve Jobs",
    },
  ];

  const fashion_images = [
    {
      src: "https://m.media-amazon.com/images/I/71gAlld6UHL._AC_UL320_.jpg",
      alt: "Product Image 1",
      product: "Women Top",
      price: "Rs 550",
      desc: "Casual top",
    },
    {
      src: "https://m.media-amazon.com/images/I/711ou4xAFTL._AC_UL320_.jpg",
      alt: "Product Image 2",
      product: "Footwear",
      price: "Rs 300",
      desc: "Summer sandal",
    },
    {
      src: "https://m.media-amazon.com/images/I/51wEC1CRZtL._AC_UL320_.jpg",
      alt: "Product Image 3",
      product: "Bags",
      price: "rs 600",
      desc: "Shoulder bags",
    },
    {
      src: "https://m.media-amazon.com/images/I/71a7hU2E6tL._AC_UL320_.jpg",
      alt: "Product Image 4",
      product: "Women's Set",
      price: "Rs 1500",
      desc: "Floral top with Pyjama",
    },
    {
      src: "https://m.media-amazon.com/images/I/71cnAWrBHXL._AC_UL320_.jpg",
      alt: "Product Image 5",
      product: "Jacket",
      price: "Rs 499",
      desc: "Men's denim jacket",
    },
    {
      src: "https://m.media-amazon.com/images/I/41tFff4qC6L._AC_UL320_.jpg",
      alt: "Product Image 6",
      product: "Sadi",
      price: "Rs 1500",
      desc: "Silk embroider work",
    },
    {
      src: "https://m.media-amazon.com/images/I/71bfPnNplmL._AC_UL320_.jpg",
      alt: "Product Image 7",
      product: "Wallet",
      price: "$500",
      desc: "Brown leather wallet",
    },
    {
      src: "https://m.media-amazon.com/images/I/616NVTS05CL._AC_UL320_.jpg",
      alt: "Product Image 8",
      product: "Jewellery",
      price: "Rs 480",
      desc: "Solid silver chain",
    },
    {
        src: "https://m.media-amazon.com/images/I/71irYwattwL._AC_UL320_.jpg",
        alt: "Product Image 5",
        product: "Purse",
        price: "Rs 299",
        desc: "Clutch bag purse",
    },
  ];

  const Fashion = [
    {
      desc: "Best of Fashion",
      url: "https://png.pngtree.com/element_our/png_detail/20181207/creative-electronics-icon-background-png_263987.jpg",
    },
  ];
// https://seeklogo.com/images/F/fashion-logo-97D0B0C702-seeklogo.com.png
  const Electronic = [
    {
      desc: "Best of Electronic",
      url: "https://png.pngtree.com/element_our/png_detail/20181207/creative-electronics-icon-background-png_263987.jpg",
    },
  ];

  const Grocery = [
    {
      desc: "Best of Grocery",
      url: "https://cdn.dribbble.com/userupload/3346788/file/original-09e4cf74c9cdbd24fb8fc44f716c607f.png?crop=153x115-1447x1085&resize=400x0",
    },
  ];

  const Home = [
    {
      desc: "Best of Home",
      url: "https://thumbs.dreamstime.com/b/house-tree-logo-real-estate-image-vector-design-graphic-symbol-template-105126143.jpg",
    },
  ];

  const Books = [
    {
      desc: "Best of Books",
      url: "https://www.graphicsprings.com/filestorage/stencils/2f3bdb9733c4a68659dc2900a7595fea.png?width=500&height=500",
    },
  ];

  

  return (
    <div>
      <Sections images={fashion_images} type={Fashion} />
      <Sections images={electronic_images} type={Electronic}/>
      <Sections images={grocery_images} type={Grocery} />
      <Sections images={home_images} type={Home}/>
      <Sections images={books_images} type={Books}/>
     {/* <Allproduct allprod={fashion_images}/> */}
    </div>
  );
};

export default Product;