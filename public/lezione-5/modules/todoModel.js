// TodoModel.js - Gestione dati e localStorage

export class TodoModel {
    constructor() {
        this.STORAGE_KEY = 'todos_modular_app';
        this.todos = this.loadFromStorage();
    }
    
    // Ottieni tutti i todo
    getTodos() {
        return this.todos;
    }
    
    // Aggiungi nuovo todo
    addTodo(text) {
        if (!text || text.trim() === '') {
            return { success: false, error: 'Testo obbligatorio' };
        }
        
        const newTodo = {
            id: Date.now(),
            text: text.trim(),
            completed: false,
            createdAt: new Date().toISOString()
        };
        
        this.todos.unshift(newTodo);
        this.saveToStorage();
        
        return { success: true, todo: newTodo };
    }
    
    // Toggle completamento
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        
        if (!todo) {
            return { success: false, error: 'Todo non trovato' };
        }
        
        todo.completed = !todo.completed;
        this.saveToStorage();
        
        return { success: true, todo };
    }
    
    // Elimina todo
    deleteTodo(id) {
        const index = this.todos.findIndex(t => t.id === id);
        
        if (index === -1) {
            return { success: false, error: 'Todo non trovato' };
        }
        
        const deleted = this.todos.splice(index, 1)[0];
        this.saveToStorage();
        
        return { success: true, todo: deleted };
    }
    
    // Aggiorna testo todo
    updateTodo(id, newText) {
        const todo = this.todos.find(t => t.id === id);
        
        if (!todo) {
            return { success: false, error: 'Todo non trovato' };
        }
        
        if (!newText || newText.trim() === '') {
            return { success: false, error: 'Testo obbligatorio' };
        }
        
        todo.text = newText.trim();
        this.saveToStorage();
        
        return { success: true, todo };
    }
    
    // Cancella tutti completati
    clearCompleted() {
        const beforeCount = this.todos.length;
        this.todos = this.todos.filter(t => !t.completed);
        const deletedCount = beforeCount - this.todos.length;
        
        this.saveToStorage();
        
        return { success: true, deletedCount };
    }
    
    // Ottieni todo filtrati
    getFilteredTodos(filter) {
        switch (filter) {
            case 'active':
                return this.todos.filter(t => !t.completed);
            case 'completed':
                return this.todos.filter(t => t.completed);
            default: // 'all'
                return this.todos;
        }
    }
    
    // Statistiche
    getStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const active = total - completed;
        
        return {
            total,
            completed,
            active,
            completionRate: total > 0 ? Math.round((completed / total) * 100) : 0
        };
    }
    
    // Salva in localStorage
    saveToStorage() {
        try {
            const jsonString = JSON.stringify(this.todos);
            localStorage.setItem(this.STORAGE_KEY, jsonString);
            return true;
        } catch (error) {
            console.error('Errore salvataggio localStorage:', error);
            return false;
        }
    }
    
    // Carica da localStorage
    loadFromStorage() {
        try {
            const jsonString = localStorage.getItem(this.STORAGE_KEY);
            
            if (!jsonString) {
                return [];
            }
            
            const todos = JSON.parse(jsonString);
            
            // Validazione array
            if (!Array.isArray(todos)) {
                console.warn('Dati localStorage non validi, reset');
                return [];
            }
            
            return todos;
        } catch (error) {
            console.error('Errore caricamento localStorage:', error);
            return [];
        }
    }
    
    // Esporta in JSON
    exportToJSON() {
        return JSON.stringify(this.todos, null, 2);
    }
    
    // Importa da JSON
    importFromJSON(jsonString) {
        try {
            const todos = JSON.parse(jsonString);
            
            if (!Array.isArray(todos)) {
                return { success: false, error: 'JSON non valido' };
            }
            
            this.todos = todos;
            this.saveToStorage();
            
            return { success: true, count: todos.length };
        } catch (error) {
            return { success: false, error: 'Errore parsing JSON' };
        }
    }
}
