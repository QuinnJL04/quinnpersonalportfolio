import styles from "./Hero.module.css"

import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Quinn</h1>
            <p className={styles.description}>I'm a 3rd year CS + AI/ML Concentration student at Noreastern Unithversity. I have 6 months of co-op experience working with C#, Node.js, and SQL, though my strongest languages are Java, Python, and SQL. Reach out if you'd like to learn more!</p>
            <a href="mailto:myemail@email.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/quinnn.jpg")} alt="Hero image of me" className={styles.heroImg}/>
        <div className= {styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;
}