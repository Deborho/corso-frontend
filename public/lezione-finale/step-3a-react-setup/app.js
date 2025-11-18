// ==========================================
// COMPONENTE HEADER
// ==========================================
function Header() {
    return (
        <header className="bg-white p-4 rounded-top shadow-sm">
            <h1 className="text-primary">Todo List</h1>
            <p className="text-muted mb-0">Gestisci le tue attività</p>
        </header>
    );
}

// ==========================================
// COMPONENTE FORM
// ==========================================
function TaskForm() {
    return (
        <section className="mb-4">
            <h2 className="h4 mb-3">Aggiungi nuovo task</h2>
            <form className="row g-2">
                <div className="col-md-9">
                    <input 
                        type="text" 
                        name="taskInput"
                        className="form-control"
                        placeholder="Inserisci il tuo task..."
                    />
                </div>
                <div className="col-md-3">
                    <button type="submit" className="btn btn-primary w-100">
                        <i className="bi bi-plus-circle me-1"></i>
                        Aggiungi
                    </button>
                </div>
            </form>
        </section>
    );
}

// ==========================================
// COMPONENTE SINGOLO TASK
// ==========================================
function TaskItem({ task }) {
    return (
        <li className="list-group-item">
            <div className="d-flex align-items-center">
                <input 
                    type="checkbox" 
                    id={`task-${task.id}`}
                    className="form-check-input me-2"
                    checked={task.completed}
                    readOnly
                />
                <label 
                    htmlFor={`task-${task.id}`}
                    className="flex-grow-1"
                >
                    {task.text}
                </label>
                <button className="btn btn-outline-danger btn-sm">
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </li>
    );
}

// ==========================================
// COMPONENTE LISTA TASK
// ==========================================
function TaskList() {
    // Dati statici di esempio
    const tasks = [
        { id: 1, text: "Cosa da fare 1", completed: false },
        { id: 2, text: "Cosa da fare 2", completed: false }
    ];

    return (
        <section id="tasks">
            <h2 className="h4 mb-3">I tuoi task</h2>
            <ul className="list-group">
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
        </section>
    );
}

// ==========================================
// COMPONENTE PRINCIPALE APP
// ==========================================
function App() {
    return (
        <div className="container py-5">
            <Header />
            <main className="bg-white p-4">
                <TaskForm />
                <TaskList />
            </main>
        </div>
    );
}

// ==========================================
// RENDER DELL'APPLICAZIONE
// ==========================================
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
