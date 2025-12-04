# Quiz - Corso MySQL

20 domande a scelta multipla sugli argomenti del corso MySQL

---

## 1. Quale comando SQL si usa per creare un nuovo database?

a) `NEW DATABASE nome_db`  
b) `MAKE DATABASE nome_db`  
c) `CREATE DATABASE nome_db` ✓  
d) `ADD DATABASE nome_db`

---

## 2. Quale tipo di dato MySQL è più adatto per memorizzare un prezzo con decimali?

a) `INT`  
b) `VARCHAR(10)`  
c) `DECIMAL(10,2)` ✓  
d) `FLOAT`

---

## 3. Quale clausola si usa per filtrare i risultati di una query SELECT?

a) `FILTER`  
b) `WHERE` ✓  
c) `HAVING`  
d) `CONDITION`

---

## 4. Quale comando INSERT è corretto per inserire dati in una tabella?

a) `INSERT VALUES INTO tabella (colonne)`  
b) `INSERT INTO tabella (colonne) VALUES (valori)` ✓  
c) `INSERT tabella VALUES (valori)`  
d) `ADD INTO tabella (colonne) VALUES (valori)`

---

## 5. Quale comando si usa per aggiornare dati esistenti in una tabella?

a) `MODIFY`  
b) `CHANGE`  
c) `UPDATE` ✓  
d) `ALTER`

---

## 6. Cosa fa la clausola DISTINCT in una query SELECT?

a) Ordina i risultati in modo univoco  
b) Elimina i record duplicati dal risultato ✓  
c) Conta i valori distinti  
d) Raggruppa i dati per colonna

---

## 7. Quale comando ALTER TABLE si usa per aggiungere una nuova colonna?

a) `ALTER TABLE tabella NEW COLUMN colonna tipo`  
b) `ALTER TABLE tabella ADD colonna tipo` ✓  
c) `ALTER TABLE tabella INSERT COLUMN colonna tipo`  
d) `ALTER TABLE tabella CREATE colonna tipo`

---

## 8. Quale operatore LIKE si usa per trovare valori che iniziano con "Mar"?

a) `LIKE '%Mar'`  
b) `LIKE 'Mar%'` ✓  
c) `LIKE '_Mar_'`  
d) `LIKE 'Mar_'`

---

## 9. Quale operatore logico restituisce TRUE solo se ENTRAMBE le condizioni sono vere?

a) `OR`  
b) `NOT`  
c) `AND` ✓  
d) `XOR`

---

## 10. Quale operatore si usa per verificare se un valore è compreso in un intervallo?

a) `IN`  
b) `BETWEEN` ✓  
c) `RANGE`  
d) `WITHIN`

---

## 11. Quale funzione aggregata calcola la somma dei valori?

a) `COUNT()`  
b) `AVG()`  
c) `SUM()` ✓  
d) `TOTAL()`

---

## 12. Quale clausola si usa per filtrare i risultati DOPO un GROUP BY?

a) `WHERE`  
b) `FILTER`  
c) `HAVING` ✓  
d) `CONDITION`

---

## 13. Quale tipo di JOIN restituisce solo le righe con corrispondenze in entrambe le tabelle?

a) `LEFT JOIN`  
b) `RIGHT JOIN`  
c) `INNER JOIN` ✓  
d) `FULL JOIN`

---

## 14. Cosa restituisce un LEFT JOIN quando non c'è corrispondenza nella tabella destra?

a) Nessuna riga  
b) Un errore  
c) Valori NULL per le colonne della tabella destra ✓  
d) Valori vuoti

---

## 15. Cos'è una SELF JOIN?

a) Una join automatica  
b) Una tabella che si unisce a se stessa ✓  
c) Una join senza condizioni  
d) Una join con più tabelle

---

## 16. Quale operatore verifica se una subquery restituisce almeno una riga?

a) `IN`  
b) `ANY`  
c) `EXISTS` ✓  
d) `SOME`

---

## 17. Dove può essere posizionata una subquery che restituisce un singolo valore (scalar subquery)?

a) Solo nel WHERE  
b) Solo nel FROM  
c) Nel SELECT, WHERE o HAVING ✓  
d) Solo nell'ORDER BY

---

## 18. Cosa sono le tabelle temporanee in MySQL?

a) Tabelle che si cancellano dopo ogni query  
b) Tabelle visibili solo nella sessione corrente che si eliminano alla chiusura della connessione ✓  
c) Tabelle che durano solo 24 ore  
d) Tabelle che non possono essere modificate

---

## 19. Quale sintassi crea una tabella temporanea da una query esistente?

a) `CREATE TEMP TABLE nome SELECT ...`  
b) `CREATE TEMPORARY TABLE nome AS SELECT ...` ✓  
c) `MAKE TEMP TABLE nome FROM SELECT ...`  
d) `SELECT INTO TEMP nome FROM ...`

---

## 20. Cos'è una CTE (Common Table Expression)?

a) Una tabella permanente con nome comune  
b) Una query temporanea definita con WITH che esiste solo per la durata di una singola query ✓  
c) Una procedura memorizzata  
d) Un tipo di indice speciale

---

## Riepilogo Risposte Corrette

1. c) `CREATE DATABASE nome_db`
2. c) `DECIMAL(10,2)`
3. b) `WHERE`
4. b) `INSERT INTO tabella (colonne) VALUES (valori)`
5. c) `UPDATE`
6. b) Elimina i record duplicati dal risultato
7. b) `ALTER TABLE tabella ADD colonna tipo`
8. b) `LIKE 'Mar%'`
9. c) `AND`
10. b) `BETWEEN`
11. c) `SUM()`
12. c) `HAVING`
13. c) `INNER JOIN`
14. c) Valori NULL per le colonne della tabella destra
15. b) Una tabella che si unisce a se stessa
16. c) `EXISTS`
17. c) Nel SELECT, WHERE o HAVING
18. b) Tabelle visibili solo nella sessione corrente che si eliminano alla chiusura della connessione
19. b) `CREATE TEMPORARY TABLE nome AS SELECT ...`
20. b) Una query temporanea definita con WITH che esiste solo per la durata di una singola query
