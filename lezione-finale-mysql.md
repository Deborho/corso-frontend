# Lezione Finale MySQL - Progetto Pratico Completo

## Scenario: Sistema di Gestione E-Commerce "TechStore"

**Durata:** 2 ore  
**Obiettivo:** Applicare tutte le competenze SQL acquisite durante il corso creando e gestendo un database per un negozio online.

---

## Narrativa

Sei stato assunto come Database Administrator junior presso **TechStore**, un'azienda di e-commerce che vende prodotti tecnologici. L'azienda sta lanciando una nuova piattaforma e-commerce e ti è stato chiesto di progettare e implementare il database che gestirà clienti, prodotti, ordini e recensioni.

Il tuo manager ti ha fornito i requisiti e ti chiede di:
1. Creare la struttura del database
2. Popolare le tabelle con dati di test
3. Eseguire query per generare report di business

---

## Scaletta della Lezione (2 ore)

### Parte 1: Setup del Database (20 minuti)
- [1.1] Creazione del database
- [1.2] Creazione delle tabelle (struttura relazionale)
- [1.3] Tipi di dati e vincoli

### Parte 2: Popolamento Dati (15 minuti)
- [2.1] Inserimento dati nelle tabelle
- [2.2] Verifica dei dati inseriti

### Parte 3: Query di Base (20 minuti)
- [3.1] SELECT e filtri WHERE
- [3.2] LIKE e pattern matching
- [3.3] Operatori logici (AND, OR, NOT)
- [3.4] BETWEEN e IN

### Parte 4: Aggregazione e Ordinamento (20 minuti)
- [4.1] Funzioni aggregate (COUNT, SUM, AVG, MAX, MIN)
- [4.2] GROUP BY e HAVING
- [4.3] ORDER BY e DISTINCT

### Parte 5: JOIN e Relazioni (25 minuti)
- [5.1] INNER JOIN
- [5.2] LEFT JOIN e RIGHT JOIN
- [5.3] SELF JOIN

### Parte 6: Modifiche Struttura e Dati (10 minuti)
- [6.1] ALTER TABLE
- [6.2] UPDATE e DELETE

### Parte 7: Report Finali (10 minuti)
- [7.1] Query complesse di business intelligence

---

## PARTE 1: Setup del Database

### 1.1 Creazione del Database

```sql
-- Creiamo il database per TechStore
CREATE DATABASE techstore;

-- Selezioniamo il database
USE techstore;
```

**Concetti Quiz:** Domanda 1 - `CREATE DATABASE`

---

### 1.2 Creazione delle Tabelle

#### Tabella Categorie

```sql
CREATE TABLE categorie (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    descrizione TEXT
);
```

#### Tabella Prodotti

```sql
CREATE TABLE prodotti (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    categoria_id INT,
    prezzo DECIMAL(10,2) NOT NULL,
    quantita_disponibile INT DEFAULT 0,
    data_inserimento DATE,
    UNIQUE (nome),
    FOREIGN KEY (categoria_id) REFERENCES categorie(id)
);
```

**Concetti Quiz:** 
- Domanda 2 - `DECIMAL(10,2)` per i prezzi
- Domanda 20 - `UNIQUE` per evitare duplicati

#### Tabella Clienti

```sql
CREATE TABLE clienti (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cognome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    citta VARCHAR(50),
    data_registrazione DATE DEFAULT (CURRENT_DATE)
);
```

#### Tabella Ordini

```sql
CREATE TABLE ordini (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT,
    data_ordine DATE,
    totale DECIMAL(10,2),
    stato VARCHAR(20) DEFAULT 'In attesa',
    FOREIGN KEY (cliente_id) REFERENCES clienti(id)
);
```

#### Tabella Dettagli Ordine

```sql
CREATE TABLE dettagli_ordine (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ordine_id INT,
    prodotto_id INT,
    quantita INT NOT NULL,
    prezzo_unitario DECIMAL(10,2),
    FOREIGN KEY (ordine_id) REFERENCES ordini(id),
    FOREIGN KEY (prodotto_id) REFERENCES prodotti(id)
);
```

#### Tabella Dipendenti (per SELF JOIN)

```sql
CREATE TABLE dipendenti (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    ruolo VARCHAR(50),
    manager_id INT,
    stipendio DECIMAL(10,2),
    FOREIGN KEY (manager_id) REFERENCES dipendenti(id)
);
```

