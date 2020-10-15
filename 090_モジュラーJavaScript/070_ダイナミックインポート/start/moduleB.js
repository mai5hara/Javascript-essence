import('./moduleA.js').then(function (modules) {
  console.log(modules);
  modules.publicFn()
})