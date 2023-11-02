import { format, formatDistanceToNow } from "date-fns";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from "./Post.module.css";
import ptBR from "date-fns/locale/pt-BR";

interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}
export interface Content {
  type: "paragraph" | "link";
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

// Para {}, em objetos, tem que falar o tipo do objeto inteiro, não poder ser cada elemento do objeto separado
export const Post = ({ author, publishedAt, content }: PostProps) => {
  // Estado: variáveis que eu quero que o componente monitore
  // const[valor da variável, função que altera o valor da variável] = hook() ou método do react;
  const [comments, setComments] = useState([
    "Lembre-se, cada truque merece um petisco! 🍖",
  ]);

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
  // Todas as funções que sao disparadas, por meio de eventos onClick, onChange, on...automaticamente o HTML, passa para essas funções, o "event" como primeiro parâmetro.
  // FormEvent, pq foi disparado pelo Form
  function handleCreateNewComment(event: FormEvent) {
    //O typeScript, não sabe oque o event faz
    event.preventDefault();

    //Imutabilidade: não passo somente o quero inserir, mas sim o novo valor
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  // ChangeEvent, pq utilizado o onChange
  // <HTMLTextAreaElement>, é um generic, semelhante  um parâmetro, foi utilizado pq o onChange, foi disparado por uma textArea.
  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    console.log(event);
    // setCustomValidity(), método para modificar o nome
    //target, elemento onde aconteceu o evento, nesse caso a textArea
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  // deleteComment é void no typeScrip, porque não retorna nada, apenas faz alguma coisa
  // Porem a função onDeleteComment, recebe um parâmetro que é uma string
  function deleteComment(commentsToDelete: string) {
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
          placeholder="Deixe seu comentário"
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
