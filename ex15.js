module.exports = function invert(obj){
    let newObj = {}
    let arr = Object.entries(obj)
    for (const elt of arr){
        const [key, value] = elt
        newObj[value] = key
       
    }
    
    return newObj
}

//{one:1, two:2, three:3 }
