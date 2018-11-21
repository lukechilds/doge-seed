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

test('Default seed phrase length is 12 words', t => {
	const seedPhrase = dogeSeed();

	t.is(seedPhrase.split(' ').length, 12);
});

test('Bit length is configurable', t => {
	t.is(dogeSeed(128).split(' ').length, 12);
	t.is(dogeSeed(160).split(' ').length, 15);
	t.is(dogeSeed(192).split(' ').length, 18);
	t.is(dogeSeed(224).split(' ').length, 21);
	t.is(dogeSeed(256).split(' ').length, 24);
});

test('Throws on invalid bit length', t => {
	t.throws(() => dogeSeed(-1));
	t.throws(() => dogeSeed(0));
	t.throws(() => dogeSeed(1));
	t.throws(() => dogeSeed(1.5));
	t.throws(() => dogeSeed(129));
	t.throws(() => dogeSeed(219.5));
	t.throws(() => dogeSeed(512));
});
