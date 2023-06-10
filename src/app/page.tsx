import clsx from "clsx";
import Image from "next/image";
import { headingFont } from "~/app/fonts";
import { CartIcon } from "~/icons/cart-icon";
import productMobileImage from "~/public/images/image-product-mobile.jpg";
import classes from "./page.module.scss";

export default function Home() {
  return (
    <main className={classes["main"]}>
      <Image src={productMobileImage} alt="" className={classes["image"]} />

      <div className={classes["body"]}>
        <h1 className={classes["heading"]}>Perfume</h1>
        <h2 className={clsx(headingFont.className, classes["title"])}>
          Gabrielle Essence Eau De Parfum
        </h2>
        <p className={classes["subtitle"]}>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer Creator for the House of CHANEL.
        </p>
        <div className={classes["price"]}>
          <span className={clsx(headingFont.className, classes["new"])}>
            $149.99
          </span>
          <span className={classes["old"]}>$169.99</span>
        </div>
        <button className={classes["button"]}>
          <CartIcon /> <span>Add to cart</span>
        </button>
      </div>
    </main>
  );
}