---

## PARTE 2: Popolamento Dati

### 2.1 Inserimento Dati

#### Inserimento Categorie

```sql
INSERT INTO categorie (nome, descrizione) VALUES
('Smartphone', 'Telefoni cellulari e accessori'),
('Computer', 'Laptop, desktop e componenti'),
('Audio', 'Cuffie, speaker e sistemi audio'),
('Gaming', 'Console, giochi e accessori gaming');
```

**Concetto Quiz:** Domanda 4 - Sintassi corretta di `INSERT INTO`

#### Inserimento Prodotti

```sql
INSERT INTO prodotti (nome, categoria_id, prezzo, quantita_disponibile, data_inserimento) VALUES
('iPhone 15 Pro', 1, 1299.99, 50, '2024-01-15'),
('Samsung Galaxy S24', 1, 999.99, 75, '2024-01-20'),
('MacBook Pro 14"', 2, 2499.99, 30, '2024-02-01'),
('Dell XPS 15', 2, 1899.99, 25, '2024-02-10'),
('AirPods Pro', 3, 279.99, 100, '2024-01-05'),
('Sony WH-1000XM5', 3, 349.99, 60, '2024-01-10'),
('PlayStation 5', 4, 549.99, 40, '2024-02-15'),
('Nintendo Switch OLED', 4, 349.99, 80, '2024-02-20'),
('Xiaomi 14', 1, 799.99, 45, '2024-03-01'),
('Marshall Speaker', 3, 199.99, 35, '2024-03-05');
```

#### Inserimento Clienti

```sql
INSERT INTO clienti (nome, cognome, email, citta, data_registrazione) VALUES
('Mario', 'Rossi', 'mario.rossi@email.it', 'Milano', '2024-01-01'),
('Laura', 'Bianchi', 'laura.bianchi@email.it', 'Roma', '2024-01-15'),
('Giuseppe', 'Verdi', 'giuseppe.verdi@email.it', 'Napoli', '2024-02-01'),
('Anna', 'Neri', 'anna.neri@email.it', 'Milano', '2024-02-10'),
('Marco', 'Ferrari', 'marco.ferrari@email.it', 'Torino', '2024-02-20'),
('Giulia', 'Marchetti', 'giulia.marchetti@email.it', 'Firenze', '2024-03-01'),
('Luca', 'Romano', 'luca.romano@email.it', 'Roma', '2024-03-10'),
('Francesca', 'Martini', 'francesca.martini@email.it', 'Milano', '2024-03-15');
```

#### Inserimento Ordini

```sql
INSERT INTO ordini (cliente_id, data_ordine, totale, stato) VALUES
(1, '2024-03-01', 1579.98, 'Completato'),
(2, '2024-03-05', 2499.99, 'Completato'),
(3, '2024-03-10', 899.98, 'Spedito'),
(1, '2024-03-15', 349.99, 'In attesa'),
(4, '2024-03-18', 549.99, 'Completato'),
(5, '2024-03-20', 1349.98, 'Spedito'),
(2, '2024-03-22', 279.99, 'In attesa'),
(6, '2024-03-25', 999.99, 'Completato');
```

#### Inserimento Dettagli Ordine

```sql
INSERT INTO dettagli_ordine (ordine_id, prodotto_id, quantita, prezzo_unitario) VALUES
(1, 1, 1, 1299.99),
(1, 5, 1, 279.99),
(2, 3, 1, 2499.99),
(3, 7, 1, 549.99),
(3, 8, 1, 349.99),
(4, 6, 1, 349.99),
(5, 7, 1, 549.99),
(6, 2, 1, 999.99),
(6, 6, 1, 349.99),
(7, 5, 1, 279.99),
(8, 2, 1, 999.99);
```

#### Inserimento Dipendenti

```sql
INSERT INTO dipendenti (nome, ruolo, manager_id, stipendio) VALUES
('Roberto Conti', 'CEO', NULL, 8000.00),
('Elena Russo', 'Direttore Vendite', 1, 5000.00),
('Paolo Greco', 'Direttore IT', 1, 5000.00),
('Sara Lombardi', 'Venditore Senior', 2, 3000.00),
('Marco Rizzo', 'Venditore', 2, 2500.00),
('Chiara Moretti', 'Sviluppatore', 3, 3500.00),
('Andrea Colombo', 'Sviluppatore Junior', 3, 2200.00);
```

---

