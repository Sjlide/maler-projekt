var arr1 = [1,2,3,4,6,8]
var arr2 = [5,6,7,8,9,10]

let arr3 = arr1.concat(arr2)

function compareNumbers(a, b){
    return a - b;
}

arr3.forEach(function(element,index) {
    console.log(" Tallet " + element + " er på plads nummer " + index)
    console.log(element + " - " + index + " - " + arr3.indexOf(element))
})
var arr4 = arr3.filter(function(element, index){
    return arr3.indexOf(element) == index

})

console.log(arr4.sort(compareNumbers))

