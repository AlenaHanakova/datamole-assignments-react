import React from "react";
import styled from "styled-components";
import { ButtonProps } from "../types";

const StyledButton = styled.button<{ $variant: ButtonProps["variant"] }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    padding: 6px 14px;
    border: 1px solid rgba(0, 0, 0, 0.2); /* ✅ Subtle border */
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    background: white;
    color: inherit;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08); /* ✅ Soft shadow */

    &:hover {
        border-color: rgba(0, 0, 0, 0.4);
        background-color: rgba(0, 0, 0, 0.03); /* ✅ Slight hover effect */
    }

    &:active {
        opacity: 0.8;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

export const Button: React.FC<ButtonProps> = ({ onClick, children, disabled, className, type = "button" }) => {
    return (
        <StyledButton onClick={onClick} disabled={disabled} className={className} type={type}>
            {children}
        </StyledButton>
    );
};
