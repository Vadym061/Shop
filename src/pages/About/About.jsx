import React from "react";
import MenImg from "../../image/Banner-Men.jpg";
import WomenImg from "../../image/Banner-Women.jpg";
import AboutImg from "../../image/Banner-Basic.jpg";
import { Link } from "react-router-dom";
import "./about.css";

function About() {
  return (
    <div className="wrapper">
      <main className="about">
        <div className="">
          <h2>Про нас</h2>
          <div className="about__info">
            <img src={AboutImg} alt="banner-man" />
            <p className="about__description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              soluta enim accusantium molestias reiciendis ad sint sunt id amet,
              quibusdam quia laborum earum consequuntur quaerat ea commodi dicta
              porro officia. Nisi dolorem a harum optio sint illo libero aut
              quibusdam amet perferendis! Ducimus eos nisi, nemo, obcaecati
              repudiandae ullam eaque voluptatem id maiores deleniti, at
              architecto ipsa voluptate pariatur officiis modi vero beatae quos
              quia animi magnam commodi. Nostrum animi sed, necessitatibus
              debitis porro quia molestias ab aperiam, quos esse, culpa maiores
              cumque. Aliquid perferendis molestiae provident eveniet quos
              dolorem ullam, voluptas quis. Consequuntur pariatur odio est!
              Blanditiis dolor veniam rerum officiis incidunt error porro,
              aperiam amet quibusdam quo, distinctio qui harum nam at sint quasi
              doloremque pariatur cupiditate labore reiciendis delectus.
              Exercitationem voluptates nulla saepe beatae, veniam illum
              accusamus eum atque, odio amet earum voluptatum non id sapiente
              architecto corporis adipisci voluptate quaerat in odit rem eaque
              inventore assumenda.
            </p>
          </div>
          <ul className="about__categoty">
            <li>
              <Link to="/Жіночий">
                <img src={WomenImg} alt="Banner-woman" />
              </Link>
            </li>
            <li>
              <Link to="/Чоловічий">
                <img src={MenImg} alt="Banner-men" />
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default About;
