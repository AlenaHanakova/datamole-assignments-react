import { PlusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "./form";
import { Button } from "./Button";

const StyledDiv = styled.header`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    width: 100%;

    h1 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: bold;
    }
`;

const HeaderTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const Header = ({ children, onItemAdd }: HeaderProps) => {
    const [showForm, setShowForm] = useState(false);

    const onSubmit = (value: string) => {
        console.log("Adding new todo item:", value);
        onItemAdd(value);
        setShowForm(false);
    };

    return (
        <StyledDiv>
            <HeaderTop>
                <h1>{children}</h1>
                <Button onClick={() => setShowForm(true)} variant="secondary">
                    <PlusIcon /> Add
                </Button>
            </HeaderTop>
            {showForm && <Form initialValue="" onSubmit={onSubmit} onCancel={() => setShowForm(false)} />}
        </StyledDiv>
    );
};
