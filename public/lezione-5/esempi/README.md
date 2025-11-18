# Esempi Lezione 5 - JavaScript Moderno, TypeScript e React

Questa cartella contiene esempi pratici e interattivi per le tre lezioni principali del modulo 5.

## 📁 Contenuto

### 1. JavaScript ES6+ Demo
**File:** `javascript-es6-demo.html`

Demo interattiva completa che mostra tutte le feature ES6+:
- ✨ Arrow Functions & Template Literals
- 🔄 Destructuring (Array e Object)
- 📦 Spread & Rest Operators
- 🔁 Array Methods (map, filter, reduce)
- ⏳ Async/Await & Promises
- 🛒 E-commerce Demo Completa

**Come usare:**
1. Aprire `javascript-es6-demo.html` nel browser
2. Interagire con i pulsanti per vedere ogni feature in azione
3. L'output viene mostrato in tempo reale

**Feature interattive:**
- Modifica input per personalizzare esempi
- Filtri e-commerce per categoria e prezzo
- Chiamate API reali con fetch
- Operazioni async parallele

---

### 2. TypeScript Demo
**Files:** 
- `typescript-demo.ts` (sorgente TypeScript)
- `typescript-demo.js` (compilato)
- `typescript-demo.html` (visualizzatore output)

Demo completa TypeScript con esempi pratici:
- 🔷 Tipi primitivi e type inference
- 📋 Interfacce ed estensioni
- 🔀 Union types e literal types
- ⚡ Funzioni tipizzate
- 🎯 Generics
- 🛡️ Type Guards
- 🛠️ Utility Types (Partial, Pick, Omit, etc.)
- 🏗️ Classi e interfacce
- 📦 Enums
- 🛒 E-commerce completo type-safe

**Compilazione:**
```bash
# File già compilato, ma per ricompilare:
cd public/lezione-5/esempi
npx tsc typescript-demo.ts --target ES2020 --module ESNext --lib ES2020,DOM
```

**Come usare:**
1. Il file TypeScript è già compilato in JavaScript
2. Aprire `typescript-demo.html` nel browser per vedere l'output
3. Il codice dimostra type safety con esempi reali

**Modificare il codice:**
1. Modifica `typescript-demo.ts`
2. Ricompila con il comando sopra
3. Ricarica `typescript-demo.html` nel browser

---

### 3. React Demo - Todo App
**File:** `react-demo.html`

Applicazione Todo completa con React che dimostra:
- ⚛️ Componenti funzionali
- 🎣 Hooks (useState, useEffect)
- 📝 Props e composizione componenti
- 🎨 Event handling
- 🔄 Conditional rendering
- 📋 Liste e keys
- 💾 Persistenza con localStorage
- 🔍 Filtri e statistiche
- 🎯 Immutabilità con spread operator

**Come usare:**
1. Aprire `react-demo.html` nel browser
2. Aggiungere task premendo invio o cliccando "Aggiungi"
3. Completare/eliminare task con i pulsanti
4. Filtrare per tutti/attivi/completati
5. Vedere statistiche in tempo reale
6. I dati vengono salvati automaticamente in localStorage

**Feature:**
- ✅ Completa/riattiva tasks
- 🗑️ Elimina tasks
- 🔍 Filtra per stato
- 📊 Statistiche in tempo reale
- 💾 Persistenza automatica
- 📱 Design responsive

---

## 🚀 Come Iniziare

### Opzione 1: Aprire direttamente nel browser
```bash
# Dalla cartella del progetto
cd public/lezione-5/esempi

# Aprire uno dei file HTML
open javascript-es6-demo.html  # macOS
xdg-open javascript-es6-demo.html  # Linux
start javascript-es6-demo.html  # Windows
```

### Opzione 2: Con server locale (raccomandato)
```bash
# Dalla root del progetto
npm run dev

# Poi navigare a:
# http://localhost:3000/lezione-5/esempi/javascript-es6-demo.html
# http://localhost:3000/lezione-5/esempi/typescript-demo.html
# http://localhost:3000/lezione-5/esempi/react-demo.html
```

---

## 📚 Cosa Imparerai

### JavaScript ES6+
- Sintassi moderna e concisa
- Manipolazione avanzata di array
- Programmazione asincrona
- Operazioni funzionali
- Gestione dati complessi

### TypeScript
- Type safety e prevenzione errori
- Interfacce e tipi personalizzati
- Generics per codice riutilizzabile
- Type guards per controllo runtime
- Utility types per trasformazioni

### React
- Architettura a componenti
- Gestione stato con hooks
- Composizione e riutilizzo
- Event handling
- Best practices moderne

---

## 🎯 Esercizi Suggeriti

### JavaScript ES6+
1. Modifica i filtri e-commerce per aggiungere ordinamento
2. Aggiungi nuovi prodotti all'array
3. Crea una funzione di ricerca con `.filter()`
4. Implementa un carrello con spread operator

### TypeScript
1. Aggiungi nuove interfacce (Cliente, Spedizione)
2. Crea utility types personalizzati
3. Implementa un sistema di ordinazione type-safe
4. Estendi il carrello con sconti e coupon

### React
1. Aggiungi priorità ai todo (alta/media/bassa)
2. Implementa date e scadenze
3. Crea categorie per i task
4. Aggiungi ricerca/ordinamento
5. Implementa drag & drop

---

## 🐛 Troubleshooting

### JavaScript ES6+
- **Errore fetch API:** Controlla la connessione internet per la demo users
- **Nessun output:** Apri Developer Tools (F12) per vedere errori console

### TypeScript
- **Errori compilazione:** Assicurati di avere TypeScript installato (`npm install`)
- **File .js non aggiornato:** Ricompila manualmente con `npx tsc`

### React
- **App non si carica:** Controlla console per errori Babel/React
- **State non persiste:** Verifica che localStorage sia abilitato nel browser
- **Stili mancanti:** Ricarica la pagina (Ctrl+R o Cmd+R)

---

## 📖 Risorse Aggiuntive

- [MDN - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React Documentation](https://react.dev/)
- [JavaScript.info](https://javascript.info/)

---

## ✅ Checklist Apprendimento

Dopo aver completato gli esempi, dovresti essere in grado di:

**JavaScript ES6+**
- [ ] Usare arrow functions correttamente
- [ ] Applicare destructuring a oggetti e array
- [ ] Manipolare array con map/filter/reduce
- [ ] Gestire operazioni asincrone con async/await
- [ ] Usare spread/rest operators

**TypeScript**
- [ ] Definire interfacce e tipi personalizzati
- [ ] Usare generics per funzioni riutilizzabili
- [ ] Applicare utility types (Partial, Pick, etc.)
- [ ] Implementare type guards
- [ ] Compilare file TypeScript

**React**
- [ ] Creare componenti funzionali
- [ ] Gestire stato con useState
- [ ] Usare effects con useEffect
- [ ] Passare props tra componenti
- [ ] Gestire eventi e form
- [ ] Renderizzare liste con map
- [ ] Implementare conditional rendering

---

**Buon divertimento con il codice! 🚀**
