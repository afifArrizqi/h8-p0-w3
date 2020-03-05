function hitungJumlahKata(kalimat) {
	// you can only write your code here!
	var arr = [];
	for (var i = 0; i < kalimat.length; i++) {
		var kataBaru = '';
		while (kalimat[i] !== ' ' && i < kalimat.length) {
			kataBaru += kalimat[i];
			i++;
		}
		arr.push(kataBaru);
	}
	return arr.length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
