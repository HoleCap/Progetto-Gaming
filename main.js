"use strict";

const prompt = require("prompt-sync")();
const utils = require("./src/giochi.js");

function Menu(){
    let continua = true;

    while(continua){
        console.log("\n--- LIBRERIA GIOCHI ---");
        console.log("1. Inserisci nuovo titolo");
        console.log("2. Elimina titolo");
        console.log("3. Mostra tutta la collezione");
        console.log("4. Filtra (per piattaforma o genere)");
        console.log("5. Ordina (per titolo o anno)");
        console.log("6. Cerca (per testo)");
        console.log("0. Esci");

        const scelta = prompt("Opzione: ");

        switch(scelta){
            case "1":
                const t = prompt("Titolo: ");
                const p = prompt("Piattaforma: ");
                const g = prompt("Genere: ");
                const a = prompt("Anno: ");
                const s = prompt("Studio: ");
                
                const nuovoGioco = utils.creaGioco(t, p, g, a, s);
                utils.aggiungiGioco(nuovoGioco);
                console.log("Ottimo! Gioco aggiunto.");
                break;

            case "2":
                const titoloCanc = prompt("Titolo del gioco da rimuovere: ");
                const rimosso = utils.rimuoviGioco(titoloCanc);
                console.log(rimosso ? "Gioco rimosso con successo." : "Errore: gioco non trovato.");
                break;

            case "3":
                console.log("\n--- COLLEZIONE COMPLETA ---");
                console.table(utils.ottieniTutti());
                break;

            case "4":
                const tipoFiltro = prompt("Vuoi filtrare per 'piattaforma' o 'genere'? ");
                const valoreFiltro = prompt(`Inserisci il valore per ${tipoFiltro}: `);
                console.table(utils.filtraPer(tipoFiltro, valoreFiltro));
                break;

            case "5":
                const tipoOrdine = prompt("Vuoi ordinare per 'titolo' o 'anno'? ");
                console.table(utils.ordinaPer(tipoOrdine));
                break;

            case "6":
                const query = prompt("Inserisci parte del titolo o dello studio: ");
                console.table(utils.cercaGioco(query));
                break;

            case "0":
                console.log("Chiusura programma...");
                continua = false;
                break;

            default:
                console.log("Opzione errata, riprova!");
        }
    }
}

Menu();