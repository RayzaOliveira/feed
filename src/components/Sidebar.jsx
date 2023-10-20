import { PencilLine } from "@phosphor-icons/react";

import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://i.pinimg.com/564x/06/81/fd/0681fdcf28199ef6b729f1588131214c.jpg"
      ></img>
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://i.pinimg.com/564x/4f/81/4e/4f814ec276383bb9be4daa6bc5bddf0e.jpg"
        />
        <strong>Rayza</strong>
        <span>Software Engineer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
