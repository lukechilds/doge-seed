/* eslint-env browser */
import '@fontsource/comic-neue';
import '@fontsource/bricolage-grotesque/400.css';
import '@fontsource/bricolage-grotesque/600.css';
import '@fontsource/bricolage-grotesque/700.css';
import '@fontsource/bricolage-grotesque/800.css';
import '@fontsource/dm-mono/400.css';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import {version} from '../package';
import dogeSeed from '..';

import reportWebVitals from './vercel-vitals';

Array.from(document.querySelectorAll('[data-latex]')).forEach(element => {
	katex.render(element.dataset.latex, element, {throwOnError: false});
});

document.querySelector('.version').innerText = `v${version}`;

const seedText = document.querySelector('.seed-text');
const regenerateSeedButton = document.querySelector('.regenerate-seed');
const bitSlider = document.querySelector('.bit-slider input');

const generateSeed = () => {
	const bits = Number(bitSlider.value);
	const seedPhraseWords = dogeSeed(bits).split(' ');

	const wrappedSeedPhrase = seedPhraseWords.map(word => `<span>${word}</span>`).join(' ');
	const wordCount = seedPhraseWords.length;

	seedText.dataset.wordCount = wordCount;
	seedText.innerHTML = wrappedSeedPhrase;
};

regenerateSeedButton.addEventListener('click', generateSeed);
bitSlider.addEventListener('input', generateSeed);

generateSeed();

reportWebVitals();
