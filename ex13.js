module.exports = function keys (obj){
    let arr = []
    for (const item of Object.entries(obj)){
        const [key, value] = item
        arr.push (value)
    }
    return arr
}