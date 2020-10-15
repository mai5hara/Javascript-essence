new Promise(function (resolve, reject) {
  console.log('promise');
  setTimeout(function () {
    resolve('hello')
  }, 1000)
}).then(function (data) {
  console.log('then:' + data)
  return data;
}).then(function (data) {
  console.log('then:' + data)
}).catch(function (data) {
  console.log('catch')
}).finally(function () {
  console.log('finally')
})

console.log('global end')