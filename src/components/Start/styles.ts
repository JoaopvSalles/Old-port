import styled from "styled-components";

export const Container = styled.div`
    display: block;
    background-color: var(--blue-700);

    height: 950px;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        height: 950px;
        width: 1280px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            color: var(--white);

            strong {
                color: pink;
            }
        }
    }
`