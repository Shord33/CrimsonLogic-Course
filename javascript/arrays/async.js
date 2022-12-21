//async await

function saySomething(x){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve("something" +x);
        }, 2000)
    });
}
//async function MUST HAVE await keyword
async function talk(x){
    const words = await saySomething(x)
    console.log(words)
}
talk(2)

function saySomething2(x, timer){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve("something" +x);
        }, timer)
    });
}
async function talk2(x, timer){
    const words = await saySomething(x, timer)
    console.log(words)
}
//async - wont block from continuing, even if its after in line

// talk2(3, 5000)
// talk2(3, 6000)
// talk2(4, 8000)
