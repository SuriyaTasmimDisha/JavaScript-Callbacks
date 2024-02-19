function showResult(result) {
    
    setTimeout(() => {
        console.log(result)
    },5000)
}

function add(x, y, myCallback) {
    let result = x + y
    myCallback(result)
    console.log('Hello There!')
}

add(4, 5, showResult)