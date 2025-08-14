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




// This is another type of conversion - Roman to Decimal
var romanToInt = function(s) {
	const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	let r = null;
	let indx = null;
	for (let i = 0; i < s.length; i++) {
		if (symbols.includes(s[i] + s[i+1])) {
			indx = symbols.indexOf(s[i] + s[i+1])
			i++;
		}else indx = symbols.indexOf(s[i])
		r += values[indx]
	}
	return r;
};

console.log(romanToInt('III'));

