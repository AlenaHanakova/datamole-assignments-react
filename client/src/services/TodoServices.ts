import { Todo } from "../types";

const URL = "http://localhost:3000/items";

//Fetch all todos
export const fetchTodos = async (): Promise<Todo[]> => {
    const response = await fetch(URL);
    if (!response.ok) throw new Error("Failed to fetch todo items");
    return response.json();
};
