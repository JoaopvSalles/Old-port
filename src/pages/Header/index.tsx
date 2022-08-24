import logo from '../../assets/logo.png'

import { Container } from "./styles"

export function Header() {
    return(
        <Container>
            <div>
                <h1>
                    <a href="#">
                        <img src={logo} alt="" />
                    </a>
                </h1>
                <nav>
                    <a href="#start">Inicio</a>
                    <a href="#about">Sobre mim</a>
                    <a href="#projects">Projetos</a>
                    <a href="#techs">Tecnologias</a>
                </nav>
            </div>
        </Container>
    )
}