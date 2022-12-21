let promise = new Promise(function(resolve, reject){
    //do smtg that could take ahwile
    //has failure and success state, execute sequentially
    let x=20
    if(x>10){
        resolve(x)
    } else{
        reject("Too low")
    }

});

promise.then(
    function(value){
        console.log("Success: ", value)
    },
    function(error){
        console.log("Error: ", error)
    }
)
