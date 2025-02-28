import { useEffect, useState } from "react";
import { fetchTodos, addTodo, updateTodo, deleteTodo, markTodoDone } from "./TodoServices";
import { Todo } from "../types";

export const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const sortTodos = (todos: Todo[]) => {
        return [...todos].sort((a, b) => {
            if (a.isDone === b.isDone) {
                return b.createdAt - a.createdAt; // newest first
            }
            return a.isDone ? 1 : -1; // to-do first, done last
        });
    };

    //Load todos on initial mount
    useEffect(() => {
        const loadTodos = async () => {
            try {
                const data = await fetchTodos();
                setTodos(sortTodos(data));
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
        if (!label.trim()) {
            console.warn("Cannot add an empty todo!");
            return;
        }
        try {
            const newTodo = await addTodo(label);
            setTodos((prev) => sortTodos([...prev, newTodo]));
        } catch (error) {
            console.error("Error adding todo item:", error);
            setError("Failed to add todo item.");
        }
    };

    // Edit a todo
    const handleEditItem = async (id: number, newLabel: string) => {
        try {
            await updateTodo(id, { label: newLabel });
            setTodos((prev) => sortTodos(prev.map((todo) => (todo.id === id ? { ...todo, label: newLabel } : todo))));
        } catch (error) {
            console.error("Error updating todo:", error);
            setError("Error occurred when updating todo.");
        }
    };

    // Toggle item done/undone
    const handleToggleDone = async (id: number, isDone: boolean) => {
        try {
            if (isDone) {
                await markTodoDone(id);
                setTodos((prev) =>
                    sortTodos(
                        prev.map((todo) => (todo.id === id ? { ...todo, isDone: true, finishedAt: Date.now() } : todo))
                    )
                );
            } else {
                await updateTodo(id, { isDone: false, finishedAt: null });
                setTodos((prev) =>
                    sortTodos(
                        prev.map((todo) => (todo.id === id ? { ...todo, isDone: false, finishedAt: null } : todo))
                    )
                );
            }
        } catch (error) {
            console.error("Error toggling todo:", error);
            setError("Error occurred when updating todo.");
        }
    };

    //Delete todo item
    const handleDeleteItem = async (id: number) => {
        try {
            await deleteTodo(id);
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error("Error deleting todo:", error);
            setError("Error occurred when deleting todo.");
        }
    };

    //counts for the footer
    const todoCount = todos.filter((todo) => !todo.isDone).length;
    const doneCount = todos.filter((todo) => todo.isDone).length;

    return {
        todos,
        loading,
        todoCount,
        doneCount,
        error,
        handleAddItem,
        handleEditItem,
        handleToggleDone,
        handleDeleteItem,
    };
};
