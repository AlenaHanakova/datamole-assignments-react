import styled from "styled-components";
import { ButtonProps } from "../types";

const StyledButton = styled.button<{ $variant?: ButtonProps["variant"] }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    padding: 8px 14px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: white;
    color: inherit;

    &:hover {
        ${({ $variant, theme }) => {
            switch ($variant) {
                case "primary":
                    return `background-color: ${theme.colors.grass3};`; /* ✅ Soft green tint */
                case "secondary":
                    return `background-color: ${theme.colors.olive3};`; /* ✅ Soft olive tint */
                case "danger":
                    return `background-color: ${theme.colors.red3};`; /* ✅ Soft red tint */
                default:
                    return `background-color: rgba(0, 0, 0, 0.05);`; /* ✅ Default light gray */
            }
        }}
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

export const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    disabled,
    className,
    type = "button",
    variant = "primary",
}) => {
    return (
        <StyledButton onClick={onClick} disabled={disabled} className={className} type={type} $variant={variant}>
            {children}
        </StyledButton>
    );
};
