const bip39 = require('bip39');

const dogeSeed = (entropy = 128) => {
    const dogeModifiers = ["so", "such", "many", "much", "very"];
    while (true) {
        const mnemonic = bip39.generateMnemonic(entropy).split(' ');
        if(dogeModifiers.includes(mnemonic[0]) && dogeModifiers.includes(mnemonic[2]) && mnemonic[0] !== mnemonic[2]) {
            return mnemonic.join(' ');
        }
    }
};

module.exports = dogeSeed;
