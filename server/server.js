const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === "POST") {
        req.body.createdAt = Date.now();
    }
    next();
});

// endpoint /items/:id/done to mark a todo as "done"
server.patch("/items/:id/done", (req, res) => {
    const id = Number(req.params.id);
    const db = router.db;

    // Find the todo item with the given id
    const todo = db.get("items").find({ id }).value();
    if (!todo) {
        return res.status(404).json({ error: "Todo item with given id not found" });
    }

    // Update the todo item
    const updatedTodo = {
        ...todo,
        isDone: true,
        finishedAt: Date.now(),
    };

    // Update the todo item in the database
    db.get("items").find({ id }).assign(updatedTodo).write();
    res.json(updatedTodo);
});

// Use default router
server.use(router);
server.listen(3000, () => {
    console.log("JSON Server is running");
});
