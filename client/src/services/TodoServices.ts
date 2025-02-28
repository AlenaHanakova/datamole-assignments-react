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
