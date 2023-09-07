import React from "react";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <Logo />
        <h3>Hello</h3>
        <button>Clic</button>
      </div>
      <div className="home-content">
        <p>
          <span>
            Je suis Kyle, développeur front-end passionné par la perfection et
            l'esthétique.
          </span>
          <span>
            J'adore créer des interfaces web fonctionnelles et belles, que ce
            soit dans le monde du code
          </span>
          <span>
            ou de la vie quotidienne. Ma philosophie mêle technologie et art,
            car pour moi, la programmation
          </span>
          <span>
            est une forme d'expression créative. Écouter et comprendre les
            besoins de mes collaborateurs
          </span>
          <span>
            est mon approche pour créer des projets qui flirtent avec le domaine
            artistique.
          </span>
          <span>
            Si vous recherchez une touche de magie visuelle, je suis là pour
            transformer
          </span>
          <span>vos idées en réalité à travers le code et la créativité</span>
        </p>
      </div>
      <div className="home-footer"></div>
    </div>
  );
};

export default Home;
