import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React from "react";
import styled from "styled-components";

import { Checkbox } from "./Checkbox";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0;
`;

const Label = styled.label`
    margin: 0 15px;
`;

export type ListItemProp = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: (isDone: boolean) => void;
    onItemDelete: () => void;
};

export const ListItem = (props: ListItemProp) => {
    const { label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;

    return (
        <StyledDiv>
            <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
            <Label>{label}</Label>
            <button onClick={() => onItemDelete()}>
                <TrashIcon />
            </button>
            <button onClick={() => onItemLabelEdit(label)}>
                <Pencil1Icon />
            </button>
        </StyledDiv>
    );
};
