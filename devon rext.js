// Enkel funktion för att visa en slumpmässig fakta
const faktaBtn = document.getElementById('faktaBtn');
const faktaText = document.getElementById('faktaText');

const fakta = [
    "Devon Rex-katter gillar att sitta på axlarna!",
    "De är ofta kallade 'alien-katter' på grund av sina stora öron.",
    "Trots sin päls är de ganska känsliga för kyla.",
    "Rasen är känd för att vara väldigt lojal mot sina ägare.",
    "De kan lära sig trick som en hund!"
];

faktaBtn.addEventListener('click', () => {
    const slump = Math.floor(Math.random() * fakta.length);
    faktaText.textContent = fakta[slump];
});

// Formulärhantering
const kontaktForm = document.getElementById('kontaktForm');
const formSvar = document.getElementById('formSvar');

kontaktForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const namn = document.getElementById('namn').value;
    formSvar.textContent = `Tack för ditt meddelande, ${namn}! Vi hör av oss snart.`;
    kontaktForm.reset();
});
