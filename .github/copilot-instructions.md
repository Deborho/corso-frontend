# Copilot Instructions - Corso Frontend

## Project Overview

This is an **Italian-language educational course** for front-end web development and MySQL databases. The codebase is a static content site served via Express.js, containing structured lessons on HTML, CSS, Bootstrap, SASS, JavaScript (ES6+), TypeScript, React, and SQL/MySQL.

## Architecture

```
corso-frontend/
├── server.js          # Express static file server with helmet/compression
├── ecosystem.config.js # PM2 cluster configuration for production
├── quiz-corso-frontend.md  # Multiple choice quiz for frontend course
├── quiz-corso-mysql.md     # Multiple choice quiz for MySQL course
├── public/            # All static content (HTML lessons, CSS, examples)
│   ├── style.css      # Global stylesheet for all lessons
│   ├── corso-frontend/ # Main frontend course index
│   ├── corso-mysql/   # SQL/MySQL course (lezione-1 to lezione-14)
│   ├── lezione-1/ to lezione-5/  # Basic lessons (HTML→JS)
│   ├── lezione-avanzata-1/ to lezione-avanzata-4/  # Advanced JS topics
│   └── lezione-finale/ # Step-by-step Todo app project
```

## Content Structure Conventions

### Lesson Naming Pattern
- `lezione-X/index.html` - Lesson introduction/overview
- `lezione-X/lezione-X-Y.html` - Sub-lesson content (e.g., `lezione-3-2.html`)
- `lezione-X/lezione-X-99.html` - Practical example page for the lesson
- `lezione-X/lezione-X-99.css/.scss` - Associated stylesheets for examples
- `lezione-X/esempi/` - Interactive demos and code examples

### HTML Template Pattern
All lesson pages follow this structure:
```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lezione X.Y - Topic</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Lezione X.Y - Topic</h1>
            <p>Subtitle</p>
        </div>
        <div class="teoria"><!-- Theory blocks --></div>
        <!-- Content: h2, h3, tables, ul/ol -->
        <div class="navigazione"><!-- Navigation links --></div>
    </div>
</body>
</html>
```

### MySQL Course Structure (`corso-mysql/`)
The MySQL course covers:
- Lezioni 1-3: SQL basics, CREATE DATABASE, CREATE TABLE
- Lezioni 4-5: INSERT, SELECT, UPDATE, DELETE
- Lezione 6: DISTINCT queries
- Lezione 7: ALTER TABLE (columns, primary keys, rename)
- Lezioni 8-9: WHERE, LIKE, AND/OR/NOT, BETWEEN, IN
- Lezione 10: Aggregate functions (SUM, COUNT, AVG, MAX, MIN)
- Lezione 11: ORDER BY, GROUP BY, HAVING
- Lezione 12: JOIN (INNER, LEFT, RIGHT, CROSS, SELF)
- Lezione 13: Subquery (nested queries, EXISTS, ANY, ALL)
- Lezione 14: Temporary tables, CTE

SQL examples use `<div class="codice"><pre>` for code blocks and `<div class="anteprima">` for results.

## Styling Conventions

### Global CSS Classes (`public/style.css`)
- `.container` - Main content wrapper (1000px max-width, white bg)
- `.header` - Lesson header with bottom border
- `.teoria` - Theory/concept blocks (gray bg, left border)
- `.codice` - Code block styling (for SQL/code examples)
- `.anteprima` - Preview/result display
- `.esempio` - Example wrapper with highlighted styling
- `.navigazione` / `.nav` - Navigation section at bottom
- `.print-only` / `.no-print` - Print media control

### SASS Examples (Lezione 4)
When creating SASS examples, follow the patterns in `lezione-4/lezione-4-99.scss`:
- Use `$color` maps with `map-get()` helper functions
- Define `$spacing-unit` for consistent spacing
- Create mixins for common patterns (`@mixin flex-center`, `@mixin card-hover`)
- Use `@include responsive($breakpoint)` pattern for media queries

## Development Commands

```bash
npm start          # Production: node server.js
npm run dev        # Development: nodemon with hot reload
npm run deploy     # Install deps + restart PM2 cluster
npm run logs       # View PM2 logs
npm run status     # Check PM2 process status
```

## Code Examples Pattern

Interactive examples in `esempi/` folders should:
1. Be self-contained HTML files with embedded CSS/JS
2. Include clear comments in Italian explaining concepts
3. Use console output for demonstrating results
4. For JavaScript modules, follow MVC pattern (see `lezione-avanzata-1/modules/`)

### JavaScript Module Pattern Example
```javascript
// todoController.js - Controller coordinates Model and View
import { TodoModel } from './todoModel.js';
import { TodoView } from './todoView.js';

export class TodoController {
    constructor() {
        this.model = new TodoModel();
        this.view = new TodoView();
    }
}
```

## Language & Localization

- **All content is in Italian** - maintain Italian for user-facing text
- Comments in code examples should be in Italian
- Variable/function names can use English (standard practice)

## Key Files Reference

| File | Purpose |
|------|---------|
| `public/style.css` | Global lesson styling - modify for site-wide changes |
| `public/corso-frontend/index.html` | Frontend course index - update when adding lessons |
| `public/corso-mysql/index.html` | MySQL course index - update when adding lessons |
| `server.js` | Static server config - helmet CSP disabled for inline scripts |
| `lezione-finale/` | Progressive Todo app tutorial - shows full-stack integration |
| `quiz-corso-frontend.md` | Quiz questions for frontend course |
| `quiz-corso-mysql.md` | Quiz questions for MySQL course |

## Adding New Lessons

### Frontend Course
1. Create folder: `public/lezione-X/`
2. Add `index.html` (overview) following template pattern
3. Add numbered sub-lessons: `lezione-X-1.html`, `lezione-X-2.html`, etc.
4. Add example page: `lezione-X-99.html` with practical demo
5. Update course index at `public/corso-frontend/index.html`
6. Add `esempi/` folder for interactive demos if needed

### MySQL Course
1. Create folder: `public/corso-mysql/lezione-X/`
2. Add `index.html` (introduction with objectives and theory overview)
3. Add numbered sub-lessons: `lezione-X-1.html`, `lezione-X-2.html`, etc.
4. Use `<div class="codice"><pre>` for SQL code examples
5. Use `<div class="anteprima"><pre>` for query results
6. Update course index at `public/corso-mysql/index.html`

