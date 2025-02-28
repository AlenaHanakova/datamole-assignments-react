export interface Todo {
    id: number;
    label: string;
    isDone: boolean;
    createdAt: number;
}

export type ListItemProp = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: (isDone: boolean) => void;
    onItemDelete: () => void;
};
