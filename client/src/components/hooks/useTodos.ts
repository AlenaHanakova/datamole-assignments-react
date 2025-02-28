import { useEffect, useState } from "react";
import { fetchTodos } from "../../services/TodoServices";
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
                console.error("Error fetching todos:", err);
                setError("Failed to load todos.");
            } finally {
                setLoading(false);
            }
        };

        loadTodos();
    }, []);

    return { todos, loading, error };
};
