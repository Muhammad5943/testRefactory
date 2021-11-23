let input = 'Balonku ada lima'
let isPalindrome = false

for (let i = 0; i < input.length; i++) {
     if (input[i].toUpperCase() == input[input.length - (i + 1)].toUpperCase()) {
          isPalindrome = true
     }
}

console.log('isPalindrome ', isPalindrome)
