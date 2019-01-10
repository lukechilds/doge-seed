import 'babel-polyfill';
import whenDomReady from 'when-dom-ready';
import dogeSeed from '../';

const main = async () => {
  await whenDomReady();

  const seedText = document.querySelector('.seed-text');
  const bits = document.querySelector('.bits');
  const regenerateSeedButton = document.querySelector('.regenerate-seed');

  const generateSeed = () => seedText.innerText = dogeSeed(bits.value);

  regenerateSeedButton.addEventListener('click', generateSeed);
  bits.addEventListener('input', generateSeed);

  generateSeed();
};

main();
