// ============================================
// TypeScript Demo - Esempi Pratici
// ============================================
// 1. TIPI BASE E TYPE INFERENCE
console.log('\n=== 1. TIPI BASE ===');
let nome = "Mario Rossi";
let eta = 30;
let attivo = true;
// Type inference
let citta = "Roma"; // TypeScript deduce che è string
console.log(`${nome}, ${eta} anni, ${citta}`);
// 2. INTERFACCE
console.log('\n=== 2. INTERFACCE ===');
const utente = {
    id: 1,
    nome: "Laura Bianchi",
    email: "laura@example.com",
    eta: 28
};
const admin = {
    id: 2,
    nome: "Marco Verdi",
    email: "marco@example.com",
    ruolo: "superadmin",
    permessi: ["read", "write", "delete"]
};
console.log("Utente:", utente);
console.log("Admin:", admin);
// 3. UNION E LITERAL TYPES
console.log('\n=== 3. UNION E LITERAL TYPES ===');
const richiesta1 = {
    id: 123,
    stato: "success",
    messaggio: "Operazione completata"
};
const richiesta2 = {
    id: "abc-456",
    stato: "error",
    messaggio: "Errore di connessione"
};
console.log("Richiesta 1:", richiesta1);
console.log("Richiesta 2:", richiesta2);
// 4. FUNZIONI TIPIZZATE
console.log('\n=== 4. FUNZIONI TIPIZZATE ===');
function calcolaTotale(prezzi) {
    return prezzi.reduce((sum, price) => sum + price, 0);
}
function formattaPrezzo(prezzo, valuta = "€") {
    return `${valuta}${prezzo.toFixed(2)}`;
}
// Arrow function con tipi
const sconto = (prezzo, percentuale) => {
    return prezzo * (1 - percentuale / 100);
};
const prezzi = [29.99, 49.99, 19.99];
const totale = calcolaTotale(prezzi);
const conSconto = sconto(totale, 10);
console.log(`Totale: ${formattaPrezzo(totale)}`);
console.log(`Con sconto 10%: ${formattaPrezzo(conSconto)}`);
// 5. GENERICS
console.log('\n=== 5. GENERICS ===');
// Funzione generica
function primoElemento(array) {
    return array[0];
}
function creaResponse(data, success = true) {
    return {
        success,
        data,
        timestamp: Date.now()
    };
}
const numeri = [1, 2, 3, 4, 5];
const nomi = ["Alice", "Bob", "Charlie"];
console.log("Primo numero:", primoElemento(numeri));
console.log("Primo nome:", primoElemento(nomi));
const userResponse = creaResponse(utente);
console.log("User Response:", userResponse);
// 6. TYPE GUARDS
console.log('\n=== 6. TYPE GUARDS ===');
function faiVerso(animale) {
    if (animale.tipo === "cane") {
        return animale.abbaia();
    }
    else {
        return animale.miagola();
    }
}
const cane = {
    tipo: "cane",
    abbaia: () => "Bau bau!"
};
const gatto = {
    tipo: "gatto",
    miagola: () => "Miao!"
};
console.log("Cane dice:", faiVerso(cane));
console.log("Gatto dice:", faiVerso(gatto));
// 7. UTILITY TYPES
console.log('\n=== 7. UTILITY TYPES ===');
const prodotto = {
    id: 1,
    nome: "Laptop",
    prezzo: 899.99,
    descrizione: "Laptop potente per sviluppatori",
    categoria: "electronics"
};
const aggiornamento = {
    prezzo: 799.99, // Solo il prezzo
};
const prodottoMinimo = {
    id: prodotto.id,
    nome: prodotto.nome,
    prezzo: prodotto.prezzo
};
console.log("Prodotto:", prodotto);
console.log("Aggiornamento:", aggiornamento);
console.log("Prodotto minimo:", prodottoMinimo);
// 8. CLASSI E INTERFACCE
console.log('\n=== 8. CLASSI E INTERFACCE ===');
class Auto {
    constructor(marca, modello, anno, kilometri = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.kilometri = kilometri;
    }
    descrivi() {
        return `${this.marca} ${this.modello} (${this.anno}) - ${this.kilometri}km`;
    }
    guidaPerKm(km) {
        this.kilometri += km;
    }
    getKilometri() {
        return this.kilometri;
    }
}
const auto = new Auto("Tesla", "Model 3", 2023);
console.log(auto.descrivi());
auto.guidaPerKm(150);
auto.guidaPerKm(75);
console.log(`Dopo il viaggio: ${auto.descrivi()}`);
// 9. ENUMS
console.log('\n=== 9. ENUMS ===');
var StatoOrdine;
(function (StatoOrdine) {
    StatoOrdine["InAttesa"] = "IN_ATTESA";
    StatoOrdine["Elaborazione"] = "ELABORAZIONE";
    StatoOrdine["Spedito"] = "SPEDITO";
    StatoOrdine["Consegnato"] = "CONSEGNATO";
    StatoOrdine["Annullato"] = "ANNULLATO";
})(StatoOrdine || (StatoOrdine = {}));
function getStatoColore(stato) {
    switch (stato) {
        case StatoOrdine.InAttesa:
            return "🟡 In Attesa";
        case StatoOrdine.Elaborazione:
            return "🔵 In Elaborazione";
        case StatoOrdine.Spedito:
            return "🟠 Spedito";
        case StatoOrdine.Consegnato:
            return "🟢 Consegnato";
        case StatoOrdine.Annullato:
            return "🔴 Annullato";
    }
}
const ordine = {
    id: 12345,
    stato: StatoOrdine.Spedito,
    totale: 149.99
};
console.log(`Ordine #${ordine.id}: ${getStatoColore(ordine.stato)} - €${ordine.totale}`);
// 10. DEMO E-COMMERCE COMPLETO
console.log('\n=== 10. E-COMMERCE DEMO ===');
class CarrelloAcquisti {
    constructor() {
        this.prodotti = [];
    }
    aggiungi(prodotto, quantita = 1) {
        const existing = this.prodotti.find(item => item.prodotto.id === prodotto.id);
        if (existing) {
            existing.quantita += quantita;
        }
        else {
            this.prodotti.push({ prodotto, quantita });
        }
    }
    calcolaTotale() {
        return this.prodotti.reduce((totale, item) => totale + (item.prodotto.prezzo * item.quantita), 0);
    }
    applicaSconto(percentuale) {
        const totale = this.calcolaTotale();
        return totale * (1 - percentuale / 100);
    }
    riepilogo() {
        console.log("\n📦 RIEPILOGO CARRELLO:");
        this.prodotti.forEach(item => {
            console.log(`  - ${item.prodotto.nome} x${item.quantita}: €${(item.prodotto.prezzo * item.quantita).toFixed(2)}`);
        });
        console.log(`\n💰 Totale: €${this.calcolaTotale().toFixed(2)}`);
        console.log(`🎉 Con sconto 15%: €${this.applicaSconto(15).toFixed(2)}`);
    }
}
// Creare prodotti
const prodotti = [
    {
        id: 1,
        nome: "Laptop Pro",
        prezzo: 1299.99,
        categoria: "electronics",
        disponibile: true,
        recensioni: [
            { utente: "Alice", voto: 5, commento: "Eccellente!" },
            { utente: "Bob", voto: 4, commento: "Molto buono" }
        ]
    },
    {
        id: 2,
        nome: "Mouse Wireless",
        prezzo: 29.99,
        categoria: "electronics",
        disponibile: true,
        recensioni: [
            { utente: "Charlie", voto: 5, commento: "Perfetto!" }
        ]
    },
    {
        id: 3,
        nome: "Tastiera Meccanica",
        prezzo: 89.99,
        categoria: "electronics",
        disponibile: true,
        recensioni: []
    }
];
// Test carrello
const carrello = new CarrelloAcquisti();
carrello.aggiungi(prodotti[0], 1);
carrello.aggiungi(prodotti[1], 2);
carrello.aggiungi(prodotti[2], 1);
carrello.riepilogo();
// Filtri type-safe
function filtraProdottiDisponibili(prodotti) {
    return prodotti.filter(p => p.disponibile);
}
function calcolaMediaRecensioni(prodotto) {
    if (prodotto.recensioni.length === 0)
        return 0;
    const somma = prodotto.recensioni.reduce((sum, r) => sum + r.voto, 0);
    return somma / prodotto.recensioni.length;
}
console.log("\n⭐ VALUTAZIONI:");
prodotti.forEach(p => {
    const media = calcolaMediaRecensioni(p);
    console.log(`  ${p.nome}: ${media > 0 ? media.toFixed(1) + ' stelle' : 'Nessuna recensione'}`);
});
console.log("\n✅ Compilazione TypeScript completata con successo!");
