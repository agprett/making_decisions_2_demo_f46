let backpack = ['Flashlight', 'Sleeping Bag', 'Tent']


backpack.push('Marshmallows')
backpack.push('Graham Crackers')
// Another way to add items
// backpack.push('Mashmallows', 'Graham Crackers')
// console.log('After push ', backpack)


let crumbs = backpack.pop()
let snack = backpack.pop()
// console.log('After pop ', backpack)


let light = backpack.shift()
// console.log('After shift ', backpack)


backpack.unshift('Blanket')
backpack.unshift(light)
// console.log('After unshift ', backpack)


let nightSetup = backpack.slice(1, 4)


// let setup = backpack.splice(1, 2, 'Jacket', 'Hiking pants')


// console.log('Setup ', setup)
console.log(backpack.length)


for(let i = 0; i < backpack.length; i++) {
    console.log(backpack[i], i)
}

for(let i = 0; i < nightSetup.length; i++) {
    if(backpack.includes(nightSetup[i])) {
        console.log(`You have packed ${nightSetup[i]}`)
    } else {
        console.log(`You need to pack ${nightSetup[i]}`)
    }
}

//basic array loop template
for(let i = 0; i < Array.length; i++) {
    //whatever you need to do to each element in the array(Array[i])
}




// for(let i = 1; i <= 50; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log('fizzbuzz')
//     } else if(i % 5 === 0) {
//         console.log('buzz')
//     } else if(i % 3 === 0) {
//         console.log('fizz')
//     } else {
//         console.log(i)
//     }
// }