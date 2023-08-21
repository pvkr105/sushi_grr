import Image from "next/image";
import styles from "../styles/SushiCard.module.css";
import Link from "next/link";

const SushiCard = ({ sushi }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${sushi._id}`} passHref>
        <Image src={sushi.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{sushi.title}</h1>
      <span className={styles.price}>${sushi.prices[0]}</span>
      <p className={styles.desc}>{sushi.desc}</p>
    </div>
  );
};

export default SushiCard;
