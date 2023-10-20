import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={styles.Sidebar}>
      <img
        className={styles.cover}
        src="https://i.pinimg.com/564x/06/81/fd/0681fdcf28199ef6b729f1588131214c.jpg"
      ></img>
      <div className={styles.profile}>
        <strong>Rayza</strong>
        <span>Software Engineer</span>
      </div>
      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
};
