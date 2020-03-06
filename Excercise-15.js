function groupAnimals(animals) {
	// you can only write your code here!
	var newAnimals = [];
	for (let i = 0; i < animals.length; i++) {
		var check = false;
		for (var j = 0; j < newAnimals.length; j++) {
			if (newAnimals[j][0][0] === animals[i][0]) {
				check = true;
				newAnimals[j].push(animals[i]);
			}
		}
		if (!check) {
			newAnimals.push([animals[i]]);
		}
	}

	// SORTING
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