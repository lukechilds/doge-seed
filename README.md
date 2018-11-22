# doge-seed

> Dank mnemonic seed phrases

[![Build Status](https://travis-ci.com/lukechilds/doge-seed.svg?branch=master)](https://travis-ci.com/lukechilds/doge-seed)
[![Coverage Status](https://coveralls.io/repos/github/lukechilds/doge-seed/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/doge-seed?branch=master)
[![npm](https://img.shields.io/npm/v/doge-seed.svg)](https://www.npmjs.com/package/doge-seed)

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

## License

MIT © Luke Childs
