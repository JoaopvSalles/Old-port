import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

import { Container } from "./styles";

export function Footer() {
    return(
        <Container>
            <div>
                <main>
                <p>
                    Email para contato: joaopaulovs2000@gmail.com
                </p>
                <p>
                    Feito com 💙 por João Paulo
                </p>
                </main>
                <nav>
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-vecchio-175934130/" target="_blank"><img src={linkedin}/></a>
                    <a href="https://github.com/JoaopvSalles" target="_blank"><img src={github}/></a>
                </nav>
            </div>
        </Container>
    )
}