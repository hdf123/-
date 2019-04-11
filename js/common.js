function sayHello(name) {
  var txt = `Hello ${name} !`;
  return txt;
}
function sayGoodbye(name) {
  var txt = `你好 ${name} !`;
  return txt;
}

module.exports.sayHello = sayHello
exports.sayGoodbye = sayGoodbye