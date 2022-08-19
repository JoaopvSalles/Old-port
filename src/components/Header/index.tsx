import { Container } from "./styles"

export function Header() {
    return(
        <Container>
            <div>
                <h1>
                    <a href="">Logo</a>
                </h1>
                <nav>
                    <a href="">Inicio</a>
                    <a href="">Sobre mim</a>
                    <a href="">Projetos</a>
                    <a href="">Habilidades</a>
                </nav>
            </div>
        </Container>
    )
}