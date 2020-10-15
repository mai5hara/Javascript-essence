const targetObj = { a: 0 };
const handler = {
  set: function (target, prop, value, receiver) {
    console.log(`[set]: ${prop}`);
    // target[prop] = value;
    throw new Error('Cannot add prop')
  },
  get: function (target, prop, receiver) {
    console.log(`[get]: ${prop}`);
    return target[prop];
  },
  deleteProperty: function (target, prop) {
    console.log(`[delete]: ${prop}`);
    delete target[prop];
  }
}
const pxy = new Proxy(targetObj, handler);
pxy.a = 1;
pxy.a;
delete pxy.a;