import styles from "../styles/SushiList.module.css";
import SushiCard from "./SushiCard";

const SushiList = ({ sushiList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST SUSHI IN TOWN</h1>
      <p className={styles.desc}>
        Our sushi restaurant is truly exceptional, with an exquisite menu of
        expertly crafted sushi, using only the freshest and highest quality
        ingredients, and served with impeccable presentation; the flavors and
        textures are perfectly balanced, leaving you with a delightful and
        memorable dining experience.
      </p>
      <div className={styles.wrapper}>
        {sushiList.map((sushi) => (
          <SushiCard key={sushi._id} sushi={sushi} />
        ))}
      </div>
    </div>
  );
};

export default SushiList;
