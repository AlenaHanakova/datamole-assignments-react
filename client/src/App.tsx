import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { useTodos } from "./components/hooks/useTodos";
import { ListItem } from "./components/ListItem";

export const App = () => {
    const { todos, loading, error, handleAddItem } = useTodos();

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <Header onItemAdd={handleAddItem}>To Do app</Header>

                    {loading && <span>Loading todos...</span>}
                    {error && <span style={{ color: "red" }}>{error}</span>}
                    <List>
                        {todos.map((todo) => (
                            <li key={todo.id}>
                                <ListItem
                                    label={todo.label}
                                    isDone={todo.isDone}
                                    onItemLabelEdit={() => console.warn("Edit not implemented")}
                                    onItemDoneToggle={() => console.warn("Toggle not implemented")}
                                    onItemDelete={() => console.warn("Delete not implemented")}
                                />
                            </li>
                        ))}
                    </List>
                    <Footer />
                </Layout>
            </Container>
        </ThemeProvider>
    );
};
