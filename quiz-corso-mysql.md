# Quiz - Corso MySQL

20 domande a scelta multipla sugli argomenti del corso MySQL

---

## 1. Quale comando SQL si usa per creare un nuovo database?

a) NEW DATABASE nome_db  
b) MAKE DATABASE nome_db  
c) CREATE DATABASE nome_db ✓  
d) ADD DATABASE nome_db

---

## 2. Quale tipo di dato MySQL è più adatto per memorizzare un prezzo con decimali?

a) INT  
b) VARCHAR(10)  
c) DECIMAL(10,2) ✓  
d) FLOAT

---

## 3. Quale clausola si usa per filtrare i risultati di una query SELECT?

a) FILTER  
b) WHERE ✓  
c) HAVING  
d) CONDITION

---

## 4. Quale comando INSERT è corretto per inserire dati in una tabella?

a) INSERT VALUES INTO tabella (colonne)  
b) INSERT INTO tabella (colonne) VALUES (valori) ✓  
c) INSERT tabella VALUES (valori)  
d) ADD INTO tabella (colonne) VALUES (valori)

---

## 5. Quale comando si usa per aggiornare dati esistenti in una tabella?

a) MODIFY  
b) CHANGE  
c) UPDATE ✓  
d) ALTER

---

## 6. Cosa fa la clausola DISTINCT in una query SELECT?

a) Ordina i risultati in modo univoco  
b) Elimina i record duplicati dal risultato ✓  
c) Conta i valori distinti  
d) Raggruppa i dati per colonna

---

## 7. Quale comando ALTER TABLE si usa per aggiungere una nuova colonna?

a) ALTER TABLE tabella NEW COLUMN colonna tipo  
b) ALTER TABLE tabella ADD colonna tipo ✓  
c) ALTER TABLE tabella INSERT COLUMN colonna tipo  
d) ALTER TABLE tabella CREATE colonna tipo

---

## 8. Quale operatore LIKE si usa per trovare valori che iniziano con "Mar"?

a) LIKE '%Mar'  
b) LIKE 'Mar%' ✓  
c) LIKE '_Mar_'  
d) LIKE 'Mar_'

---

## 9. Quale operatore logico restituisce TRUE solo se ENTRAMBE le condizioni sono vere?

a) OR  
b) NOT  
c) AND ✓  
d) XOR

---

## 10. Per selezionare tutti gli ordini con data_ordine nell'anno 2024, quale condizione è corretta?

a) WHERE data_ordine = 2024
b) WHERE data_ordine >= '2024-01-01' AND data_ordine <= '2024-12-31' ✓  
c) WHERE data_ordine IN (2024)`
d) WHERE YEAR = 2024

---

## 11. Quale funzione aggregata calcola la somma dei valori?

a) COUNT()  
b) AVG()  
c) SUM() ✓  
d) TOTAL()

---

## 12. Quale clausola si usa per filtrare i risultati DOPO un GROUP BY?

a) WHERE  
b) FILTER  
c) HAVING ✓  
d) CONDITION

---

## 13. Quale tipo di JOIN restituisce solo le righe con corrispondenze in entrambe le tabelle?

a) LEFT JOIN  
b) RIGHT JOIN  
c) INNER JOIN ✓  
d) FULL JOIN

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

## 16. Quale comando si usa per eliminare tutti i dati da una tabella mantenendo la struttura?

a) DROP TABLE tabella  
b) DELETE FROM tabella ✓  
c) REMOVE tabella  
d) CLEAR TABLE tabella

---

## 17. Quale funzione aggregata conta il numero di righe in una tabella?

a) SUM()  
b) TOTAL()  
c) COUNT() ✓  
d) NUM()

---

## 18. Quale clausola ORDER BY ordina i risultati in ordine decrescente?

a) ORDER BY colonna REVERSE  
b) ORDER BY colonna DOWN  
c) ORDER BY colonna DESC ✓  
d) ORDER BY colonna DESCENDING

---

## 19. Quale funzione restituisce il valore massimo di una colonna?

a) TOP()  
b) HIGHEST()  
c) MAX() ✓  
d) GREATEST()

---

## 20. Quale vincolo impedisce di inserire valori duplicati in una colonna?

a) NOT NULL  
b) PRIMARY KEY  
c) UNIQUE ✓  
d) CHECK

---

## Riepilogo Risposte Corrette

1. c) CREATE DATABASE nome_db
2. c) DECIMAL(10,2)
3. b) WHERE
4. b) INSERT INTO tabella (colonne) VALUES (valori)
5. c) UPDATE
6. b) Elimina i record duplicati dal risultato
7. b) ALTER TABLE tabella ADD colonna tipo
8. b) LIKE 'Mar%'
9. c) AND
10. b) WHERE data_ordine >= '2024-01-01' AND data_ordine <= '2024-12-31'
11. c) SUM()
12. c) HAVING
13. c) INNER JOIN
14. c) Valori NULL per le colonne della tabella destra
15. b) Una tabella che si unisce a se stessa
16. b) DELETE FROM tabella
17. c) COUNT()
18. c) ORDER BY colonna DESC
19. c) MAX()
20. c) UNIQUE
