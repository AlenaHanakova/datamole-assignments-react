import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import styled from "styled-components";

import { Checkbox } from "../Checkbox";
import { ListItemProps } from "../../types";
import { Button } from "../Button";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 10px;
    gap: 8px;
    transition: background 0.2s ease-in-out;

    &:hover {
        background: rgba(0, 0, 0, 0.03);
    }
`;

const CheckboxContainer = styled.div`
    flex-shrink: 0;
    width: 20px;
    margin-right: 20px;
`;

const Label = styled.span`
    flex-grow: 1;
    min-width: 0;
    word-break: break-word;
`;

const Buttons = styled.div`
    display: flex;
    gap: 6px;
    justify-content: flex-end;
    min-width: 80px;
    flex-shrink: 0;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;

    ${StyledDiv}:hover & {
        opacity: 1;
    }
`;

export const ListItem = (props: ListItemProps) => {
    const { label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;

    return (
        <StyledDiv>
            <CheckboxContainer>
                <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
            </CheckboxContainer>
            <Label>{label}</Label>
            <Buttons>
                <Button onClick={onItemDelete} variant="danger">
                    <TrashIcon />
                </Button>
                <Button onClick={() => onItemLabelEdit(label)}>
                    <Pencil1Icon />
                </Button>
            </Buttons>
        </StyledDiv>
    );
};
