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
        width: 70%;

        h2 {
            text-align: center;
            font-size: 3.75rem;
            margin-bottom: 3rem;

            span {
                color: var(--cyan);
            }
        }

        nav {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 1rem;
            text-align: center;

            a {
                background-color: var(--gray-200);
                border-radius: 20px;
                margin: auto;
                height: 11rem;
                width: 18rem;
                
                color: var(--gray-700);
                font-size: 1.5rem;
                text-decoration: none;
                font-family: 'Kanit', sans-serif;

                &:hover {
                    cursor: not-allowed;
                }

                img {
                    height: 11rem;
                    width: 18rem;
                    border-radius: 15px;

                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }

        p {
            text-align: center;

            margin: auto;
            margin-top: 2rem;

            background-color: var(--gray-700);
            border-radius: 20px;

            padding: 0.3rem;
            height: 1.8rem;
            width: 6.25rem;

            cursor: pointer;

            &:hover {
                background-color: black;

                transition: 200ms;
            }
        }
    }


    // ===== Responsivo ===== //
    @media (max-width: 1650px) {

        div {
            width: 85%;

            h2 {
                font-size: 3.5rem;
            }

            nav {
                
                a {
                    width: 15rem;

                    img {
                        width: 15rem;
                    }
                }
            }
        }
    }


    @media (max-width: 1024px) {

        div {
            width: 90%;
            padding: 1rem;

            h2 {
                font-size: 2.2rem;
            }

            nav {
                display: flex;
                flex-direction: column;

                a {
                    width: 18rem;

                    img {
                        width: 18rem;
                    }
                }
            }
        }
    }
`