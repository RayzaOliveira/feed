import { Header } from "./components/Header";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div>
        <Sidebar />
        <main>
          <Post
            author="Rayza Rios"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis deleniti rem minima repellat odio cupiditate aliquid expedita quia? Numquam nostrum eum nihil doloremque reiciendis ad esse doloribus soluta dicta voluptatum!"
          />

          <Post author="Vitor Rios" content="Post legal" />
        </main>
      </div>
    </div>
  );
}
