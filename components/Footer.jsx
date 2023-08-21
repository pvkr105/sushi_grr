import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            If You Love Sushi Then You’ll Love Us....
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR PARTNER RESTAURANTS</h1>
          <p className={styles.text}>
            927 Cherry St SE, 
            <br /> Grand Rapids, MI 49506
            <br /> (123) 456-7891
          </p>
          <p className={styles.text}>
            1144 E Paris Ave SE # 1A,
            <br /> Grand Rapids, MI 49546
            <br /> (616) 123-4567
          </p>
          <p className={styles.text}>
            1501 E Beltline Ave NE,
            <br /> Grand Rapids, MI 49525
            <br /> (616) 345-6789
          </p>
          <p className={styles.text}>
            2901 Breton Rd SE,
            <br /> Grand Rapids, MI 49512
            <br /> (616) 765-0732
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
