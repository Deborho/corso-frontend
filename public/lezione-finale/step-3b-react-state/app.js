// ==========================================
// IMPORT REACT HOOKS
// ==========================================
const { useState } = React;

// ==========================================
// COMPONENTE HEADER (identico a Step 3a)
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
// COMPONENTE FORM - NOVITÀ: INPUT CONTROLLATO
// ==========================================
function TaskForm({ onAddTask }) {
    // State locale per l'input
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Controllo semplice: non aggiungere se vuoto
        if (inputValue.trim() === '') {
            return;
        }

        // Chiama la funzione passata dal parent
        onAddTask(inputValue);
        
        // Resetta l'input
        setInputValue('');
    };

    return (
        <section className="mb-4">
            <h2 className="h4 mb-3">Aggiungi nuovo task</h2>
            <form className="row g-2" onSubmit={handleSubmit}>
                <div className="col-md-9">
                    <input 
                        type="text" 
                        name="taskInput"
                        className="form-control"
                        placeholder="Inserisci il tuo task..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
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
// COMPONENTE SINGOLO TASK - NOVITÀ: BOTTONE ELIMINA
// ==========================================
function TaskItem({ task, onDelete }) {
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
                {/* NOVITÀ: bottone elimina funzionante */}
                <button 
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => onDelete(task.id)}
                >
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </li>
    );
}

// ==========================================
// COMPONENTE LISTA TASK - NOVITÀ: MESSAGGI DINAMICI
// ==========================================
function TaskList({ tasks, onDelete }) {
    // Mostra messaggio se lista vuota
    if (tasks.length === 0) {
        return (
            <section>
                <h2 className="h4 mb-3">I tuoi task</h2>
                <div className="alert alert-info">
                    <i className="bi bi-info-circle me-2"></i>
                    Nessun task presente. Aggiungi il tuo primo task!
                </div>
            </section>
        );
    }

    return (
        <section id="tasks">
            <h2 className="h4 mb-3">I tuoi task</h2>
            <ul className="list-group">
                {tasks.map(task => (
                    <TaskItem 
                        key={task.id} 
                        task={task}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
        </section>
    );
}

// ==========================================
// COMPONENTE PRINCIPALE APP
// ==========================================
function App() {
    // NOVITÀ: useState per gestire l'array di task
    const [tasks, setTasks] = useState([
        { id: 1, text: "Cosa da fare 1", completed: false },
        { id: 2, text: "Cosa da fare 2", completed: false }
    ]);

    // NOVITÀ: funzione per aggiungere task
    const addTask = (text) => {
        const newTask = {
            id: Date.now(), // Timestamp come ID univoco
            text: text,
            completed: false
        };
        setTasks([...tasks, newTask]); // Spread operator
    };

    // NOVITÀ: funzione per eliminare task
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="container py-5">
            <Header />
            <main className="bg-white p-4">
                <div className="alert alert-info mb-4">
                    <i className="bi bi-info-circle me-2"></i>
                    <small>Ora puoi aggiungere ed eliminare task! (Refresh: i dati si perdono)</small>
                </div>
                
                <TaskForm onAddTask={addTask} />
                <TaskList 
                    tasks={tasks}
                    onDelete={deleteTask} 
                />
            </main>
        </div>
    );
}

// ==========================================
// RENDER DELL'APPLICAZIONE
// ==========================================
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
