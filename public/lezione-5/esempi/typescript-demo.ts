// ============================================
// TypeScript Demo - Esempi Pratici
// ============================================

// 1. TIPI BASE E TYPE INFERENCE
console.log('\n=== 1. TIPI BASE ===');

let nome: string = "Mario Rossi";
let eta: number = 30;
let attivo: boolean = true;

// Type inference
let citta = "Roma"; // TypeScript deduce che è string
console.log(`${nome}, ${eta} anni, ${citta}`);

// 2. INTERFACCE
console.log('\n=== 2. INTERFACCE ===');

interface Utente {
    id: number;
    nome: string;
    email: string;
    eta?: number; // opzionale
}

interface Admin extends Utente {
    ruolo: string;
    permessi: string[];
}

const utente: Utente = {
    id: 1,
    nome: "Laura Bianchi",
    email: "laura@example.com",
    eta: 28
};

const admin: Admin = {
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

type Stato = "pending" | "success" | "error";
type ID = number | string;

interface Richiesta {
    id: ID;
    stato: Stato;
    messaggio: string;
}

const richiesta1: Richiesta = {
    id: 123,
    stato: "success",
    messaggio: "Operazione completata"
};

const richiesta2: Richiesta = {
    id: "abc-456",
    stato: "error",
    messaggio: "Errore di connessione"
};

console.log("Richiesta 1:", richiesta1);
console.log("Richiesta 2:", richiesta2);

// 4. FUNZIONI TIPIZZATE
console.log('\n=== 4. FUNZIONI TIPIZZATE ===');

function calcolaTotale(prezzi: number[]): number {
    return prezzi.reduce((sum, price) => sum + price, 0);
}

function formattaPrezzo(prezzo: number, valuta: string = "€"): string {
    return `${valuta}${prezzo.toFixed(2)}`;
}

// Arrow function con tipi
const sconto = (prezzo: number, percentuale: number): number => {
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
function primoElemento<T>(array: T[]): T | undefined {
    return array[0];
}

// Wrapper per API response
interface ApiResponse<T> {
    success: boolean;
    data: T;
    timestamp: number;
}

function creaResponse<T>(data: T, success: boolean = true): ApiResponse<T> {
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

type Cane = {
    tipo: "cane";
    abbaia: () => string;
};

type Gatto = {
    tipo: "gatto";
    miagola: () => string;
};

type Animale = Cane | Gatto;

function faiVerso(animale: Animale): string {
    if (animale.tipo === "cane") {
        return animale.abbaia();
    } else {
        return animale.miagola();
    }
}

const cane: Cane = {
    tipo: "cane",
    abbaia: () => "Bau bau!"
};

const gatto: Gatto = {
    tipo: "gatto",
    miagola: () => "Miao!"
};

console.log("Cane dice:", faiVerso(cane));
console.log("Gatto dice:", faiVerso(gatto));

// 7. UTILITY TYPES
console.log('\n=== 7. UTILITY TYPES ===');

interface Prodotto {
    id: number;
    nome: string;
    prezzo: number;
    descrizione: string;
    categoria: string;
}

// Partial: tutti i campi opzionali
type AggiornaProdotto = Partial<Prodotto>;

// Pick: seleziona solo alcuni campi
type ProdottoMinimo = Pick<Prodotto, "id" | "nome" | "prezzo">;

// Omit: escludi alcuni campi
type ProdottoSenzaDescrizione = Omit<Prodotto, "descrizione">;

// Readonly: tutti i campi immutabili
type ProdottoImmutabile = Readonly<Prodotto>;

const prodotto: Prodotto = {
    id: 1,
    nome: "Laptop",
    prezzo: 899.99,
    descrizione: "Laptop potente per sviluppatori",
    categoria: "electronics"
};

const aggiornamento: AggiornaProdotto = {
    prezzo: 799.99, // Solo il prezzo
};

const prodottoMinimo: ProdottoMinimo = {
    id: prodotto.id,
    nome: prodotto.nome,
    prezzo: prodotto.prezzo
};

console.log("Prodotto:", prodotto);
console.log("Aggiornamento:", aggiornamento);
console.log("Prodotto minimo:", prodottoMinimo);

// 8. CLASSI E INTERFACCE
console.log('\n=== 8. CLASSI E INTERFACCE ===');

interface Veicolo {
    marca: string;
    modello: string;
    anno: number;
    descrivi(): string;
}

class Auto implements Veicolo {
    constructor(
        public marca: string,
        public modello: string,
        public anno: number,
        private kilometri: number = 0
    ) {}

    descrivi(): string {
        return `${this.marca} ${this.modello} (${this.anno}) - ${this.kilometri}km`;
    }

    guidaPerKm(km: number): void {
        this.kilometri += km;
    }

    getKilometri(): number {
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

enum StatoOrdine {
    InAttesa = "IN_ATTESA",
    Elaborazione = "ELABORAZIONE",
    Spedito = "SPEDITO",
    Consegnato = "CONSEGNATO",
    Annullato = "ANNULLATO"
}

interface Ordine {
    id: number;
    stato: StatoOrdine;
    totale: number;
}

function getStatoColore(stato: StatoOrdine): string {
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

const ordine: Ordine = {
    id: 12345,
    stato: StatoOrdine.Spedito,
    totale: 149.99
};

console.log(`Ordine #${ordine.id}: ${getStatoColore(ordine.stato)} - €${ordine.totale}`);

// 10. DEMO E-COMMERCE COMPLETO
console.log('\n=== 10. E-COMMERCE DEMO ===');

interface ProdottoEcommerce {
    id: number;
    nome: string;
    prezzo: number;
    categoria: string;
    disponibile: boolean;
    recensioni: Recensione[];
}

interface Recensione {
    utente: string;
    voto: number;
    commento: string;
}

interface Carrello {
    prodotti: CarrelloItem[];
    calcolaTotale(): number;
    applicaSconto(percentuale: number): number;
}

interface CarrelloItem {
    prodotto: ProdottoEcommerce;
    quantita: number;
}

class CarrelloAcquisti implements Carrello {
    prodotti: CarrelloItem[] = [];

    aggiungi(prodotto: ProdottoEcommerce, quantita: number = 1): void {
        const existing = this.prodotti.find(item => item.prodotto.id === prodotto.id);
        if (existing) {
            existing.quantita += quantita;
        } else {
            this.prodotti.push({ prodotto, quantita });
        }
    }

    calcolaTotale(): number {
        return this.prodotti.reduce(
            (totale, item) => totale + (item.prodotto.prezzo * item.quantita),
            0
        );
    }

    applicaSconto(percentuale: number): number {
        const totale = this.calcolaTotale();
        return totale * (1 - percentuale / 100);
    }

    riepilogo(): void {
        console.log("\n📦 RIEPILOGO CARRELLO:");
        this.prodotti.forEach(item => {
            console.log(`  - ${item.prodotto.nome} x${item.quantita}: €${(item.prodotto.prezzo * item.quantita).toFixed(2)}`);
        });
        console.log(`\n💰 Totale: €${this.calcolaTotale().toFixed(2)}`);
        console.log(`🎉 Con sconto 15%: €${this.applicaSconto(15).toFixed(2)}`);
    }
}

// Creare prodotti
const prodotti: ProdottoEcommerce[] = [
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
function filtraProdottiDisponibili(prodotti: ProdottoEcommerce[]): ProdottoEcommerce[] {
    return prodotti.filter(p => p.disponibile);
}

function calcolaMediaRecensioni(prodotto: ProdottoEcommerce): number {
    if (prodotto.recensioni.length === 0) return 0;
    const somma = prodotto.recensioni.reduce((sum, r) => sum + r.voto, 0);
    return somma / prodotto.recensioni.length;
}

console.log("\n⭐ VALUTAZIONI:");
prodotti.forEach(p => {
    const media = calcolaMediaRecensioni(p);
    console.log(`  ${p.nome}: ${media > 0 ? media.toFixed(1) + ' stelle' : 'Nessuna recensione'}`);
});

console.log("\n✅ Compilazione TypeScript completata con successo!");