### 2.2 Verifica Dati

```sql
-- Verifichiamo i dati inseriti
SELECT * FROM categorie;
SELECT * FROM prodotti;
SELECT * FROM clienti;
SELECT * FROM ordini;
```

---

## PARTE 3: Query di Base

### 3.1 SELECT e Filtri WHERE

**Concetto Quiz:** Domanda 3 - `WHERE` per filtrare risultati

```sql
-- Tutti i prodotti
SELECT * FROM prodotti;

-- Solo nome e prezzo dei prodotti
SELECT nome, prezzo FROM prodotti;

-- Prodotti con prezzo maggiore di 500€
SELECT nome, prezzo 
FROM prodotti 
WHERE prezzo > 500;

-- Prodotti della categoria Smartphone (categoria_id = 1)
SELECT nome, prezzo 
FROM prodotti 
WHERE categoria_id = 1;

-- Ordini completati
SELECT * FROM ordini 
WHERE stato = 'Completato';
```

---

### 3.2 LIKE e Pattern Matching

**Concetto Quiz:** Domanda 8 - `LIKE 'Mar%'` per valori che iniziano con "Mar"

```sql
-- Clienti il cui nome inizia con 'Mar'
SELECT nome, cognome, email 
FROM clienti 
WHERE nome LIKE 'Mar%';

-- Prodotti che contengono 'Pro' nel nome
SELECT nome, prezzo 
FROM prodotti 
WHERE nome LIKE '%Pro%';

-- Email che terminano con '.it'
SELECT nome, cognome, email 
FROM clienti 
WHERE email LIKE '%.it';

-- Prodotti con nome di esattamente 7 caratteri che inizia con 'X'
SELECT nome FROM prodotti WHERE nome LIKE 'X______';
```

---

### 3.3 Operatori Logici (AND, OR, NOT)

**Concetto Quiz:** Domanda 9 - `AND` restituisce TRUE se entrambe le condizioni sono vere

```sql
-- Prodotti con prezzo tra 200€ e 500€ E disponibili (quantità > 0)
SELECT nome, prezzo, quantita_disponibile 
FROM prodotti 
WHERE prezzo > 200 AND prezzo < 500 AND quantita_disponibile > 0;

-- Prodotti della categoria Smartphone O Gaming
SELECT nome, prezzo, categoria_id 
FROM prodotti 
WHERE categoria_id = 1 OR categoria_id = 4;

-- Clienti che NON sono di Milano
SELECT nome, cognome, citta 
FROM clienti 
WHERE NOT citta = 'Milano';
-- Oppure: WHERE citta != 'Milano';

-- Combinazione: Prodotti costosi (>1000€) di Milano o Roma
SELECT c.nome, c.cognome, c.citta 
FROM clienti c 
WHERE (citta = 'Milano' OR citta = 'Roma') 
AND data_registrazione > '2024-02-01';
```

---

### 3.4 BETWEEN e IN

**Concetto Quiz:** 
- Domanda 10 - `BETWEEN` per intervalli
- Domanda 19 - `IN` per lista di valori

```sql
-- Prodotti con prezzo tra 300€ e 1000€
SELECT nome, prezzo 
FROM prodotti 
WHERE prezzo BETWEEN 300 AND 1000;

-- Ordini effettuati a marzo 2024
SELECT * FROM ordini 
WHERE data_ordine BETWEEN '2024-03-01' AND '2024-03-31';

-- Clienti di Milano, Roma o Napoli
SELECT nome, cognome, citta 
FROM clienti 
WHERE citta IN ('Milano', 'Roma', 'Napoli');

-- Prodotti delle categorie Smartphone e Audio
SELECT nome, prezzo, categoria_id 
FROM prodotti 
WHERE categoria_id IN (1, 3);
```

---

## PARTE 4: Aggregazione e Ordinamento

### 4.1 Funzioni Aggregate

**Concetti Quiz:**
- Domanda 11 - `SUM()` per la somma
- Domanda 17 - `COUNT()` per contare le righe

