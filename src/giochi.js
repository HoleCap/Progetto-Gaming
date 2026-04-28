let collezione = [];

const creaGioco = (titolo, piattaforma, genere, anno, studio) => {
    return {
        titolo: titolo,
        piattaforma: piattaforma,
        genere: genere,
        anno: parseInt(anno),
        studio: studio
    };
};

function aggiungiGioco(gioco) {
    collezione.push(gioco);
}

function rimuoviGioco(titoloDaCancellare) {
    const lunghezzaIniziale = collezione.length;
    collezione = collezione.filter(g => g.titolo.toLowerCase() !== titoloDaCancellare.toLowerCase());
    return collezione.length < lunghezzaIniziale;
}

function ottieniTutti() {
    return collezione;
}

const filtraPer = (proprieta, valore) => {
    return collezione.filter(g => g[proprieta].toLowerCase() === valore.toLowerCase());
};

function ordinaPer(proprieta) {
    return [...collezione].sort((a, b) => {
        if (a[proprieta] < b[proprieta]) return -1;
        if (a[proprieta] > b[proprieta]) return 1;
        return 0;
    });
}

const cercaGioco = (testo) => {
    const t = testo.toLowerCase();
    return collezione.filter(g => 
        g.titolo.toLowerCase().includes(t) || 
        g.studio.toLowerCase().includes(t)
    );
};