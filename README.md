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

## License

MIT © Luke Childs