```sql
-- Contare il numero totale di prodotti
SELECT COUNT(*) AS totale_prodotti FROM prodotti;

-- Contare i prodotti per categoria
SELECT categoria_id, COUNT(*) AS numero_prodotti 
FROM prodotti 
GROUP BY categoria_id;

-- Somma totale del valore dell'inventario
SELECT SUM(prezzo * quantita_disponibile) AS valore_inventario 
FROM prodotti;

-- Prezzo medio dei prodotti
SELECT AVG(prezzo) AS prezzo_medio FROM prodotti;

-- Prodotto più costoso e meno costoso
SELECT MAX(prezzo) AS prezzo_massimo, MIN(prezzo) AS prezzo_minimo 
FROM prodotti;

-- Totale vendite (somma di tutti gli ordini)
SELECT SUM(totale) AS totale_vendite FROM ordini;
```

---

### 4.2 GROUP BY e HAVING

**Concetto Quiz:** Domanda 12 - `HAVING` per filtrare dopo GROUP BY

```sql
-- Numero di clienti per città
SELECT citta, COUNT(*) AS numero_clienti 
FROM clienti 
GROUP BY citta;

-- Totale ordini per cliente
SELECT cliente_id, COUNT(*) AS numero_ordini, SUM(totale) AS totale_speso 
FROM ordini 
GROUP BY cliente_id;

-- Solo clienti con più di 1 ordine (HAVING)
SELECT cliente_id, COUNT(*) AS numero_ordini 
FROM ordini 
GROUP BY cliente_id 
HAVING COUNT(*) > 1;

-- Categorie con valore inventario superiore a 50000€
SELECT categoria_id, SUM(prezzo * quantita_disponibile) AS valore 
FROM prodotti 
GROUP BY categoria_id 
HAVING SUM(prezzo * quantita_disponibile) > 50000;
```

---

### 4.3 ORDER BY e DISTINCT

**Concetti Quiz:**
- Domanda 6 - `DISTINCT` elimina i duplicati
- Domanda 18 - `ORDER BY colonna DESC` per ordine decrescente

```sql
-- Prodotti ordinati per prezzo (crescente)
SELECT nome, prezzo 
FROM prodotti 
ORDER BY prezzo;

-- Prodotti ordinati per prezzo (decrescente)
SELECT nome, prezzo 
FROM prodotti 
ORDER BY prezzo DESC;

-- Ordini ordinati per data (più recenti prima)
SELECT * FROM ordini 
ORDER BY data_ordine DESC;

-- Lista città univoche dei clienti
SELECT DISTINCT citta FROM clienti;

-- Stati ordini univoci
SELECT DISTINCT stato FROM ordini;

-- Ordinamento multiplo: per città e poi per cognome
SELECT nome, cognome, citta 
FROM clienti 
ORDER BY citta ASC, cognome ASC;
```

---

## PARTE 5: JOIN e Relazioni

### 5.1 INNER JOIN

**Concetto Quiz:** Domanda 13 - `INNER JOIN` restituisce solo righe con corrispondenze in entrambe le tabelle

```sql
-- Ordini con nome del cliente
SELECT o.id, c.nome, c.cognome, o.data_ordine, o.totale, o.stato
FROM ordini o
INNER JOIN clienti c ON o.cliente_id = c.id;

-- Prodotti con nome della categoria
SELECT p.nome AS prodotto, p.prezzo, cat.nome AS categoria
FROM prodotti p
INNER JOIN categorie cat ON p.categoria_id = cat.id;

-- Dettagli ordine con nome prodotto
SELECT do.ordine_id, p.nome, do.quantita, do.prezzo_unitario
FROM dettagli_ordine do
INNER JOIN prodotti p ON do.prodotto_id = p.id;
```

---

### 5.2 LEFT JOIN e RIGHT JOIN

**Concetto Quiz:** Domanda 14 - `LEFT JOIN` restituisce NULL quando non c'è corrispondenza nella tabella destra

```sql
-- Tutti i clienti e i loro ordini (anche clienti senza ordini)
SELECT c.nome, c.cognome, c.citta, o.id AS ordine_id, o.totale
FROM clienti c
LEFT JOIN ordini o ON c.id = o.cliente_id;

-- Clienti che non hanno mai effettuato ordini
SELECT c.nome, c.cognome, c.email
FROM clienti c
LEFT JOIN ordini o ON c.id = o.cliente_id
WHERE o.id IS NULL;

-- Tutti i prodotti e le categorie (anche prodotti senza categoria)
SELECT p.nome, p.prezzo, cat.nome AS categoria
FROM prodotti p
LEFT JOIN categorie cat ON p.categoria_id = cat.id;
```

---

### 5.3 SELF JOIN

**Concetto Quiz:** Domanda 15 - `SELF JOIN` è una tabella che si unisce a se stessa

