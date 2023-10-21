/* eslint-disable react/prop-types */
import styles from "./Avatar.module.css";
// ex:
// const  user= {name: Rayza}
// const {name} = user;
// Neste caso, estamos desestruturando 'hasBorder' e 'src'.
export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      // Se 'hasBorder' for true (ou não fornecido, pois tem um valor padrão de true), a imagem terá a classe 'styles.avatarWithBorder'.
      // Caso contrário, terá a classe 'styles.avatar'.
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
