import { useEffect, useState } from "react";
import { addTodo, fetchTodos } from "../../services/TodoServices";
import { Todo } from "../../types";

export const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    //Load todos on initial mount
    useEffect(() => {
        const loadTodos = async () => {
            try {
                const data = await fetchTodos();
                setTodos(data);
            } catch (err) {
                console.error("Error fetching todo items:", err);
                setError("Failed to load todo items.");
            } finally {
                setLoading(false);
            }
        };

        loadTodos();
    }, []);

    // Add new todo
    const handleAddItem = async (label: string) => {
        try {
            const newTodo = await addTodo(label);
            setTodos((prev) => [...prev, newTodo]);
        } catch (error) {
            console.error("Error adding todo item:", error);
            setError("Failed to load todo items.");
        }
    };

    return { todos, loading, error, handleAddItem };
};
