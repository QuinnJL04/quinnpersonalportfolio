import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/totoro.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Industry Experience</h3>
              <p>
                I'm experienced in fullstack development and building, testing, and deploying scalable RESTful APIs. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Favorite Coding Language</h3>
              <p>
                My favorite language is Python! 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Fun Facts</h3>
              <p>
                I have a cavapoo named Bean. I like to rock climb (V6). I love comics (DC/Marvel) and anime (One Piece). My main goal in life is to just travel I want to see all the world has to offer.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};