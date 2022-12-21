arr = ["black", "white", "orange"]
arr1 = new Array("syahmi", "syahmi2") //can cause issues cuz if u just put int will be the size

console.log(typeof arr[1])
console.log(arr[arr.length-1])
arr.push("green")
arr
arr.splice(2,1,'pink','red') //start from index x insert elem, remove x elemes
arr
arr2 = ["test", "test2"]
arr3 = arr1.concat(arr2)
arr3
x= arr3.pop()
x
y = arr3.shift()
y
arr3
arr4 = [2,6,7,8,6]
let findVal = arr4.find(function(e){return e!=6})
findVal
let findIndex = arr4.indexOf(6,2) //value, from where
findIndex
let lastNum = arr4.lastIndexOf(6)
lastNum
arr4.sort()
arr4
arr4.reverse()
arr4

shoppingList = []
shoppingList.push("Milk", "Bread", "Apples")
b = shoppingList.indexOf("Bread")
shoppingList.splice(b, 1, "Bananas", "Eggs")
y = shoppingList.pop()
console.log(y)
shoppingList.sort()
shoppingList
m = shoppingList.indexOf("Milk")
a = shoppingList.indexOf("Bananas")
shoppingList.splice(a+1, 0, "Carrot", "Lettuce")
shoppingList
let multiDimension = [[1,2,3], [4,5,6], [7,8,9]]
let val = multiDimension[0]
let val1 = multiDimension[0][0]
val1
