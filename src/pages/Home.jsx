import "../styles/pages/_home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section className="main-home">
        <article className="intro">
          <h1>Bienvenue sur mon portfolio</h1>
          <p>
            Actuellement en formation à la 3W Academy, je suis en recherche de
            stage.
          </p>
          <p>
            Vous trouverez sur ce site mes projets personnels et ceux accomplis
            durant ma formation.
          </p>
          <p>
            Mon projet le plus abouti est le portfolio que vous consultez
            actuellement.
          </p>
          <p>
            N'hésitez pas à me contacter pour toute information complémentaire.
          </p>
        </article>
        <div className="cta-buttons">
          <Link to="/contact" className="btn">
            Me contacter
          </Link>
          <Link to="/projects" className="btn">
            Mes projets
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
