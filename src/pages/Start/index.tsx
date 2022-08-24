import profile from '../../assets/profile.jpg'

import { Container } from "./styles";

export function Start() {
    return(
        <Container id="start">
            <div>
                <span>
                    Olá!👋🏻 Me chamo <br />
                    <strong>João Paulo</strong> <br />
                    Desenvolvedor Front-end.
                </span>
                <img src={profile} alt="Foto" />
            </div>
        </Container>
    )
}