import 'babel-polyfill';
import whenDomReady from 'when-dom-ready';
import dogeSeed from '../';

const main = async () => {
  await whenDomReady();

  const seedText = document.querySelector('.seed-text');
  const bits = document.querySelector('.bits');
  const generateSeedButton = document.querySelector('.generate-seed');

  const generateSeed = () => seedText.innerText = dogeSeed(bits.value);

  generateSeedButton.addEventListener('click', generateSeed);
  bits.addEventListener('input', generateSeed);

  generateSeed();
};

main();
