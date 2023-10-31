/* eslint-disable react/prop-types */
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

import { ThumbsUp, Trash } from "@phosphor-icons/react";

export const Comment = ({ content, onDeleteComment }) => {
  const [likeCount, setLikeCount] = useState(0);
  function handleDeleteComment() {
    // Padrão de nomenclatura:onDeleteComment, para indicar função enviada como propriedade, função disparada pela ação do usuário.
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://i.pinimg.com/564x/e9/8d/d1/e98dd1c06088cde75fdeef76783bbd4e.jpg" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mel</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>
            {/* Padrão de nomenclatura: handle, para indicar ação dp usuário */}
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          {/*handleLikeComment, é a função, enquanto handleLikeComment(), seria a execução da função. Assim todos eventos do React, como onSubmit, onClick etc, recebe uma função. */}
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
