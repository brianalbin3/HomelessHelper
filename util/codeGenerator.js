
// Generates an 8 digit code string
const generateCode = () => {
    const CODE_LENGTH = 8;

    let code = '';

    for (let i = 0; i < CODE_LENGTH; i ++) {
        code += getRandomInt(10)
    }

    return code;
}

// Generates a number between 0 and max-1
const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {generateCode}