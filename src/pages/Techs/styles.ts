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
    @media (max-width: 1650px) {
        div.card {
            width: 60%;

            h2 {
                font-size: 3.5rem;
            }
        }
    }


    @media (max-width: 1024px) {
        width: 90%;

        div.card {
            width: 80%;
            padding: 1rem;

            h2 {
                font-size: 2rem;
                margin-bottom: 4rem;
            }

            div.img {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 4rem;

                img {
                    height: 4rem;
                    width: 4rem;
                }
            }
        }
    }
`