import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background-color: ${(props) => props.theme.colors.olive1};
`;
