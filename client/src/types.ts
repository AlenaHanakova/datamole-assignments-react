export interface Todo {
    id: number;
    label: string;
    isDone: boolean;
    createdAt: number;
}

export type ListItemProps = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: (isDone: boolean) => void;
    onItemDelete: () => void;
};

export type ListItemRowProps = {
    id: number;
    label: string;
    isDone: boolean;
    onItemLabelEdit: (id: number, label: string) => void;
    onItemDoneToggle: (id: number, isDone: boolean) => void;
    onItemDelete: (id: number) => void;
};

export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "danger";
};
