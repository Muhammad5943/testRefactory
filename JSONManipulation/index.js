const data = require('./data.json')

console.log('1. Find items in the Meeting Room.')
console.log('Items: ')
let place = "Meeting Room"
for (let i = 0; i < data.length; i++) {
     if (data[i].placement.name == place) {
          console.log(data[i].name)
     }
}

console.log('\n');
console.log('2. Find all electronic devices.')
console.log('Electronic Device: ')
let electronic = "electronic"
for (let j = 0; j < data.length; j++) {
     if (data[j].type == electronic) {
          console.log(data[j].name)
     }    
}

console.log('\n');
console.log('3. Find all the furniture.')
console.log('Furnniture: ')
let furniture = "furniture"
for (let j = 0; j < data.length; j++) {
     if (data[j].type == furniture) {
          console.log(data[j].name)
     }    
}

console.log('\n');
console.log('4. Find all items were purchased on 16 Januari 2020.')
// let furniture = "furniture"
for (let j = 0; j < data.length; j++) {
     let time = new Date(data[j].purchased_at)
     if ((time.getDate(),"-",time.getMonth()+1,"-",time.getFullYear()) == (16,"-",1,"-",2020)) {
          console.log(data[j].name)
     }    
}

console.log('\n');
console.log('5. Find all items with brown color.')
console.log('Items: ')
let color = "Brown"
for (let j = 0; j < data.length; j++) {
     if (data[j].name.split(" ")[0] == color) {
          console.log(data[j].name)
     }    
}
