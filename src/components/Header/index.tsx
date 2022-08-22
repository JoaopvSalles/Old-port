import { Container } from "./styles"

export function Header() {
    return(
        <Container>
            <div>
                <h1>
                    <a href="#">
                        <img src="../assets/logo.png" alt="img" />
                    </a>
                </h1>
                <nav>
                    <a href="#start">Inicio</a>
                    <a href="#about">Sobre mim</a>
                    <a href="#projects">Projetos</a>
                    <a href="#skills">Habilidades</a>
                </nav>
            </div>
        </Container>
    )
}