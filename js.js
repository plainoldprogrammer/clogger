let clogger = new Object();

clogger.info = function(message) {
  console.log('%c%s', 'color: blue', message);
}

clogger.error = function(message) {
  console.log('%c%s', 'color: red', message);
}

clogger.warning = function(message) {
  console.log('%c%s', 'color: orange', message);
}
