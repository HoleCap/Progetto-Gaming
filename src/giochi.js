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

