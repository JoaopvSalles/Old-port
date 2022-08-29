import react from "../../assets/react.png"
import typescript from "../../assets/typescript.png"
import js from "../../assets/js.png"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import git from "../../assets/git.png"

import { Container } from "./styles";

export function Techs() {
    return(
        <Container id="techs">
            <div className="card">
                <h2><span>&lt;</span> Tecnologias <span>/&gt;</span></h2>
                <div className="img">
                    <img src={react} />
                    <img src={typescript} />
                    <img src={js} />
                    <img src={html} />
                    <img src={css} />
                    <img src={git} />
                </div>
            </div>
        </Container>
    )
}