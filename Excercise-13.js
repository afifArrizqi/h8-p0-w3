function targetTerdekat(arr) {
	// you can only write your code here!
	var jarak = 0;
	var o,
		x = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === 'o') o = i;
		if (arr[i] === 'x') x.push(i);
	}
	for (var j = 0; j < x.length; j++) {
		var temp = x[j] - o;
		temp < 0 ? (temp *= -1) : (temp *= 1);
		if (jarak === 0) jarak = temp;
		jarak > temp ? (jarak = temp) : (jarak = jarak);
	}
	return jarak;
}

// TEST CASES
console.log(targetTerdekat([ ' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x' ])); // 3
console.log(targetTerdekat([ 'o', ' ', ' ', ' ', 'x', 'x', 'x' ])); // 4
console.log(targetTerdekat([ 'x', ' ', ' ', ' ', 'x', 'x', 'o', ' ' ])); // 1
console.log(targetTerdekat([ ' ', ' ', 'o', ' ' ])); // 0
console.log(targetTerdekat([ ' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x' ])); // 2
