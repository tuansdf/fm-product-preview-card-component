import clsx from "clsx";
import { headingFont } from "~/app/fonts";
import { CartIcon } from "~/icons/cart-icon";
import classes from "./page.module.scss";

export default function Home() {
  return (
    <main className={classes["main"]}>
      <picture className={classes["picture"]}>
        <source
          srcSet="/images/image-product-desktop.jpg"
          media="(min-width: 1440px)"
        />
        <img
          loading="lazy"
          decoding="async"
          src="/images/image-product-mobile.jpg"
          alt=""
          className={classes["image"]}
        />
      </picture>

      <div className={classes["body"]}>
        <div>
          <h1 className={classes["category"]}>Perfume</h1>
          <h2 className={clsx(headingFont.className, classes["title"])}>
            Gabrielle Essence Eau De Parfum
          </h2>
        </div>
        <p className={classes["content"]}>
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
