# A module to generate anagrams

### Installation

```sh
$ npm i anagram-generator -S
```

```sh
$ yarn add anagram-generator
```

### Usage
```typescript
import Anagramify from 'anagram-generator';

const bores = Anagramify(
    'bores', 3
);

const noter = Anagramify(
    'notes', 2
);

console.log(bores); // bores, robes, sober
console.log(noter); // noter, toner
```