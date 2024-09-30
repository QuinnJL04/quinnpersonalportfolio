import styles from "./Hero.module.css"

import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Quinn</h1>
            <p className={styles.description}>I’m a 3rd-year Computer Science student at Northeastern with a focus on AI/ML. I’ve spent six months as a co-op working with C#, Node.js, and SQL, though Java, Python, and SQL are where I’m most at home. I like to keep things practical and straightforward—unless it’s deciding what to order for lunch. Feel free to reach out if you want to chat or work together!</p>
            <a href="mailto:myemail@email.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/quinnn.jpg")} alt="Hero image of me" className={styles.heroImg}/>
        <div className= {styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;
}