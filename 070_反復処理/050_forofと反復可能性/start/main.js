const arry = ['a', 'b', 'c'];

Object.prototype.method = function () { }

Object.defineProperty(arry, 0, {
  enumerable: true
})

const d = Object.getOwnPropertyDescriptor(arry, 0);
console.log(d)

for (let v of arry) {
  console.log(v)
}