//callbacks - function calling another function
function doSomething(callback){
    callback()
}
function sayHi(){
    console.log("hi")
}

doSomething(sayHi)

function judge(grade){
    switch(true){
        case grade == "A":
        console.log("grade is A");
        break;
        case grade == "B":
        console.log("grade is B");
        break;
        case grade == "C":
        console.log("grade is C");
        break;
        case grade == "D":
        console.log("grade is D");
        break;
        default:
            console.log("rip")
    }
}

function getGrade(score, callback){
    let grade;
    switch (true){
        case score >=90:
            grade = "A"
            break;
        case score >=70:
            grade = "B"
            break;
        case score >=50:
            grade = "C"
            break;
        case score >=30:
            grade = "D"
            break;
            default:
                grade ="F"
    }
    callback(grade)
}
getGrade(70, judge)

var js = 10;

js *= 5;
js

let x = "Hello, IncludeHelp!";

console.log( x.slice(-13,-1))
var values = [10, 20, 30, 40];

var result = values.reduceRight(function(x,y){
return (x + y);

});
result
