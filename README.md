# A module for generating anagrams

### Installation

#### npm
```bash
$ npm i anagram-generator -S
```

#### yarn
```bash
$ yarn add anagram-generator
```

### Usage
```ecmascript 6
import generate from 'anagram-generator';

const bores = generate(
    'bores', 3
);

const noter = generate(
    'notes', 2
);

console.log(bores); // bores, robes, sober
console.log(noter); // noter, toner
```