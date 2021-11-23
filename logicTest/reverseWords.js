let sentenceInput = 'I am A Great human'

let kalimat = sentenceInput.split(" ")
     .map(word => word.split("")
          .reverse()
          .join("")
     )

let uppercaseIndex = []

for (let i = 0; i < sentenceInput.length; i++) {
     if (sentenceInput[i] == sentenceInput[i].toUpperCase() && sentenceInput[i] != ' ') {
          uppercaseIndex.push(i)
     }
}

// console.log('uppercaseIndex', uppercaseIndex)

let strKalimat = kalimat.toString().replace(/,/g," ")

let lowercaseIndex = []

for (let j = 0; j < strKalimat.length; j++) {
     if (strKalimat[j] == strKalimat[j].toUpperCase() && strKalimat[j] != ' ') {
          lowercaseIndex.push(j)
     }
}

// console.log('lowercaseIndex', lowercaseIndex)

let reverseSectence = kalimat.toString().replace(/,/g," ")
// console.log(reverseSectence)

let splitToArray = reverseSectence.split("")
for (let k = 0; k < lowercaseIndex.length; k++) {
     // console.log(reverseSectence[lowercaseIndex[k]].toLocaleLowerCase())
     // console.log(reverseSectence.split(""))

     let changeToLower = reverseSectence[lowercaseIndex[k]].toLowerCase()

     splitToArray.splice(lowercaseIndex[k],1,changeToLower)
     
}

// console.log(splitToArray);

for (let l = 0; l < uppercaseIndex.length; l++) {
     // console.log(reverseSectence[lowercaseIndex[k]].toLocaleLowerCase())
     // console.log(reverseSectence.split(""))

     let changeToUpper = reverseSectence[uppercaseIndex[l]].toUpperCase()

     splitToArray.splice(uppercaseIndex[l],1,changeToUpper)
     
}

console.log(splitToArray.toString().replace(/,/g,""))
