import styles from "./Avatar.module.css";

interface AvatarProps {
  // ?, quando a propriedade é opcional
  hasBorder?: boolean;
  src: string;
  alt?: string;
}

// ex:
// const  user= {name: Rayza}
// const {name} = user;
// Neste caso, estamos desestruturando 'hasBorder' e 'src'.
export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {
  return (
    <img
      // Se 'hasBorder' for true (ou não fornecido, pois tem um valor padrão de true), a imagem terá a classe 'styles.avatarWithBorder'.
      // Caso contrário, terá a classe 'styles.avatar'.
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}
