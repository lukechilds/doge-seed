import 'babel-polyfill';
import whenDomReady from 'when-dom-ready';
import dogeSeed from '../';

const bitsToWords = {
  128: 12,
  160: 15,
  192: 18,
  224: 21,
  256: 24
};

const main = async () => {
  await whenDomReady();

  const seedText = document.querySelector('.seed-text');
  const bits = document.querySelector('.bits');
  const regenerateSeedButton = document.querySelector('.regenerate-seed');

  const generateSeed = () => {
    const wordCount = bitsToWords[bits.value];
    seedText.dataset.wordCount = wordCount;

    const seedPhrase = dogeSeed(bits.value);
    const wrappedSeedPhrase = seedPhrase
      .split(' ')
      .map(word => `<span>${word}</span>`)
      .join(' ');

    seedText.innerHTML = wrappedSeedPhrase;
  };

  regenerateSeedButton.addEventListener('click', generateSeed);
  bits.addEventListener('input', generateSeed);

  generateSeed();
};

main();
