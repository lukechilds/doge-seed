const randomBytes = require('randombytes');
const bip39 = require('bip39');

const MUCH = '10010001000';
const SUCH = '11011000011';
const VERY = '11110010111';

const bytesToBinary = buffer => buffer
  .toString('hex')
  .match(/.{2}/g)
  .map(byte => parseInt(byte, 16).toString(2).padStart(8, '0'))
  .join('');

const binaryToBytes = binaryString => Buffer.from(
  binaryString
    .match(/(.{1,8})/g)
    .map(binary => parseInt(binary, 2))
);

const randomNumberBetween = (min, max) => Math.floor(parseInt(randomBytes(1).toString('hex'), 16) / 256 * (max - min + 1) + min);

const dogeSeed = (bits = 128) => {
  if (bits <= 0 || bits % 8 !== 0) {
    throw TypeError('bits must be divisible by 8');
  }

  const entropy = randomBytes(bits / 8);
  const words = bytesToBinary(entropy).match(/.{1,11}/g);

  const dogeModifiers = [
    MUCH,
    SUCH,
    VERY
  ];

  const index = randomNumberBetween(0, dogeModifiers.length - 1);
  words[0] = dogeModifiers[index];
  dogeModifiers.splice(index, 1);
  words[2] = dogeModifiers[randomNumberBetween(0, dogeModifiers.length - 1)];

  const dogefiedEntropy = binaryToBytes(words.join(''));

  return bip39.entropyToMnemonic(dogefiedEntropy);
};

module.exports = dogeSeed;
