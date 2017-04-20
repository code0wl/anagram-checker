'use strict';

const fetch = require("node-fetch");

module.exports = class AnagramGenerator {

	constructor(word) {
		this.url = `https://owlbot.info/api/v1/dictionary`;
		this.permutations = [];
		this.results = [];
		this.generate(word);
		this.permute(word);
		this.makeRequest();
	}

	generate(word) {
		if (typeof word !== "string") {
			console.error('provide a string as a first argument');
			return false;
		}
	}

	swap(chars, i, j) {
		const tmp = chars[i];
		chars[i] = chars[j];
		chars[j] = tmp;
	}

	permute(word) {
		let counter = [],
			chars = word.split(''),
			length = chars.length,
			i;

		for (i = 0; i < length; i++) {
			counter[i] = 0;
		}

		this.permutations.push(word);

		i = 0;

		while (i < length) {
			if (counter[i] < i) {
				this.swap(chars, i % 2 === 1 ? counter[i] : 0, i);
				counter[i]++;
				i = 0;
				this.permutations.push(chars.join(''));
			} else {
				counter[i] = 0;
				i++;
			}
		}

	}

	makeRequest() {
		for (let permutation in this.permutations) {
			if (this.permutations[permutation]) {
				console.info(`a total of ${permutation} from ${this.permutations.length} requests made for `, this.permutations[permutation]);
				fetch(`${this.url}/${this.permutations[permutation]}`)
					.then((response) => {
						return response.text()
					})
					.then((body) => {
						if (body.length > 2 && this.permutations[permutation]) {
							this.results.push(this.permutations[permutation]);
							this.printResults();
						}
					});
			}
		}
	}

	printResults() {
		console.info(this.results);
	}

};
