# doge-seed

> Dank mnemonic seed phrases - [dogeseed.com](https://dogeseed.com)

[![Build Status](https://travis-ci.com/lukechilds/doge-seed.svg?branch=master)](https://travis-ci.com/lukechilds/doge-seed)
[![Coverage Status](https://coveralls.io/repos/github/lukechilds/doge-seed/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/doge-seed?branch=master)
[![npm](https://img.shields.io/npm/v/doge-seed.svg)](https://www.npmjs.com/package/doge-seed)
[![tippin.me](https://badgen.net/badge/%E2%9A%A1%EF%B8%8Ftippin.me/@lukechilds/F0918E)](https://tippin.me/@lukechilds)

Generates a cryptographically secure mnemonic seed phrase with added dankness. The first four words will be a randomly generated Doge-like sentence.

The seed phrases are fully valid checksummed BIP39 seeds. They can be used with any cryptocurrency and can be imported into any BIP39 compliant wallet.

## Install

```shell
npm install doge-seed
```

## Usage

```js
const dogeSeed = require('doge-seed');

dogeSeed();
// "very salad such muffin column peasant enhance similar smooth shine trust swamp"

dogeSeed(128);
// "much abuse very party absent paddle barely pluck weird unveil vast oyster"

dogeSeed(256);
// "such unfair much flame belt wrestle blind gather frown around electric awesome fun tuition cattle knee tag adapt scene remember sentence crush carbon toast"
```

## API

### dogeSeed([bits])

Returns a BIP39 mnemonic seed phrase.

#### bits

Type: `Number`<br>
Default: `128`

The number of bits to derive a BIP39 mnemonic from.

Must be an integer, divisible by 32, larger than 128, and smaller than 256.

**Note:** This is not the resulting amount of entropy.

## How Secure Is This?

The mnemonic is seeded by a cryptographically secure random number generator. However there is a slight reduction in entropy due to the introduction of the doge-isms. A doge seed has about 19.415 fewer bits of entropy than a standard BIP39 seed of equivalent length.

Each word in a standard BIP39 mnemonic has 2048 possible values (11 bits of entropy). However a 1 bit checksum is added for every 3 words. These checksum bits reduce the entropy of the last word. That can be expressed as:

<div align="center">

  ![*S = log2(2048<sup>W</sup>) - (W/3)*](https://latex.codecogs.com/svg.latex?S&space;=&space;log2(2048^{W})&space;-&space;\frac{W}{3})

  <sup>Where S is entropy and W is number of words</sup>

</div>

A doge seed is the same apart from two changes. The first word is one of the three words "much", "such", or "very". The third word is one of two words from the previous selection that wasn't chosen for the first word. That can be expressed as:

<div align="center">

  ![*S = log2(2048<sup>W-2</sup>) + log2(3) + log2(2) - (W/3)*](https://latex.codecogs.com/svg.latex?S&space;=&space;log2(2048^{W-2})&space;+&space;log2(3)&space;+&space;log2(2)&space;-&space;\frac{W}{3})

  <sup>Where S is entropy and W is number of words</sup>

</div>

You can compare the entropy against standard BIP39 seeds in the table below.

|Word Count|Standard BIP39 Entropy|Doge Seed Entropy|
|:---:|:---:|:---:|
|12|128 bits|108.585 bits|
|15|160 bits|140.585 bits|
|18|192 bits|172.585 bits|
|21|224 bits|204.585 bits|
|24|256 bits|236.585 bits|

Although 108.585 bits (12 word doge seed) is a lot of entropy, a Bitcoin private key has 128 bits of entropy, so you probably want your BIP39 seed to have more than or equal that amount to avoid reducing overall security.

**TL;DR:** If for some insane reason you actually use this over a standard BIP39 seed, it would probably be best to use 15 words or more.

## Related

- [doge-seed-cli](https://github.com/sindresorhus/doge-seed-cli) - Command-line tool

## License

MIT © Luke Childs
