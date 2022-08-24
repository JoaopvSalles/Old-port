import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--blue-700);
    border-radius: 15px;
    border: 3px solid rgba(114,114,126,.2);


    margin: auto;
    margin-top: 12rem;

    height: 37.5rem;
    width: 80%;
    display: flex;
    align-items: center;
    
    div {
        max-width: 1120px;
        width: 90%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            font-size: 2rem;
            color: var(--white);

            strong {
                font-size: 4.25rem;
                color: var(--cyan);
            }
        }

        img {
            width: 20rem;
            height: 20rem;
            border-radius: 50%;
            border: 3px solid var(--cyan);
        }
    }
`