```sql
-- Dipendenti con il nome del loro manager
SELECT 
    d.nome AS dipendente, 
    d.ruolo, 
    m.nome AS manager
FROM dipendenti d
LEFT JOIN dipendenti m ON d.manager_id = m.id;

-- Solo dipendenti che hanno un manager
SELECT 
    d.nome AS dipendente, 
    d.ruolo,
    d.stipendio,
    m.nome AS manager
FROM dipendenti d
INNER JOIN dipendenti m ON d.manager_id = m.id;
```

---

## PARTE 6: Modifiche Struttura e Dati

### 6.1 ALTER TABLE

**Concetto Quiz:** Domanda 7 - `ALTER TABLE tabella ADD colonna tipo`

```sql
-- Aggiungere una colonna telefono ai clienti
ALTER TABLE clienti ADD telefono VARCHAR(20);

-- Aggiungere una colonna sconto ai prodotti
ALTER TABLE prodotti ADD sconto DECIMAL(5,2) DEFAULT 0.00;

-- Verificare la nuova struttura
DESCRIBE clienti;
DESCRIBE prodotti;

-- Modificare il tipo di una colonna
ALTER TABLE prodotti MODIFY sconto DECIMAL(5,2) DEFAULT 0.00;

-- Rinominare una colonna
ALTER TABLE prodotti CHANGE sconto percentuale_sconto DECIMAL(5,2);
```

---

### 6.2 UPDATE e DELETE

**Concetti Quiz:**
- Domanda 5 - `UPDATE` per aggiornare dati
- Domanda 16 - `DELETE FROM tabella` per eliminare dati mantenendo la struttura

```sql
-- Aggiornare il telefono di un cliente
UPDATE clienti 
SET telefono = '02-1234567' 
WHERE id = 1;

-- Applicare uno sconto del 10% ai prodotti Gaming
UPDATE prodotti 
SET percentuale_sconto = 10.00 
WHERE categoria_id = 4;

-- Aumentare il prezzo del 5% per tutti i prodotti Apple
UPDATE prodotti 
SET prezzo = prezzo * 1.05 
WHERE nome LIKE '%iPhone%' OR nome LIKE '%Mac%' OR nome LIKE '%AirPods%';

-- Eliminare ordini in attesa più vecchi di 30 giorni (esempio)
-- ATTENZIONE: Prima verificare cosa verrà eliminato!
SELECT * FROM ordini 
WHERE stato = 'In attesa' 
AND data_ordine < DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY);

-- Poi eliminare
DELETE FROM ordini 
WHERE stato = 'In attesa' 
AND data_ordine < DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY);
```

---

## PARTE 7: Report Finali

### 7.1 Query Complesse di Business Intelligence

#### Report 1: Vendite per Categoria

```sql
SELECT 
    cat.nome AS categoria,
    COUNT(DISTINCT do.ordine_id) AS numero_ordini,
    SUM(do.quantita) AS unita_vendute,
    SUM(do.quantita * do.prezzo_unitario) AS fatturato
FROM categorie cat
INNER JOIN prodotti p ON cat.id = p.categoria_id
INNER JOIN dettagli_ordine do ON p.id = do.prodotto_id
GROUP BY cat.id, cat.nome
ORDER BY fatturato DESC;
```

#### Report 2: Top 5 Clienti per Spesa

```sql
SELECT 
    c.nome,
    c.cognome,
    c.citta,
    COUNT(o.id) AS numero_ordini,
    SUM(o.totale) AS totale_speso
FROM clienti c
INNER JOIN ordini o ON c.id = o.cliente_id
GROUP BY c.id, c.nome, c.cognome, c.citta
ORDER BY totale_speso DESC
LIMIT 5;
```

#### Report 3: Prodotti Mai Venduti

```sql
SELECT p.nome, p.prezzo, p.quantita_disponibile
FROM prodotti p
LEFT JOIN dettagli_ordine do ON p.id = do.prodotto_id
WHERE do.id IS NULL;
```

#### Report 4: Performance Vendite Mensile

```sql
SELECT 
    DATE_FORMAT(data_ordine, '%Y-%m') AS mese,
    COUNT(*) AS numero_ordini,
    SUM(totale) AS fatturato_totale,
    AVG(totale) AS valore_medio_ordine
FROM ordini
GROUP BY DATE_FORMAT(data_ordine, '%Y-%m')
ORDER BY mese;
```

