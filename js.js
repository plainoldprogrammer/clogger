let clogger = new Object();

let info = function(message) {
  console.log('%c%s', 'color: blue', message);
}

let error = function(message) {
  console.log('%c%s', 'color: red', message);
}

let warning = function(message) {
  console.log('%c%s', 'color: orange', message);
}

clogger.info = info;
clogger.error = error;
clogger.warning = warning;
