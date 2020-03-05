function groupAnimals(animals) {
	// you can only write your code here!
	var arrBaru = [];
	for (var i = 0; i < animals.length; i++) {
		if (animals[i][0] > arrBaru[arrBaru.length - 1][0]) arrBaru.push(animals[i]);
		else arrBaru.unshift(animals[i]);
	}
	return arrBaru;
}

// TEST CASES
// console.log(groupAnimals([ 'cacing', 'ayam', 'kuda', 'anoa', 'kancil' ]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals([ 'cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

// var kamus = 'abcdefghijklmnopqrstuvwxyz';
// var kms = 'ack';
// var arrBaru = [];
// for (var i = 0; i < animals.length; i++) {
// 	// console.log(`i : ${animals[i][0]}`);
// 	var temp = [ animals[i] ];
// 	if (arrBaru.length === 0) arrBaru.push(temp);
// 	for (var j = 0; j < arrBaru.length; j++) {
// 		// console.log(`j : ${arrBaru[j][0][0]}`);
// 		// console.log(arrBaru[j][arrBaru[j].length]);
// 		console.log(arrBaru.length);
// 		if (animals[i][0] === arrBaru[j][0][0]) arrBaru[j][arrBaru[j].length] = animals[j];
// 		else arrBaru.push(temp);
// 		// console.log(arrBaru);
// 	}
// }
// return arrBaru;
