import style from "./Listing.module.css";
import ashNike from "../../asset/images/ashNike.svg";
import pinkNike from "../../asset/images/pinkNike.svg";
import greenNike from "../../asset/images/greenNike.svg";
import redNike from "../../asset/images/redNike.svg";
import halfShow from "../../asset/images/halfshow.svg";
import share from "../../asset/images/share.svg";
import arrow from "../../asset/images/arrowup.svg";
import feet from "../../asset/images/footShow.svg";
import double from "../../asset/images/doubleShow.svg";
import single from "../../asset/images/singleShow.svg";
import smBg from "../../asset/images/Ellipse 79.svg";
import star from "../../asset/images/star.svg";
import Button from "../../component/button/Button";
import { Link } from "react-router-dom";

const imageArr = [
  {
    id: 1,
    image: redNike,
  },
  {
    id: 2,
    image: pinkNike,
  },
  {
    id: 3,
    image: greenNike,
  },
  {
    id: 4,
    image: ashNike,
  },
  {
    id: 5,
    image: halfShow,
  },
];

function Listing() {
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.bgShoe}>
          <div className={style.smBg}>
            <img src={smBg} alt="small shoe lace" />
          </div>
          <div className={style.shoeShow}>
            <img src={single} alt="single" />
            <img src={double} alt="double" />
            <img src={feet} alt="feet" />
          </div>
          <div className={style.detailsShip}>
            <div className={style.shoeDetails}>
              <div className={style.description}>
                <h2>Nike Air Max 9 </h2>
                <h4>UNISEX SHOE</h4>
              </div>
              <span>$140.55</span>
              <div className={style.starReview}>
                <div className={style.star}>
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
                <span>( 12 Reviews )</span>
              </div>
              <div className={style.ship}>
                <h3>Free delivery to LEKKI-AJAH</h3>
                <p>Also available in</p>
                <div className={style.color}>
                  <div className={style.red}></div>
                  <div className={style.purple}></div>
                  <div className={style.green}></div>
                  <div className={style.lightBlue}></div>
                  <div className={style.deepBlue}></div>
                </div>
                <div className={style.share}>
                  <p>Share Product</p>
                  <img src={share} alt="share" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.size}>
          <h4>Sizes available</h4>
          <div className={style.numbers}>
            <span className={style.sizeNumber}>35</span>
            <span className={style.sizeNumber}>32</span>
            <span className={style.sizeNumber}>34</span>
            <span className={style.sizeNumber}>36</span>
            <span className={style.sizeNumber}>38</span>
            <span className={style.sizeNumber}>42</span>
            <span className={style.sizeNumber}>44</span>
            <span className={style.sizeNumber}>45</span>
            <span className={style.sizeNumber}>48</span>
          </div>
          <div className={style.btn}>
            <Link to="/cart">
              <Button content="Add to Cart" />
            </Link>
          </div>
        </div>
        <div className={style.otherProducts}>
          <h3>Other products from this brand</h3>
          <div className={style.imageRender}>
            {imageArr.map((image) => {
              return <ImageRender image={image} key={image.id} />;
            })}
            <div className={style.eclipse}>
              <img className={style.arrowRight} src={arrow} alt="Arrow right" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.ProdDetails}>
        <div className={style.ProdDetailsDescription}>
          <div>
            <h2>Product details</h2>
            <div className={style.details}>
              <p>
                Nike Air Max 9<br></br> <span>AIR AS A STATE OF MIND</span>.
                <br></br> Step into a new realm of Air with the Nike Air Max
                Zephyr. It brings the soft cushioning of visible Air to the
                upper, adding a modern twist to the shoe's futuristic design.
                Splashes of no-sew skins and stitched overlays keep heritage
                athletics DNA while super-breathable tactile mesh and visible
                Air accents add to the sleek design.
              </p>
            </div>
          </div>
          <div className={style.discount}>
            <div className={style.discountD}>
              <p>Discount</p>
            </div>
            <div className={style.discountnumber}>35%</div>
          </div>
        </div>
      </div>
    </div>
  );

  function ImageRender({ image }) {
    return (
      <div>
        <img className={style.imageFlex} src={image.image} alt={image.id} />
      </div>
    );
  }
}

export default Listing;
