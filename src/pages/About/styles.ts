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

    div {
        margin: 0 auto;
        padding-top: 1rem;
        width: 50%;

        h2 {
            text-align: center;
            font-size: 3.75rem;
            margin-bottom: 4rem;

            span {
                color: var(--cyan);
            }
        }

        p {
            font-size: 1.6rem;
            text-align: center;
        }
    }


    // ===== Responsivo ===== //
    @media (max-width: 1650px) {
        div {

            h2 {
                font-size: 3.5rem;
            }

            p {
                text-align: start;
            }
        }
    }

    @media (max-width: 1024px) {
        width: 90%;
        
        div {
            width: 90%;
            padding: 1rem;

            h2 {
                font-size: 2rem;
                margin-bottom: 2rem;
            }

            p {
                font-size: 1.3rem;
                text-align: start;
            }
        }
    }
`