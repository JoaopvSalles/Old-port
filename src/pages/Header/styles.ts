import styled from "styled-components";

export const Container = styled.header`
    top: 0;
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 5.3125rem;
    border-radius: 0 0 15px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.9;

    background-color: var(--gray-700);
    border-bottom: 3px solid rgba(114,114,126,.2);
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 15%);
    
    div {
        max-width: 1280px;
        width: 90%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
            cursor: pointer;

            a {
                text-decoration: none;
                color: var(--white);
                font-family: 'Monoton', cursive;
            }
        }

        nav {
        display: flex;
        gap: 2.5rem;

            a {
                text-decoration: none;
                font-size: 1.4rem;
                transition: color .2s,transform .2s;
                color: var(--white);

                &:hover {
                    color: var(--cyan);
                    transition: 200ms;
                }
            }
        }
    }
    


    // ===== Responsivo ===== //
    @media (max-width: 1024px) {
        /* ::after {
            content: '≡';
            position: fixed;
            z-index: 2;
            top: 1rem;
            right: 1rem;
            background: var(--blue-700);
            color: white;
            font-size: 3rem;
            line-height: 3rem;
            width: 3rem;
            height: 3rem;
            text-align: center;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 0 5px 10px 0 rgb(0 0 0 / 50%);
            border: 2px solid rgba(114,114,126,.2);
        } */

        div {

            h1 {
                a {
                    font-size: 1.5rem;
                }
            }

            nav {
                a {
                    font-size: 1rem;
                }
            }
        }
    }
`