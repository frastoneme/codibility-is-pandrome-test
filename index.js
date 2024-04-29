function reverseNumber(num) {
    if (num < 0) {
      return false
    }
  
    let reversed = 0;
    let number = num;
  
    while (num !== 0) {
      const digit = num % 10; // Extract the last digit
      reversed = reversed * 10 + digit; // Append the digit to the reversed number
       num = Math.trunc(num / 10); // Remove the last digit
    }
  
    return reversed === number;
  
  }
    console.log(reverseNumber(121121)); 
