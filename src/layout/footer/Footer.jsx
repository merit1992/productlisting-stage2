import style from "./Footer.module.css";
import logo from "../../asset/images/logo.svg";
import phone from "../../asset/images/smartphone.svg";
import email from "../../asset/images/mail.svg";
import facebook from "../../asset/images/facebook.svg";
import twitter from "../../asset/images/twitter.svg";
import pintrest from "../../asset/images/pinterest.svg";
import instagram from "../../asset/images/instagram.svg";
import linkedln from "../../asset/images/linkedln.svg";
import arrow from "../../asset/images/arrowup.svg";

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <img className="logo-shoe" src={logo} alt="logo" />
          <p className="craft">Craft Lux</p>
        </div>
        <hr />
        <div className={style.footCatFlex}>
          <div className={style.category}>
            <h2 className={style.heading}>Category</h2>
            <ul className={style.unotherList}>
              <li>
                <a className={style.linkList} href="#men">
                  men
                </a>
              </li>
              <li>
                <a className={style.linkList} href="#women">
                  women
                </a>
              </li>
              <li>
                <a className={style.linkList} href="#children">
                  children
                </a>
              </li>
            </ul>
          </div>
          <div className={style.about}>
            <h2 className={style.heading}>about us</h2>
            <ul className={style.unotherList}>
              <li>
                <a className={style.linkList} href="#story">
                  our story
                </a>
              </li>
              <li>
                <a className={style.linkList} href="#partners">
                  partners
                </a>
              </li>
              <li>
                <a className={style.linkList} href="#carears">
                  carears
                </a>
              </li>
              <li>
                <a className={style.linkList} href="#team">
                  our teams
                </a>
              </li>
            </ul>
          </div>
          <div className={style.help}>
            <h2 className={style.heading}>Help</h2>
            <ul className={style.unotherList}>
              <li>
                <a className={style.linkList} href="#terms">
                  terms & condition
                </a>
              </li>
              <li>
                <a className={style.linkList} href="#support">
                  support
                </a>
              </li>
              <li>
                <a className={style.linkList} href="#privacy">
                  privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div className={style.contact}>
            <h2 className={style.heading}>Contact Us</h2>
            <div className={style.phone}>
              <img src={phone} alt="phone" />
              <span>+234 8164323697</span>
            </div>
            <div className={style.mail}>
              <img src={email} alt="email" />
              <span>Hello@craftlux.org</span>
            </div>
            <p>Subscribe to our newsletter</p>
            <form className={style.formSub}>
              <input type="text" placeholder="Your email" />
              <button>subscribe</button>
            </form>
          </div>
        </div>
        <hr />
        <div className={style.socialCopyright}>
          <div className={style.social}>
            <img src={facebook} alt="facebook" />
            <img src={linkedln} alt="linkedln" />
            <img src={twitter} alt="twitter" />
            <img src={pintrest} alt="pinterest" />
            <img src={instagram} alt="instagram" />
          </div>
          <div className={style.copyright}>
            <p>copyright &copy; 2024 Craft Lux. All rights reserved</p>
            <div className={style.arrow}>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
