console.log("❤️");

var a = [2, 8, 9, 3, 4, 6, 2, 11, 8, 0, 5];

console.log("🥚-->", a)
// eslint-disable-next-line no-extend-native
Array.prototype.mapAdv = function (func) {
    //this keyword will point to iterating array
    var output = [];
    for (let index = 0; index < this.length; index++) {
        output.push(func(this[index], index, this));
    }
    return output;
}

a = a.mapAdv((value) => {
    return value * 2;
})
console.log("🐸👉", a);