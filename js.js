let clogger = new Object();

clogger.info = function(message, background) {
  if (background == true) {
    console.log('%c%s', 'color: white; background-color: blue', message);
  }
  else {
    console.log('%c%s', 'color: blue', message);
  }
}

clogger.error = function(message) {
  console.log('%c%s', 'color: red', message);
}

clogger.warning = function(message) {
  console.log('%c%s', 'color: orange', message);
}
