# **Assignment Report**

## **⏳ Time Estimation vs. Reality**

I estimated that implementing the features would take **2-3 hours**, and styling would take another **2-3 hours**.  
I believe I spent approximately that amount of time on the features, **trying not to get sucked into styling too early**—sometimes unsuccessfully.  
Ultimately, the remaining time was spent refining the styling.

I really enjoyed this assignment! It allowed me to **revise and learn a lot** while also having fun.

---

## **🛠 Tools & Workflow**

### **Tools I Used**

-   **VS Code** (with various extensions)
    -   React snippets
    -   Prettier
    -   Free version of GitHub Copilot
-   **Google & ChatGPT** whenever I needed advice or quick clarifications

---

## **📌 Key Decisions & Observations**

### **Feature Development**

-   **Started with Features First**
    -   I focused on **implementing the core features first** before fixing bugs, as I felt it would be easier to debug when I had actual data in the app.
-   **API Requests**
    -   I considered using **Axios**, but since this was a small project, I decided to stick with `fetch` to **avoid unnecessary dependencies**.
-   **Handling ListItem ID**
    -   I wanted to **add an ID directly to `ListItem`**, but since modifying provided components was restricted, I **wrapped it inside another component** instead.
    -   **Naming this wrapper was the hardest part!** 😅
-   **Sorting Logic**
    -   I initially wanted to **sort completed todos by `finishedAt`**, but I respected the assignment and stuck to **sorting by `createdAt`**.

### **UI & Styling**

-   **Spent more time on styling than expected**
    -   I planned to **return to some features**, but I ended up **getting stuck in styling details** instead.
-   **Styling is my weakest area**
    -   I find styling **challenging**, and I know there’s **room for improvement**.
-   **Missed some planned UI tweaks**
    -   I wanted to **add a placeholder** to the form for clarity and **cross out completed tasks**, but I didn’t get back to it.

### **Bugs & Fixes**

-   **Fixed Bugs Along the Way**
    -   Either I **fixed them naturally during development**, or I simply **didn’t encounter them**.
-   **Optimistic UI**
    -   I thought about implementing **optimistic UI updates** but decided **styling was a bigger priority**.

### **Custom Endpoint (S1)**

-   I had **never created a custom API endpoint before**, so I **relied on ChatGPT to guide me** through the process.
-   This was a **great learning experience**—I now feel much more comfortable with custom endpoints! 🚀

### **Stories**

-   I **chose not to implement Storybook stories** as part of the assignment since I **haven’t worked with them before**.
-   However, this is **definitely something I plan to explore in the future**.

---

## **💡 Final Thoughts**

This assignment was a **great mix of challenge and fun**! 🎯  
I learned a lot, especially in areas where I was less experienced, such as **custom endpoints and better styling approaches**.  
If I had more time, I would have focused more on:

-   Improving the **visual polish** of the UI
-   Adding **optimistic UI updates**
-   Exploring **Storybook stories**

Overall, I really enjoyed working on this project. **Thank you Datamole!** 😃🔥

*
*
*
# Datamole's React / TypeScript Assignment

Please, read following instructions and let us know if anything is not clear.

## 📋 General Rules and Requirements

-   Utilize any npm package you deem suitable.
-   In case of uncertainty about our expectations, please ask.
-   If unable to resolve an issue promptly, provide a brief explanation (e.g., missing knowledge, time constraints) and proceed.
-   Adhere to all familiar code quality principles.
-   Limit time spent on our assignment to a maximum of 6 hours. If necessary, prioritize tasks.
-   Submit your work via a git repository link (e.g., GitHub).
    -   Include the time spent on the assignment in your submission.
-   Document key solutions and decisions. Briefly explain your approach and reasoning in complex areas.

### 🚫 Restrictions

-   Do not modify the API (props) of the provided components.
-   Do not use any component library (Material UI for example).
-   Do not use Tailwind CSS.

