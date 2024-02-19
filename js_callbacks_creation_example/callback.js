function showResult(result) {
    console.log(result)
}

function add(x, y, callback) {
    const result = x + y
    callback(result)
}

add(5, 10, showResult)