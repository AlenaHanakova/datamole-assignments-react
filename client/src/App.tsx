import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/list/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { useTodos } from "./services/useTodos";
import { ListItem } from "./components/list/ListItem";
import { ListItemRow } from "./components/list/ListItemRow";

export const App = () => {
    const {
        todos,
        loading,
        error,
        todoCount,
        doneCount,
        handleAddItem,
        handleEditItem,
        handleToggleDone,
        handleDeleteItem,
    } = useTodos();

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <Header onItemAdd={handleAddItem}>TO-DOs</Header>

                    {loading && <span>Loading todos...</span>}
                    {error && <span style={{ color: "red" }}>{error}</span>}
                    <List>
                        {todos.map((todo) => (
                            <li key={todo.id}>
                                <ListItemRow
                                    key={todo.id}
                                    id={todo.id}
                                    label={todo.label}
                                    isDone={todo.isDone}
                                    onItemLabelEdit={handleEditItem}
                                    onItemDoneToggle={handleToggleDone}
                                    onItemDelete={handleDeleteItem}
                                />
                            </li>
                        ))}
                    </List>
                    <Footer todoItems={todoCount} doneItems={doneCount} />
                </Layout>
            </Container>
        </ThemeProvider>
    );
};
