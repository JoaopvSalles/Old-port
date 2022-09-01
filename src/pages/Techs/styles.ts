import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--blue-700);
    border-radius: 15px;
    border: 3px solid rgba(114,114,126,.2);

    margin: auto;
    margin-top: 12rem;

    min-height: 37.5rem;
    width: 80%;
    display: flex;

    color: var(--white);

    div.card {
        margin: 0 auto;
        padding-top: 1rem;
        width: 50%;

        h2 {
            text-align: center;
            font-size: 3.75rem;
            margin-bottom: 5rem;

            span {
                color: var(--cyan);
            }
        }

        div.img {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 5rem;


            img {
                height: 6rem;
                width: 6rem;
                margin: auto;
            }
        }
    }


    // ===== Responsivo ===== //
    @media (max-width: 1024px) {

        div.card {
            width: 90%;
            padding: 1rem;

            h2 {
                font-size: 2.2rem;
                margin-bottom: 3rem;
            }

            div.img {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 4rem;
            }
        }
    }
`