import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 5.3125rem;
    margin: auto;
    border-radius: 0 0 15px 15px;
    display: flex;
    justify-content: center;

    background-color: var(--gray-700);
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 15%);

    div {
        width: 1280px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
            cursor: pointer;

            a {
                text-decoration: none;
                color: var(--white);
            }
        }
    }

    nav {
        display: flex;
        gap: 2.5rem;

        a {
            text-decoration: none;
            font-size: 1.2rem;
            transition: color .2s,transform .2s;
            color: var(--white);
        }
    }
    
`