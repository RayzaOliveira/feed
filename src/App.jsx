/* eslint-disable react/jsx-key */
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

//Iteração: é o processo de repetir uma série de ações várias vezes. Geralmente, em programação, isso é feito com estruturas como loops (for, while, etc.), que permitem executar um bloco de código repetidamente até que uma condição específica seja atendida.
//author: {avatarUrl: '', name: '', role: ''}
//publishedAt: Date
//content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://i.pinimg.com/564x/f9/11/5a/f9115aa92ce465f2c02b277fbae50097.jpg",
      name: "Toddy",
      role: "Pet da Carol",
    },
    content: [
      { type: "paragraph", content: "🚀 Novidade aumiga! 🚀🐾" },
      {
        type: "paragraph",
        content:
          "Hoje é dia de desafio pet! 🐕💥 Fale o truque mais impressionante do seu peludo! 🎩✨ Será um giro? Um 'dê a pata'? Ou talvez um 'finge de morto' super dramático? 😆",
      },
      { type: "link", content: "#CãesDivertidos#TruquesCaninos#DesafioPet" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://i.pinimg.com/564x/d6/2d/7c/d62d7ce0136d1e3ed4027b1c2ed0fcf8.jpg",
      name: "Jolie",
      role: "Pet do Vitor",
    },
    content: [
      { type: "paragraph", content: "🎉🐕 Festa da Fantasia Canina! 🐕🎉" },
      {
        type: "paragraph",
        content:
          "Hoje é dia de carnaval de quatroPatas e queremos ver a criatividade da galera! 🌈👑 Vamos lá, aumigos, é hora de vestir aquelas fantasias divertidas!",
      },
      {
        type: "link",
        content: "#FoliaCanina#CarnavalDeQuatroPatas#FantasiaPet 🎭🐾",
      },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
