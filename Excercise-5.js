function palindrome(kata) {
	// you can only write your code here!
	var bool = true;
	var i = 0;
	var j = kata.length - 1;
	while (i < kata.length) {
		kata[i] === kata[j] ? (bool = true) : (bool = false);
		i++;
		j--;
	}
	return bool;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
