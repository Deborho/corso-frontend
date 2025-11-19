// ==========================================
// IMPORT REACT HOOKS
// ==========================================
// TEORIA: Questo file contiene la stessa logica React dello step 3d.
// L'unica differenza è il CSS: qui usiamo SASS invece di Bootstrap puro.
// Questo dimostra che React gestisce la logica, mentre CSS/SASS gestisce lo stile.
// La separazione delle responsabilità rende il codice più manutenibile.
const { useState, useEffect } = React;

const STORAGE_KEY = 'taskManagerTasks';

// ==========================================
// COMPONENTE HEADER
// ==========================================
function Header() {
    return (
        <header className="bg-white p-4 rounded-top shadow-sm">
            <h1 className="text-primary">Todo List</h1>
            <p className="text-muted mb-0">Gestisci le tue attività con stile</p>
        </header>
    );
}

// ==========================================
// COMPONENTE FORM
// ==========================================
function TaskForm({ onAddTask }) {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') {
            setError('Inserisci un task valido');
            return;
        }
        if (inputValue.trim().length < 3) {
            setError('Il task deve contenere almeno 3 caratteri');
            return;
        }
        onAddTask(inputValue);
        setInputValue('');
        setError('');
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        if (error) setError('');
    };

    return (
        <section className="mb-4">
            <h2 className="h4 mb-3">Aggiungi nuovo task</h2>
            <form className="row g-2" onSubmit={handleSubmit}>
                <div className="col-md-9">
                    <input 
                        type="text" 
                        name="taskInput"
                        className={`form-control ${error ? 'is-invalid' : ''}`}
                        placeholder="Inserisci il tuo task..."
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    {error && (
                        <div className="text-danger small mt-1">{error}</div>
                    )}
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
// COMPONENTE STATISTICHE
// ==========================================
function Stats({ tasks }) {
    const activeCount = tasks.filter(t => !t.completed).length;
    const completedCount = tasks.filter(t => t.completed).length;

    return (
        <section className="row g-3 mb-4">
            <div className="col-md-6">
                <div className="card border-primary">
                    <div className="card-body">
                        <h6 className="text-muted">Task attivi</h6>
                        <h2 className="text-primary mb-0">{activeCount}</h2>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card border-success">
                    <div className="card-body">
                        <h6 className="text-muted">Task completati</h6>
                        <h2 className="text-success mb-0">{completedCount}</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ==========================================
// COMPONENTE SINGOLO TASK
// ==========================================
function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li className="list-group-item">
            <div className="d-flex align-items-center">
                <input 
                    type="checkbox" 
                    id={`task-${task.id}`}
                    className="form-check-input me-2"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                />
                <label 
                    htmlFor={`task-${task.id}`}
                    className="flex-grow-1"
                    style={task.completed ? {
                        textDecoration: 'line-through',
                        color: '#6c757d'
                    } : {}}
                >
                    {task.text}
                </label>
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
// COMPONENTE LISTA TASK
// ==========================================
function TaskList({ tasks, onToggle, onDelete }) {
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
                        onToggle={onToggle}
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
    const loadTasksFromStorage = () => {
        try {
            const savedTasks = localStorage.getItem(STORAGE_KEY);
            if (savedTasks) {
                return JSON.parse(savedTasks);
            }
        } catch (error) {
            console.error('Errore caricamento task:', error);
        }
        return [
            { id: 1, text: "Cosa da fare 1", completed: false },
            { id: 2, text: "Cosa da fare 2", completed: false }
        ];
    };

    const [tasks, setTasks] = useState(loadTasksFromStorage);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        } catch (error) {
            console.error('Errore salvataggio task:', error);
        }
    }, [tasks]);

    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        };
        setTasks([...tasks, newTask]);
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task => 
            task.id === id 
                ? { ...task, completed: !task.completed }
                : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="container py-5">
            <Header />
            <main className="bg-white p-4 mb-5">
                <div className="alert alert-info mb-4">
                    <i className="bi bi-info-circle me-2"></i>
                    <small>
                        Task salvati automaticamente!
                    </small>
                </div>
                
                <TaskForm onAddTask={addTask} />
                <Stats tasks={tasks} />
                <TaskList 
                    tasks={tasks}
                    onToggle={toggleTask}
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
