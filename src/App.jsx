import { Header } from "./components/Header";
import { Post } from "./Post";

import "./styles.css";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Rayza Rios"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis deleniti rem minima repellat odio cupiditate aliquid expedita quia? Numquam nostrum eum nihil doloremque reiciendis ad esse doloribus soluta dicta voluptatum!"
      />

      <Post author="Vitor Rios" content="Post legal" />
    </div>
  );
}
