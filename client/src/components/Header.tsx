import { PlusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "./form";
import { Button } from "./Button";

const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

const HeaderTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    height: 48px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const HeaderForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    width: 100%;
    padding: 10px 10px;
`;

const Title = styled.h1`
    font-size: 1.75rem;
    font-weight: 600;
    font-family: "Inter", sans-serif;
    letter-spacing: -0.5px;
    color: #333;
`;

type HeaderProps = {
    children: React.ReactNode;
    onItemAdd: (label: string) => void;
};

export const Header = ({ children, onItemAdd }: HeaderProps) => {
    const [showForm, setShowForm] = useState(false);

    const onSubmit = (value: string) => {
        console.log("Adding new todo item:", value);
        onItemAdd(value);
        setShowForm(false);
    };

    return (
        <HeaderStyled>
            <HeaderTop>
                <Title>{children}</Title>
                <Button onClick={() => setShowForm(true)}>
                    <PlusIcon /> Add
                </Button>
            </HeaderTop>
            {showForm && (
                <HeaderForm>
                    <Form initialValue="" onSubmit={onSubmit} onCancel={() => setShowForm(false)} />
                </HeaderForm>
            )}
        </HeaderStyled>
    );
};
