// ==========================================
// IMPORT REACT HOOKS
// ==========================================
const { useState } = React;

// ==========================================
// COMPONENTE HEADER (identico a Step 3b)
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
// COMPONENTE FORM - NOVITÀ: VALIDAZIONE
// ==========================================
function TaskForm({ onAddTask }) {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(''); // State per errori

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // NOVITÀ: Validazione input vuoto
        if (inputValue.trim() === '') {
            setError('Inserisci un task valido');
            return;
        }

        // NOVITÀ: Validazione lunghezza minima
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
        // NOVITÀ: Cancella errore mentre si digita
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
                    {/* TEORIA: Rendering condizionale con operatore && logico.
                        Se error è truthy (non vuoto), viene renderizzato il div.
                        Se error è falsy (stringa vuota, null, undefined), React non renderizza nulla.
                        Questo è uno dei pattern più comuni per il rendering condizionale. */}
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
// COMPONENTE STATISTICHE - NOVITÀ: CONTATORI DINAMICI
// ==========================================
function Stats({ tasks }) {
    // TEORIA: I valori calcolati (computed values) vengono ricalcolati ad ogni render.
    // Quando le props 'tasks' cambiano, React ri-renderizza Stats e ricalcola i contatori.
    // Per operazioni pesanti, si potrebbe usare useMemo per ottimizzare (vedremo dopo).
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
// COMPONENTE SINGOLO TASK - NOVITÀ: TOGGLE FUNZIONANTE
// ==========================================
function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li className="list-group-item">
            <div className="d-flex align-items-center">
                {/* NOVITÀ: onChange per toggle completamento */}
                <input 
                    type="checkbox" 
                    id={`task-${task.id}`}
                    className="form-check-input me-2"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                />
                {/* TEORIA: Style condizionale con operatore ternario (? :).
                    In React, l'attributo style accetta un oggetto JavaScript con proprietà camelCase.
                    L'operatore ternario permette di applicare stili diversi in base a una condizione.
                    Questo crea interfacce reattive senza bisogno di classi CSS dinamiche. */}
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
    const [tasks, setTasks] = useState([
        { id: 1, text: "Cosa da fare 1", completed: false },
        { id: 2, text: "Cosa da fare 2", completed: false }
    ]);

    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        };
        setTasks([...tasks, newTask]);
    };

    // TEORIA: .map() crea un nuovo array trasformando ogni elemento.
    // Per l'elemento con l'id corrispondente, creiamo un nuovo oggetto con lo spread operator
    // e sovrascriviamo la proprietà 'completed'.
    // Gli altri elementi rimangono invariati. Anche questo rispetta l'immutabilità.
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
            <main className="bg-white p-4">
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
