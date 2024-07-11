import "./Product.css";
import arrowForward from "../../asset/images/arrowForward.svg";
import filter from "../../asset/images/filter.svg";
import blackshoe from "../../asset/images/blackshoe.svg";
import sneaker2 from "../../asset/images/sneaker2.svg";
import sneaker3 from "../../asset/images/sneaker3.svg";
import sneaker4 from "../../asset/images/sneaker4.svg";
import sneaker5 from "../../asset/images/snearker5.svg";
import sneaker6 from "../../asset/images/sneaker6.svg";
import like from "../../asset/images/favourite.svg";
import FLaceUp from "../../asset/images/laceupboot.svg";
import tassle from "../../asset/images/tassels.svg";
import pointer from "../../asset/images/pointedtoe.svg";
import unisex from "../../asset/images/laceupunisex.svg";
import oxford from "../../asset/images/oxfordmale.svg";
import milliano from "../../asset/images/milano.svg";
import flat from "../../asset/images/flatshoes.svg";
import crystal from "../../asset/images/crystal.svg";
import suede from "../../asset/images/suede.svg";
import armani from "../../asset/images/armani.svg";
import casual from "../../asset/images/casual.svg";
import santiago from "../../asset/images/santiago.svg";
import star from "../../asset/images/star.svg";
import { Link } from "react-router-dom";

const productsArray = [
  {
    id: 1,
    image: blackshoe,
    productTitle: "Unisex Sneakers",
    productPrice: "$70.45",
    like: like,
    review: 12,
  },
  {
    id: 2,
    image: sneaker2,
    productTitle: "Female Sneaker",
    productPrice: "$67.99",
    like: like,
    review: 2,
  },
  {
    id: 3,
    image: sneaker3,
    productTitle: "Female Sneakers",
    productPrice: "$45.0",
    like: like,
    review: 23,
  },
  {
    id: 4,
    image: sneaker4,
    productTitle: "Male brown boots",
    productPrice: "$100.99",
    like: like,
    review: 12,
  },
  {
    id: 5,
    image: sneaker5,
    productTitle: "Fila envizion unisex shoe",
    productPrice: "$120.55",
    like: like,
    review: 17,
  },
  {
    id: 6,
    image: sneaker6,
    productTitle: "Nike Air Max9 unisex shoe",
    productPrice: "$140.55",
    like: like,
    review: 12,
  },
  {
    id: 7,
    image: FLaceUp,
    productTitle: "female Lace up boots",
    productPrice: "$175.45",
    like: like,
    review: 12,
  },
  {
    id: 8,
    image: tassle,
    productTitle: "Brown Tassels Croc Mens Loafers",
    productPrice: "$190.75",
    like: like,
    review: 12,
  },
  {
    id: 9,
    image: pointer,
    productTitle: "Pointed toe women’s flat",
    productPrice: "$60.45",
    like: like,
    review: 12,
  },
  {
    id: 10,
    image: unisex,
    productTitle: "Unisex Lace up Sneakers",
    productPrice: "$70.45",
    like: like,
    review: 12,
  },
  {
    id: 11,
    image: oxford,
    productTitle: "Oxford male shoe",
    productPrice: "$90.0",
    like: like,
    review: 17,
  },
  {
    id: 12,
    image: milliano,
    productTitle: "Men milano fringe loafers",
    productPrice: "$206.5",
    like: like,
    review: 21,
  },
  {
    id: 13,
    image: flat,
    productTitle: "Women flat shoes",
    productPrice: "$148.5",
    like: like,
    review: 21,
  },
  {
    id: 14,
    image: crystal,
    productTitle: "Women Crystal tuscany heels",
    productPrice: "$148.5",
    like: like,
    review: 21,
  },
  {
    id: 15,
    image: suede,
    productTitle: "Women mix suede leather heels",
    productPrice: "$156.5",
    like: like,
    review: 21,
  },
  {
    id: 16,
    image: armani,
    productTitle: "Women armani flat shoes",
    productPrice: "$148.5",
    like: like,
    review: 21,
  },
  {
    id: 17,
    image: casual,
    productTitle: "Casual fashion unisex sneakers",
    productPrice: "$78.5",
    like: like,
    review: 21,
  },
  {
    id: 18,
    image: santiago,
    productTitle: "Santiago Men’s shoe",
    productPrice: "$97.9",
    like: like,
    review: 21,
  },
];

function Product() {
  return (
    <div className="product">
      <div className="product-direction">
        <p>home</p>
        <img src={arrowForward} alt="arrow forward" />
        <p>product</p>
      </div>
      <div className="category-filter">
        <h3>Categories</h3>
        <div className="filter">
          <p>show filter</p>
          <img src={filter} alt="filter" />
        </div>
      </div>
      <div className="product-listing">
        {productsArray.map((product) => {
          return (
            <Link to="/listing/">
              <ProductMap productObj={product} key={product.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );

  function ProductMap({ productObj }) {
    return (
      <div className="listings">
        <div className="listings-flex">
          <div className="img-prep">
            <img src={productObj.image} alt="images" />
            <img className="like" src={productObj.like} alt="like" />
          </div>
          <div className="product-review-star">
            <p>{productObj.productTitle}</p>
            <div className="review-star">
              <div className="star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p>{productObj.review} Review</p>
            </div>
          </div>
          <div className="price-add-cart">
            <p>{productObj.productPrice}</p>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
