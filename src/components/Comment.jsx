import styles from "./Comment.module.css";

import { ThumbsUp, Trash } from "@phosphor-icons/react";

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <img src="https://i.pinimg.com/564x/ba/4b/5d/ba4b5d36d494cc2cb0084083023aa60f.jpg" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Maya Samoieda</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
