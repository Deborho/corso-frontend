import './App.css';

function App() {
  const lessons = [
    { id: 1, title: 'Lezione 1 - Introduzione', available: true },
    { id: 2, title: 'Lezione 2', available: false },
    { id: 3, title: 'Lezione 3', available: false }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Corso Front-End Development</h1>
        <p>Benvenuto nel corso di sviluppo front-end. Seleziona una lezione per iniziare:</p>
        <ul className="lesson-list">
          {lessons.map(lesson => (
            <li key={lesson.id} className="lesson-item">
              {lesson.available ? (
                <a href={`/lezione-${lesson.id}/`} className="lesson-link">
                  {lesson.title}
                </a>
              ) : (
                <span className="coming-soon">{lesson.title} - Coming Soon</span>
              )}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
