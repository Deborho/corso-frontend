// lezione-5-99.js - Entry Point dell'applicazione

// Import del controller (che a sua volta importa model e view)
import { initTodoApp } from './modules/todoController.js';

// Inizializza l'applicazione quando il DOM è pronto
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c🚀 Todo App - Avvio', 'font-size: 20px; font-weight: bold; color: #007bff;');
    console.log('📦 Moduli ES6 caricati');
    console.log('🎯 Pattern MVC implementato');
    console.log('💾 Persistenza localStorage attiva');
    
    // Inizializza l'app
    const app = initTodoApp();
    
    // Esponi app globalmente per debugging (solo in sviluppo)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        window.todoApp = app;
        console.log('🔧 Debug mode: todoApp disponibile in window');
        console.log('Prova: todoApp.model.getTodos()');
    }
    
    console.log('✅ Applicazione avviata con successo!');
});

// Log quando il modulo viene caricato
console.log('📝 Modulo principale caricato (type="module")');
