import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React from "react";
import styled from "styled-components";

import { Checkbox } from "../Checkbox";
import { ListItemProps } from "../../types";
import { Button } from "../Button";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0;
`;

const Label = styled.label`
    margin: 0 15px;
`;

export const ListItem = (props: ListItemProps) => {
    const { label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;

    return (
        <StyledDiv>
            <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
            <Label>{label}</Label>
            <Button onClick={() => onItemDelete()} variant="danger">
                <TrashIcon />
            </Button>
            <Button onClick={() => onItemLabelEdit(label)}>
                <Pencil1Icon />
            </Button>
        </StyledDiv>
    );
};
