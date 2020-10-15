function a(name, name1) {
    console.log('hello ' + name + name1);
}
const tim = { name: 'Tim' };

const b = a.bind(tim);

b();

a.apply(tim, ['Tim ', 'Bob']);
a.call(tim, 'Tim');

const arry = [1, 2, 3, 4, 5];

const result = Math.max(...arry);
console.log(result)