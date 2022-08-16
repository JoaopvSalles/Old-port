import { Container } from "./styles"

export function Header() {
    return(
        <Container>
            <div>
                <img src="../../assets/logo.png" alt="logo" />
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="">Inicio</a>
                    </li>
                    <li>
                        <a href="">Sobre mim</a>
                    </li>
                    <li>
                        <a href="">Projetos</a>
                    </li>
                    <li>
                        <a href="">Habilidades</a>
                    </li>
                </ul>
            </nav>
        </Container>
    )
}