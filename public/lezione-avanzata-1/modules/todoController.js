// TodoController.js - Gestione eventi e coordinamento

import { TodoModel } from './todoModel.js';
import { TodoView } from './todoView.js';

export class TodoController {
    constructor() {
        this.model = new TodoModel();
        this.view = new TodoView();
        this.currentFilter = 'all';
        
        this.init();
    }
    
    // Inizializza applicazione
    init() {
        // Render iniziale
        this.render();
        
        // Bind eventi
        this.bindEvents();
        
        // Focus su input
        this.view.focusInput();
        
        console.log('✓ Todo App inizializzata');
        console.log(`📊 Caricati ${this.model.getTodos().length} todos da localStorage`);
    }
    
    // Bind tutti gli event listeners
    bindEvents() {
        // Aggiungi todo
        this.view.addBtn?.addEventListener('click', () => this.handleAddTodo());
        
        this.view.todoInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleAddTodo();
            }
        });
        
        // Event delegation per checkbox, edit, delete
        this.view.todoList?.addEventListener('click', (e) => {
            const target = e.target;
            const id = parseInt(target.dataset.id);
            
            if (!id) return;
            
            if (target.classList.contains('todo-checkbox')) {
                this.handleToggleTodo(id);
            } else if (target.classList.contains('btn-edit')) {
                this.handleEditTodo(id);
            } else if (target.classList.contains('btn-delete')) {
                this.handleDeleteTodo(id);
            }
        });
        
        // Filtri
        this.view.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.currentFilter = btn.dataset.filter;
                this.render();
            });
        });
        
        // Cancella completati
        this.view.clearCompletedBtn?.addEventListener('click', () => {
            this.handleClearCompleted();
        });
    }
    
    // Handler: Aggiungi todo
    handleAddTodo() {
        const text = this.view.getInputValue();
        
        if (!text) {
            this.view.showMessage('Inserisci un todo!', 'error');
            return;
        }
        
        const result = this.model.addTodo(text);
        
        if (result.success) {
            this.view.clearInput();
            this.render();
            this.view.showMessage('Todo aggiunto!', 'success');
        } else {
            this.view.showMessage(result.error, 'error');
        }
    }
    
    // Handler: Toggle completamento
    handleToggleTodo(id) {
        const result = this.model.toggleTodo(id);
        
        if (result.success) {
            this.render();
            const status = result.todo.completed ? 'completato' : 'riattivato';
            this.view.showMessage(`Todo ${status}!`, 'success');
        } else {
            this.view.showMessage(result.error, 'error');
        }
    }
    
    // Handler: Modifica todo
    async handleEditTodo(id) {
        const todo = this.model.getTodos().find(t => t.id === id);
        
        if (!todo) {
            this.view.showMessage('Todo non trovato', 'error');
            return;
        }
        
        const modalResult = await this.view.showEditModal(todo);
        
        if (modalResult.action === 'save') {
            const result = this.model.updateTodo(id, modalResult.text);
            
            if (result.success) {
                this.render();
                this.view.showMessage('Todo aggiornato!', 'success');
            } else {
                this.view.showMessage(result.error, 'error');
            }
        }
    }
    
    // Handler: Elimina todo
    handleDeleteTodo(id) {
        if (!this.view.confirm('Sicuro di voler eliminare questo todo?')) {
            return;
        }
        
        const result = this.model.deleteTodo(id);
        
        if (result.success) {
            this.render();
            this.view.showMessage('Todo eliminato!', 'success');
        } else {
            this.view.showMessage(result.error, 'error');
        }
    }
    
    // Handler: Cancella completati
    handleClearCompleted() {
        const stats = this.model.getStats();
        
        if (stats.completed === 0) {
            this.view.showMessage('Nessun todo completato da cancellare', 'info');
            return;
        }
        
        if (!this.view.confirm(`Eliminare ${stats.completed} todo completati?`)) {
            return;
        }
        
        const result = this.model.clearCompleted();
        
        if (result.success) {
            this.render();
            this.view.showMessage(`${result.deletedCount} todo eliminati!`, 'success');
        }
    }
    
    // Render completo
    render() {
        const filteredTodos = this.model.getFilteredTodos(this.currentFilter);
        const stats = this.model.getStats();
        
        this.view.renderTodos(filteredTodos, this.currentFilter);
        this.view.renderStats(stats);
        this.view.updateFilterButtons(this.currentFilter);
        
        // Abilita/disabilita bottone clear completed
        this.view.setButtonEnabled(this.view.clearCompletedBtn, stats.completed > 0);
    }
}

// Esporta anche funzione di inizializzazione
export const initTodoApp = () => {
    return new TodoController();
};
