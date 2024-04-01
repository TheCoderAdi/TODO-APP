## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/TheCoderAdi/TODO-APP.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

1. Once the dependencies are installed, you can start the development server by running:

   ```bash
   npm run dev
   ```

2. This command will start the development server and open your default web browser with the application running. If it doesn't open automatically, you can access the application at `http://localhost:5173`

### Building for Production

If you want to build the project for production, you can run:

```bash
npm run build
```

This command will generate a production-ready build of your project in the `dist` directory.

### Additional Commands

- `npm run serve`: Serve the production build locally.
- `npm run lint`: Lint the project files.
- `npm run test`: Run tests.

## Logic and Approach

### Architecture Overview

The application is built using React and Redux, with a focus on managing tasks. Here's a breakdown of the key components and their responsibilities:

1. **App Component**: This is the root component of the application. It initializes Redux store and fetches initial task data using `useEffect`.
2. **SlideBar Component**: This component represents the sidebar that have colors for the task and add task button where you can add the tasks.

3. **TaskContainer Component**: This component displays the list of tasks. It receives task data as props and renders individual task components.

4. **Tasks Component**: This is a reusable component representing a single task item. It displays task details, provides options for marking tasks as completed, and deleting tasks. Task state updates are managed through Redux actions.

5. **TaskInput Component**: This is the component for taking the input from the user.

6. **Redux Store**: Redux is used for state management. The store holds the current state of tasks and facilitates actions for adding, updating, and deleting tasks.

7. **LocalStorage**: Task data is persisted locally using the browser's localStorage API. This ensures that tasks remain available even after page reloads or browser sessions.

### Key Implementations

- **Redux**: The application utilizes Redux for managing application-level state, particularly task data. Redux actions are dispatched to update task state, and Redux selectors are used to retrieve specific parts of the state as needed.

- **LocalStorage Integration**: Task data is stored in the browser's localStorage to persist tasks across page reloads. This is implemented using Redux middleware to synchronize Redux state with localStorage.

- **CRUD Operations**: CRUD (Create, Read, Update, Delete) operations on tasks are implemented using Redux actions. Tasks can be added, marked as completed, updated, and deleted, with corresponding updates reflected in the UI in real-time.

- **Component Reusability**: Components are designed to be reusable and modular. For example, the `Tasks` component is a reusable task item component that can be easily integrated into different parts of the application.

### Future Improvements

- **User Authentication**: Implement user authentication to allow users to save their tasks securely and access them across devices.
- **Advanced Filtering and Sorting**: Enhance task management features by adding options for advanced filtering and sorting of tasks based on various criteria.
- **Data Validation**: Implement client-side data validation to ensure that task data is properly formatted and meets certain criteria before being saved or updated.
