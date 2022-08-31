import dtmoney from '../../assets/projetos-img/dtmoney.gif'

import { Container } from "./styles";

export function Projects() {
    return(
        <Container id="projects">
            <div>
                <h2><span>&lt;</span> Projetos <span>/&gt;</span></h2>
                <nav>
                    <a href="https://github.com/JoaopvSalles/dtmoney" target="_blank">
                        <img src={dtmoney} />
                    </a>
                    <a href="#projects">Em breve</a>
                    <a href="#projects">Em breve</a>
                    <a href="#projects">Em breve</a>
                    <a href="#projects">Em breve</a>
                    <a href="#projects">Em breve</a>
                </nav>
                <p>Ver mais</p>
            </div>
        </Container>
    )
}