### ⏰ Time Estimation

-   Start by thoroughly reading the assignment and reviewing the provided code to ensure you fully grasp the requirements.
-   Estimate the time needed to complete the assignment.
-   Email us your estimated completion time along with a realistic deadline, considering your existing commitments (e.g., work obligations, family responsibilities, vacations, or public holidays).

## 📝 Assignment Tasks

Complete all the tasks below.

### Client Application

More information about the client are in the `client/README.md`. Make sure you read them.

Using the provided UI components, implement the following modifications, bugfixes or new features (you can decide in what order):

#### Bugs

-   [ ] **B1**: `List` content
    -   Fix the content alignment of the non-empty `List` component.
-   [ ] **B2**: `Footer` alignment
    -   Fix the `Layout` component so the `Footer` is always attached to the bottom of the `Layout`.

_Fix all other bugs and visual imperfections you find._

#### Features

-   [ ] **F1**: Default values in `Footer`
    -   Modify the counters in `Footer` to show 0 when no value(s) are passed.
-   [ ] **F2**: Load todo items
    -   After opening the application, todo items should be loaded from the server
    -   The todo items should be displayed in the `List` component.
-   [ ] **F3**: Add a todo item
    -   Implement logic, which toggles visibility between the "add" button in the `Header` and a `Form` component.
    -   Entering a value inside the `Form` component and submitting it should create a new todo item.
    -   Data should be persisted on the server via an API call.
-   [ ] **F4**: Edit a todo item's label
    -   Implement logic, which toggles visibility between the "edit" button in the `ListItem` and a `Form` component.
    -   Entering a value inside the `Form` component and submitting it should edit the existing todo item.
    -   Changes to the data should be persisted on the server via an API call.
-   [ ] **F5**: Complete a todo item
    -   After clicking on the checkbox in the `ListItem`, the todo item should toggle between "done" and "todo" states.
    -   Changes to the data should be persisted on the server via an API call.
-   [ ] **F6**: Delete a todo item
    -   After clicking the "delete" button in the `ListItem`, the todo item should be deleted.
    -   Changes to the data should be persisted on the server via an API call.
-   [ ] **F7**: Sort the todo items
    -   Sort the list of the todo items:
        -   "todo" items (not "done") should be displayed first,
        -   after that, items should be sorted by their creation date, descending.
-   [ ] **F8**: Count the todo items
    -   Show a number of the "todo"/"done" items in the `Footer`.
-   [ ] **F9**: `Button` component
    -   Create a `Button` component and use it instead of HTML `button` elements.

#### Styling

-   [ ] **UI1**: `Header` "add" button alignment
    -   The "add" button should be aligned to the right in the `Header` component.
-   [ ] **UI2**: `ListItem` actions alignment
    -   Action buttons in the `ListItem` component should be aligned to the right.
-   [ ] **UI3**: `ListItem` actions visibility
    -   Action buttons in the `ListItem` component should be visible only when hovering over the `ListItem`.

#### Stories (optional tasks)

-   [ ] **SB1**: Add a story/stories for the `Layout` component.
-   [ ] **SB2**: Add stories showing available `Button` variants.
-   [ ] **SB3**: Add a story showcasing the `ListItem` actions visibility change on hover (implemented in _"UI3"_).

### Server

-   [ ] **S1**: Implement a custom endpoint for marking single todo item as "done". Calling this endpoint sets the `done` field to `true` and the `finishedAt` field to current time. Use this new endpoint in the client.

## Additional Comments

-   Feel free to do any visual modifications that - in your opinion - improve the design of the application.
-   Feel free to install and use any public package you may need.

### GitHub

-   Do your best to use atomic commits.
-   In each commit that solves (fully or partly) one of the tasks above, add the task's id into the commit message. For example: _"B1: fix typo in ..."_.

### Storybook

-   We use the Storybook's format CSF3, but you can use the older version of the CSF format if you are more familiar with it.
