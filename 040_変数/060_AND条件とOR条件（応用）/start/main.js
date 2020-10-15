function hello(name) {
  name = name || 'Tom'
  console.log('Hello ' + name)
}

hello()

let name = 'Bob'

name && hello(name)
