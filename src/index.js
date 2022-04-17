const messages = [
    'Juan',
    'Edson',
    'Edgar',
    'José',
    'Perla',
    'Concepción',
    'Manuel',
    'Lupita'
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()  * messages.length)];

    console.log(message);
};

module.exports = { randomMsg };