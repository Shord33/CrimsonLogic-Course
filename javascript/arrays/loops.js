//while, do while, for loop, for in, for of


arr = []
for (let i = 5; i< 10; i++) {
    arr.push(i)
}
arr
arrOfArray = []
for (i = 0; i < 3; i++){
    arrOfArray.push([])
    for(j = i; j < 7; j++){
        arrOfArray[i].push(j)
    }
}
arrOfArray
for (i=0; i<arr.length; i++ ){
    console.log(arr[i] + arr[i]);
}
//of = place next value as it iterates - array
for (el of arr){
    console.log(el)
}

//for in - object iteration 
let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
};
//element values
for (let elem in car){
    console.log(car[elem])
}
 // only obj keys 
for (let elem in car){
    console.log(elem)
}

let arrKeys = Object.keys(car)
arrKeys
for (let elem of Object.keys(car)){
    console.log(elem)
}
for (let elem of Object.values(car)){
    console.log(elem)
}
for (let i = 0; i<arrKeys.length; i++){
    console.log(arrKeys[i] + ": " + car[arrKeys[i]])
}
for (const [key,value] of Object.entries(car)){
    console.log(key, ": ", value)
}