#### Report 5: Struttura Organizzativa con Stipendi

```sql
SELECT 
    d.nome AS dipendente,
    d.ruolo,
    d.stipendio,
    m.nome AS manager,
    (d.stipendio / m.stipendio * 100) AS percentuale_stipendio_manager
FROM dipendenti d
LEFT JOIN dipendenti m ON d.manager_id = m.id
ORDER BY d.stipendio DESC;
```

---

## Riepilogo Concetti del Quiz

| Domanda | Concetto | Query Esempio |
|---------|----------|---------------|
| 1 | CREATE DATABASE | `CREATE DATABASE techstore;` |
| 2 | DECIMAL per prezzi | `prezzo DECIMAL(10,2)` |
| 3 | WHERE per filtri | `WHERE prezzo > 500` |
| 4 | INSERT INTO | `INSERT INTO tabella (col) VALUES (val)` |
| 5 | UPDATE | `UPDATE tabella SET col = val WHERE ...` |
| 6 | DISTINCT | `SELECT DISTINCT citta FROM clienti` |
| 7 | ALTER TABLE ADD | `ALTER TABLE clienti ADD telefono VARCHAR(20)` |
| 8 | LIKE 'Mar%' | `WHERE nome LIKE 'Mar%'` |
| 9 | AND | `WHERE prezzo > 100 AND categoria_id = 1` |
| 10 | BETWEEN | `WHERE prezzo BETWEEN 300 AND 1000` |
| 11 | SUM() | `SELECT SUM(prezzo) FROM prodotti` |
| 12 | HAVING | `GROUP BY ... HAVING COUNT(*) > 1` |
| 13 | INNER JOIN | `FROM ordini INNER JOIN clienti ON ...` |
| 14 | LEFT JOIN + NULL | `LEFT JOIN ... WHERE col IS NULL` |
| 15 | SELF JOIN | `FROM dipendenti d JOIN dipendenti m ON d.manager_id = m.id` |
| 16 | DELETE FROM | `DELETE FROM tabella WHERE ...` |
| 17 | COUNT() | `SELECT COUNT(*) FROM tabella` |
| 18 | ORDER BY DESC | `ORDER BY prezzo DESC` |
| 19 | IN | `WHERE citta IN ('Milano', 'Roma')` |
| 20 | UNIQUE | `UNIQUE (nome)` nella CREATE TABLE |

---

## Esercizi Aggiuntivi (se rimane tempo)

### Esercizio 1
Trova tutti i clienti di Roma che hanno effettuato almeno un ordine superiore a 500€.

```sql
SELECT DISTINCT c.nome, c.cognome
FROM clienti c
INNER JOIN ordini o ON c.id = o.cliente_id
WHERE c.citta = 'Roma' AND o.totale > 500;
```

### Esercizio 2
Calcola la spesa media per città, mostrando solo le città con spesa media superiore a 1000€.

```sql
SELECT c.citta, AVG(o.totale) AS spesa_media
FROM clienti c
INNER JOIN ordini o ON c.id = o.cliente_id
GROUP BY c.citta
HAVING AVG(o.totale) > 1000;
```

### Esercizio 3
Trova i prodotti con prezzo superiore alla media di tutti i prodotti.

```sql
SELECT nome, prezzo
FROM prodotti
WHERE prezzo > (SELECT AVG(prezzo) FROM prodotti)
ORDER BY prezzo DESC;
```

---

## Pulizia Finale (Opzionale)

```sql
-- Eliminare tutte le tabelle (in ordine inverso rispetto alla creazione per i vincoli FK)
DROP TABLE IF EXISTS dettagli_ordine;
DROP TABLE IF EXISTS ordini;
DROP TABLE IF EXISTS prodotti;
DROP TABLE IF EXISTS dipendenti;
DROP TABLE IF EXISTS clienti;
DROP TABLE IF EXISTS categorie;

-- Eliminare il database
DROP DATABASE IF EXISTS techstore;
```

---

## Note per il Docente

- **Tempo stimato per ogni sezione** è indicativo e può essere adattato
- Si consiglia di eseguire le query insieme agli studenti in un ambiente MySQL reale
- Per ogni sezione, verificare che tutti abbiano compreso prima di procedere
- I report finali possono essere usati come esercizi individuali o di gruppo
- Il file può essere proiettato durante la lezione come riferimento per le query
