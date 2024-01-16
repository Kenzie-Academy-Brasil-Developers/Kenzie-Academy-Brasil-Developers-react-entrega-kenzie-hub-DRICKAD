
import style from "./style.module.scss";

export const NotFoundPage = () => {
    return (
      <main className={style.container}>
        <h1 className="title-1">Error: 404</h1>
        <p className="paragraph">Não possível encontrar a página!</p>
      </main>
    );
  };