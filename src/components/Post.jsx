/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from "date-fns";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import { useState } from "react";
import styles from "./Post.module.css";
import ptBR from "date-fns/locale/pt-BR";

export const Post = ({ author, publishedAt, content }) => {
  // Estado: variáveis que eu quero que o componente monitore
  // const[valor da variável, função que altera o valor da variável] = hook() ou método do react;
  const [comments, setComments] = useState(["Post muito bacana, hein?!"]);

  const [newCommentText, setNewCommentText] = useState("");

  /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat */
  const publishedDateFormatted = format(
    publishedAt,
    // https://date-fns.org/v2.30.0/docs/format
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  //handle: um padrão. Função disparada pela ação do usuário
  function handleCreateNewComment() {
    event.preventDefault();

    //Imutabilidade: não passo somente o quero inserir, mas sim o novo valor
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid() {
    console.log(event);
    // setCustomValidity(), método para modificar o nome
    //target, elemento onde aconteceu o evento, nesse caso a textArea
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function deleteComment(commentsToDelete) {
    // https://www.w3schools.com/jsref/jsref_filter.asp
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentsToDelete;
    });
    //Imutabilidade: As variáreis não sofrem mutação (nunca alteramos a variável na memoria). Nos criamos um novo valor (um novo espaço na memória)
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {/* map, percorre e retorna algo
          line, pq em cada linha ele vai fazer algo */}
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              // A key, deve ser única e colocada no primeiro elemento HTML
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          {/* disabled, recebe true ou false */}
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {/* eslint-disable-next-line no-unused-vars */}
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
};

// Programação Imperativa: O que deve ser feito (passo-a-passo);
// Programação Declarativa: Quais as condições para eu ter o resultado final.
