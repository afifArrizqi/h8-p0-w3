function groupAnimals(animals) {
	// you can only write your code here!
	var newAnimals = [];
	var character = [];
	// GROUPING
	for (var i = 0; i < animals.length; i++) {
		for (var j = 0; j <= character.length; j++) {
			if (animals[i][0] === character[j]) {
				newAnimals[j].push(animals[i]);
				break;
			} else if (j === character.length) {
				character.push(animals[i][0]);
				newAnimals.push([animals[i]]);
				break;
			}
		}
	}

	// SHORTING
	for (var i = 0; i < newAnimals.length; i++) {
		for (var j = 0; j < newAnimals.length - 1; j++) {
			var a = newAnimals[j][0][0];
			var b = newAnimals[j + 1][0][0];
			if (a > b) {
				var temp = newAnimals[j];
				newAnimals[j] = newAnimals[j + 1];
				newAnimals[j + 1] = temp;
			}
		}
	}
	return newAnimals;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

//URUTKAN
//LOOP UNTIL MEET DIFFERENT CHAR OR END OF LENGTH THEN PUSH