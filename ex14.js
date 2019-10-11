module.exports = function values (obj){
    let arr = []
    for (const item of Object.entries(obj)){
        const [key, value] = item
        arr.push (item)
    }
    return arr
}