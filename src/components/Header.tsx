import styles from "./Header.module.css";

import dogLogo from "../assets/dog-feed.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={dogLogo} alt="Logotipo do dog feed"></img>
    </header>
  );
}
