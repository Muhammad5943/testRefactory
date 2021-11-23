let arr = [15,1,3]

function nearestFibonacy(num)
{
     let firstIndex = 0
     let secondIndex = 1
     let thirdIndex = firstIndex + secondIndex
     
     while (thirdIndex <= num) {
          firstIndex = secondIndex
          secondIndex = thirdIndex
          thirdIndex = firstIndex + secondIndex
     }

     return thirdIndex
}

let input = arr[0]
let result = nearestFibonacy(input)
let sumInput = arr.reduce((a, b) => a + b, 0)

let deviation = result - sumInput 

console.log('output ', deviation)
