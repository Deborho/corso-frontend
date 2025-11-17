// TodoView.js - Gestione interfaccia e rendering

export class TodoView {
    constructor() {
        // Riferimenti elementi DOM
        this.todoInput = document.getElementById('todo-input');
        this.addBtn = document.getElementById('add-btn');
        this.todoList = document.getElementById('todo-list');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.statsContainer = document.getElementById('stats-container');
        this.clearCompletedBtn = document.getElementById('clear-completed');
    }
    
    // Render lista todo
    renderTodos(todos, filter = 'all') {
        if (!this.todoList) return;
        
        if (todos.length === 0) {
            this.todoList.innerHTML = `
                <div class="empty-state">
                    <p>📝 Nessun todo. Aggiungi il primo!</p>
                </div>
            `;
            return;
        }
        
        this.todoList.innerHTML = todos.map(todo => `
            <div class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
                <div class="todo-content">
                    <input 
                        type="checkbox" 
                        class="todo-checkbox"
                        ${todo.completed ? 'checked' : ''}
                        data-id="${todo.id}"
                    >
                    <span class="todo-text" data-id="${todo.id}">${this.escapeHtml(todo.text)}</span>
                </div>
                <div class="todo-actions">
                    <button class="btn-edit" data-id="${todo.id}" title="Modifica">✏️</button>
                    <button class="btn-delete" data-id="${todo.id}" title="Elimina">🗑️</button>
                </div>
            </div>
        `).join('');
    }
    
    // Render statistiche
    renderStats(stats) {
        if (!this.statsContainer) return;
        
        this.statsContainer.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Totale:</span>
                <span class="stat-value">${stats.total}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Attive:</span>
                <span class="stat-value active">${stats.active}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Completate:</span>
                <span class="stat-value completed">${stats.completed}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Progresso:</span>
                <span class="stat-value">${stats.completionRate}%</span>
            </div>
        `;
    }
    
    // Aggiorna stile filtri
    updateFilterButtons(activeFilter) {
        this.filterBtns.forEach(btn => {
            if (btn.dataset.filter === activeFilter) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    // Ottieni valore input
    getInputValue() {
        return this.todoInput ? this.todoInput.value.trim() : '';
    }
    
    // Pulisci input
    clearInput() {
        if (this.todoInput) {
            this.todoInput.value = '';
            this.todoInput.focus();
        }
    }
    
    // Focus su input
    focusInput() {
        if (this.todoInput) {
            this.todoInput.focus();
        }
    }
    
    // Mostra messaggio
    showMessage(message, type = 'info') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            background: ${type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1'};
            color: ${type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460'};
            border-radius: 4px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => messageDiv.remove(), 300);
        }, 3000);
    }
    
    // Mostra modal edit
    showEditModal(todo) {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal">
                <h3>Modifica Todo</h3>
                <input 
                    type="text" 
                    id="edit-input" 
                    value="${this.escapeHtml(todo.text)}"
                    class="todo-input"
                >
                <div class="modal-actions">
                    <button id="save-edit" class="btn-primary">Salva</button>
                    <button id="cancel-edit" class="btn-secondary">Annulla</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        const editInput = document.getElementById('edit-input');
        editInput.focus();
        editInput.select();
        
        return new Promise((resolve) => {
            document.getElementById('save-edit').onclick = () => {
                resolve({ action: 'save', text: editInput.value.trim() });
                modal.remove();
            };
            
            document.getElementById('cancel-edit').onclick = () => {
                resolve({ action: 'cancel' });
                modal.remove();
            };
            
            editInput.onkeypress = (e) => {
                if (e.key === 'Enter') {
                    resolve({ action: 'save', text: editInput.value.trim() });
                    modal.remove();
                }
            };
            
            modal.onclick = (e) => {
                if (e.target === modal) {
                    resolve({ action: 'cancel' });
                    modal.remove();
                }
            };
        });
    }
    
    // Conferma azione
    confirm(message) {
        return window.confirm(message);
    }
    
    // Escape HTML per sicurezza
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // Abilita/disabilita bottone
    setButtonEnabled(button, enabled) {
        if (button) {
            button.disabled = !enabled;
        }
    }
}
