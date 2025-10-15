import "../styles/pages/_home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <section className="main-home">
        <article className="intro">
          <h1>Bienvenue chez West Dev</h1>
          <p>
            Après avoir terminé une formation de développeur web à la 3W
            Academy, je lance mon activité de freelance. <br /> Vous trouverez
            sur ce site mes projets actuels et passés, ainsi que des
            informations me concernant.
          </p>
          <p>
            Mon acitivité principale est le développement front-end, mais je
            suis également compétent en back-end et en gestion de bases de
            données. <br />
            Je me forme sur le CRM Zoho et plus particulièrement Zoho Creator
            pour développer des applications personnalisées pour les
            entreprises.
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
    </main>
  );
}

export default Home;
