import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
    display: flex;
    gap: 15px;
    flex-direction: row;

    margin-top: 15px;
    padding-top: 15px;

    border-top: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
`;

type FooterProps = {
    todoItems?: number;
    doneItems?: number;
};

export const Footer = (props: FooterProps) => {
    const { todoItems, doneItems } = props;

    return (
        <FooterStyled>
            <span>Todo: {todoItems ?? 0}</span>
            <span>Done: {doneItems ?? 0}</span>
        </FooterStyled>
    );
};
