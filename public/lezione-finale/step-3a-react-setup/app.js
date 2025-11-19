// ==========================================
// COMPONENTE HEADER
// ==========================================
// TEORIA: Un componente React è una funzione JavaScript che restituisce JSX.
// JSX è una sintassi simile a HTML che viene trasformata in chiamate React.createElement().
// I componenti permettono di suddividere l'interfaccia in pezzi riutilizzabili e indipendenti.
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
// TEORIA: Le props (properties) sono argomenti passati ai componenti.
// Usando la destructuring { task }, estraiamo direttamente la proprietà task dall'oggetto props.
// Le props sono read-only: i componenti non possono modificare le proprie props.
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

    // TEORIA: .map() trasforma ogni elemento dell'array in un componente React.
    // L'attributo 'key' è obbligatorio per liste: aiuta React a identificare quali elementi
    // sono cambiati, aggiunti o rimossi, ottimizzando il rendering.
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
// TEORIA: App è il componente root che contiene tutta la struttura dell'applicazione.
// Compone (composition) altri componenti più piccoli per costruire l'interfaccia completa.
// Questo pattern permette di mantenere il codice organizzato e manutenibile.
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
// TEORIA: ReactDOM.createRoot() crea un "root" React nel DOM.
// root.render() renderizza il componente App nell'elemento HTML con id="root".
// Questo è il punto di ingresso dell'applicazione React.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
