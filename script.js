function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	onst obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    if (typeof num !== 'number' || num < 0 || num > 100000) {
        // Handle invalid input (not a number or out of range)
        return 'Invalid input';
    }

    let roman = '';
    for (const key in obj) {
        const [symbol, value] = obj[key];
        while (num >= value) {
            roman += symbol;
            num -= value;
        }
    }

    return roman;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
