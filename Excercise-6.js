function angkaPalindrome(num) {
	// you can only write your code here!
	var palindrome = false;
	if (num < 9) return num + 1;
	else {
		while (!palindrome) {
			num = num.toString();
			var i = 0,
				j = num.length - 1,
				check = false;
			while (i < num.length) {
				num[i] === num[j] ? (check = true) : (check = false);
				i++;
				j--;
			}
			num = Number(num);
			palindrome = check;
			if (!palindrome) num++;
		}

		return num;
	}
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
