import React, { useState } from "react";
import { ListItem } from "./ListItem";
import { Form } from "./form/Form";
import { ListItemRowProps } from "../types";

export const ListItemRow = (props: ListItemRowProps) => {
    const { id, label, isDone = false, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;
    const [isEditing, setIsEditing] = useState(false);

    return isEditing ? (
        <Form
            initialValue={label}
            onSubmit={(newLabel) => {
                onItemLabelEdit(id, newLabel);
                setIsEditing(false);
            }}
            onCancel={() => setIsEditing(false)}
        />
    ) : (
        <ListItem
            label={label}
            isDone={isDone}
            onItemLabelEdit={() => setIsEditing(true)}
            onItemDoneToggle={() => onItemDoneToggle(id, !isDone)}
            onItemDelete={() => onItemDelete(id)}
        />
    );
};
