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
        width: 65%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            font-size: 2rem;
            color: var(--white);

            nav {
                margin-bottom: 50px;

                strong {
                    font-size: 4.25rem;
                    color: var(--cyan);
                }
            }

            a {
                display: block;

                text-decoration: none;
                color: var(--white);
                background-color: var(--blue-400);
                border-radius: 40px;

                text-align: center;
                padding: 1rem 0;

                &:hover {
                    background-color: var(--cyan);
                    color: var(--gray-700);

                    opacity: 0.9;
                    transition: 500ms;
                }
            }
        }

        img {
            width: 22rem;
            height: 22rem;
            border-radius: 50%;
            border: 3px solid var(--cyan);
        }
    }
`