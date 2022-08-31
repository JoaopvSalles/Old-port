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
`