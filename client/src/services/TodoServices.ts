import { Todo } from "../types";

const URL = "http://localhost:3000/items";

//Load todos
export const fetchTodos = async (): Promise<Todo[]> => {
    const response = await fetch(URL);
    if (!response.ok) throw new Error("Failed to load todo items");
    return response.json();
};

//Add a new todo
export const addTodo = async (label: string): Promise<Todo> => {
    const newTodo = { label, isDone: false, createdAt: Date.now() };

    const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
    });

    if (!response.ok) throw new Error("Failed to add todo item");
    return response.json();
};

//Update a todo - edit label or toggle done/undone
export const updateTodo = async (id: number, updatedFields: Partial<Todo>): Promise<void> => {
    const response = await fetch(`${URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedFields),
    });

    if (!response.ok) throw new Error("Failed to update todo item");
};

// Delete todo item
export const deleteTodo = async (id: number): Promise<void> => {
    const response = await fetch(`${URL}/${id}`, { method: "DELETE" });

    if (!response.ok) throw new Error("Failed to delete todo");
};
