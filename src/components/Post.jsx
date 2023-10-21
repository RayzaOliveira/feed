import styles from "./Post.module.css";

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://i.pinimg.com/564x/f9/11/5a/f9115aa92ce465f2c02b277fbae50097.jpg"
          />
          <div className={styles.authorInfo}>
            <strong> Vitor Rios</strong>
            <span>Software Enginieer</span>
          </div>
        </div>
        <time title="11 de Janeiro às 08:30h" dateTime="2022-06-11 08:13:00">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉<a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
};
