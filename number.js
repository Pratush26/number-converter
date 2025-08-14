var intToRoman = function (num) {
	const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];  //Decimal values
	const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];    //Targeted number's sign - here it is for Roman
	let r = '';
	for (let i = 0; i < values.length; i++) {
		if(num < values[i]) continue;
		else{
			r += symbols[i].repeat(Math.floor(num/values[i]));  //Sequencially add symbols as required / Math.Floor to get integer value / .repeat if there need any repeataion like 'iii'
			num %= values[i]
		}
	}
	return r;
};

console.log(intToRoman(8)); // you can provide any decimal value to get the targeted number system value - here it is for Roman
