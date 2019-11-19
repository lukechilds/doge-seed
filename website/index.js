/* eslint-env browser */
import 'babel-polyfill';
import noUiSlider from 'nouislider';
import {version} from '../package';
import dogeSeed from '..';

const bitsToWords = {
	128: 12,
	160: 15,
	192: 18,
	224: 21,
	256: 24
};

document.querySelector('.version').innerText = `v${version}`;

const seedText = document.querySelector('.seed-text');
const regenerateSeedButton = document.querySelector('.regenerate-seed');

const bitSlider = noUiSlider.create(document.querySelector('.bit-slider'), {
	range: {min: 128, max: 256},
	step: 32,
	start: 256,
	pips: {
		mode: 'steps',
		density: 1,
		format: {to: bits => bitsToWords[bits]},
		filter: (value, step) => step === 0 ? -1 : 1
	}
});

const generateSeed = () => {
	const bits = Number(bitSlider.get());
	const seedPhraseWords = dogeSeed(bits).split(' ');

	const wrappedSeedPhrase = seedPhraseWords.map(word => `<span>${word}</span>`).join(' ');
	const wordCount = seedPhraseWords.length;

	seedText.dataset.wordCount = wordCount;
	seedText.innerHTML = wrappedSeedPhrase;
};

regenerateSeedButton.addEventListener('click', generateSeed);
bitSlider.on('update', generateSeed);

generateSeed();
