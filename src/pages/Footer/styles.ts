import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--blue-700);
    border-top: 3px solid rgba(114,114,126,.2);
    border-radius: 15px 15px 0 0;

    width: 100%;
    height: 5.3125rem;

    margin-top: 12rem;

    color: var(--white);

    div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        
        width: 80%;
        margin: 1rem auto;

        text-align: center;
        align-items: center;

        main {
            display: grid;
            grid-template-rows: 1fr 1fr;

            gap: 0.5rem;
        }

        nav {
            display: flex;
            gap: 2rem;

            margin: auto;

            a {

                img {
                    height: 3rem;
                    width: 3rem;
                }
            }
        }
    }
`