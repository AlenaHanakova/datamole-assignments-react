import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import styled from "styled-components";

import { Input } from "./Input";
import { Button } from "../Button";

const FormStyled = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    padding: 10px;
    gap: 10px;
    border-radius: 6px;
    background: white;
`;

const StyledInput = styled(Input)`
    flex-grow: 1;
    padding: 8px 12px;
    border: 0.5px solid rgba(110, 101, 101, 0.2);
    border-radius: 4px;
    font-size: 14px;

    &:focus {
        outline: none;
        border-color: #666;
        box-shadow: 0px 2px 4px rgba(72, 70, 70, 0.1);
    }
`;

const Buttons = styled.div`
    display: flex;
    gap: 6px;
    justify-content: flex-end;
    min-width: 80px;
    flex-shrink: 0;
`;

type FormProps = {
    initialValue: string;
    onSubmit: (value: string) => void;
    onCancel: () => void;
};

export const Form = (props: FormProps) => {
    const { initialValue, onSubmit, onCancel } = props;
    const [inputValue, setInputValue] = useState(initialValue);

    return (
        <FormStyled
            onSubmit={(e) => {
                e.preventDefault();
                if (inputValue.trim()) {
                    onSubmit(inputValue);
                }
            }}
            onReset={onCancel}
        >
            <StyledInput value={inputValue} onValueChange={setInputValue} />
            <Buttons>
                <Button type="submit" disabled={!inputValue.trim()} variant="primary">
                    <CheckIcon />
                </Button>
                <Button type="reset" variant="secondary">
                    <Cross1Icon />
                </Button>
            </Buttons>
        </FormStyled>
    );
};
