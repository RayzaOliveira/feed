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
      role: "Software Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://i.pinimg.com/564x/d6/2d/7c/d62d7ce0136d1e3ed4027b1c2ed0fcf8.jpg",
      name: "Maya",
      role: "Software Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
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
