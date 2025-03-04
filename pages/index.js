import styles from "./styles.module.css";

function Home() {
  return (
    <>
      <div className={styles.all}>
        <header className={styles.title}>
          <h1 className={styles.header_title}>Página em construção</h1>
        </header>
        <main className={styles.main}>
          <h1 className={styles.main_title}>Allmood</h1>
          <p className={styles.text}>
            Sabe aquele momento em que você quer aproveitar algum conteúdo, mas
            passa <b className={styles.detail}>mais tempo escolhendo</b> do que{" "}
            <b className={styles.detail}>
              <u>realmente</u>
            </b>{" "}
            aproveitando? Ou quando começa um filme e percebe que{" "}
            <b className={styles.detail}>não era</b> bem o que queria?
          </p>
          <p className={styles.text}>
            O <b className={styles.detail}>Allmood</b> vem para{" "}
            <u className={styles.detail_underline}>resolver</u> isso.
          </p>
          <p className={styles.text}>
            Com base no seu humor e no que você deseja consumir, fazemos
            recomendações <b className={styles.detail}>certeiras</b> de filmes,
            séries e muito mais. Basta responder algumas perguntas rápidas e
            deixar que a gente te guie para a escolha perfeita.
          </p>
          <p className={styles.text}>
            Por enquanto, estamos começando com filmes e séries, mas o Allmood
            vai muito além. Em breve, também indicaremos livros, mangás,
            restaurantes, viagens e muito mais – tudo de acordo com o seu mood
            do momento.
          </p>
          <p className={styles.text}>
            <b className={styles.detail}>
              🚀 Em breve, você nunca mais vai perder tempo escolhendo o que
              assistir!
            </b>
          </p>
        </main>
        <footer className={styles.footer}>
          <a
            className={styles.main_button}
            href="mailto:lucas.rodrigues.35065@gmail.com"
            target="_blank"
          >
            Converse com o Dev
          </a>
          <a
            className={styles.secondary_button}
            target="_blank"
            href="https://github.com/lucas-35065/o-que-assistir"
          >
            Contribua com o projeto
          </a>
        </footer>
      </div>
    </>
  );
}

export default Home;
