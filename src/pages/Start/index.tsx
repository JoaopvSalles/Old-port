import profile from '../../assets/profile.jpg'

import { Container } from "./styles";

export function Start() {
    return(
        <Container id="start">
            <div>
                <span>
                    <nav>
                        Olá!👋🏻 Me chamo <br />
                        <strong>João Paulo</strong> <br />
                        Desenvolvedor Front-end. <br />
                    </nav>
                    <a href="">LinkedIn</a> <br />
                    <a href="">Github</a>
                </span>
                <img src={profile} alt="Foto" />
            </div>
        </Container>
    )
}