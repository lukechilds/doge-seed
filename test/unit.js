import test from 'ava';
import dogeSeed from '..';

test('Seed phrases contain the words "much", "such" and "very"', t => {
	const words = [...new Set(
		new Array(1000)
			.fill()
			.map(dogeSeed)
			.map(seedPhrase => [seedPhrase.split(' ')[0], seedPhrase.split(' ')[2]])
			.reduce((a, b) => a.concat(b), [])
	)];

	t.is(words.length, 3);
	t.true(words.includes('much'));
	t.true(words.includes('such'));
	t.true(words.includes('very'));
});
