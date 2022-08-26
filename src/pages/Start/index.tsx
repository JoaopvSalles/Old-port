import profile from '../../assets/profile.jpg'

import { Container } from "./styles";

export function Start() {
    return(
        <Container id="start">
            <div>
                <span>
                    <nav>
                        Olá! 👋🏻 Me chamo <br />
                        <strong>João Paulo</strong> <br />
                        Desenvolvedor Front-end. <br />
                    </nav>
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-vecchio-175934130/" target="_blank">LinkedIn</a> <br />
                    <a href="https://github.com/JoaopvSalles" target="_blank">Github</a>
                </span>
                <img src={profile} alt="Foto" />
            </div>
        </Container>
    )
}