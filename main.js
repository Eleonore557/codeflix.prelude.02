//const first = require('./ex01')
//const last = require('./ex03')
//const initial = require('./ex02')
//const rest = require('./ex04')
//const without = require('./ex06')
//const keys = require('./ex12')
//const intersection = require('./ex08')
//const invert = require('./ex15')
//const keys = require('./ex13')
//const values = require('./ex14')
const map = require('./ex21')
//const pick = require('./ex16')
const omit = require('./ex17')

//console.log(first([10, 5, 'hello', 2] ));
//console.log(first([10, 5, 'hello', 2], 2));
//console.log(first([10, 5, 'hello', 2], 3));

//console.log(last([10, 5, 'hello', 2] ));
//console.log(last([10, 5, 'hello', 2], 2));
//console.log(last([10, 5, 'hello', 2], 3));

//console.log(initial([10, 5, 'hello', 2] ));
//console.log(initial([10, 5, 'hello', 2], 2));
//console.log(initial([10, 5, 'hello', 2], 3));

//console.log(rest([12,15,22] ));
//console.log(rest([12,15,22], 2));
//console.log(rest([12,15,22], 4));

//console.log(without([12,15,22,44,50],44,50,32 ));
//console.log(without([12,15,22,44,50],4,50,32));

//console.log(inntersection([12,15,22,44,50],44,50,32 ));

//console.log(keys({one:1, two:2, three:3}));

//console.log(invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"}));

//console.log(values({one: 1, two: 2, three: 3}));

//console.log(pairs({one: 1, two: 2, three: 3}));

//console.log(map([1, 2, 3], function(num){ return num * 3; }));
//console.log(map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; }));

//console.log(invert({Moe: 'Moses', Larry: 'Louis', Curly: 'Jerome'}));

//console.log(pick({name: 'Joker', age: 18, userId: 1337}, 'name', 'age'));

console.log(omit({name: 'moe', age:50, userid: 'moe1'}, 'userid'));




