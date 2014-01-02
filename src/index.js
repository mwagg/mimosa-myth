"use strict";

var myth = require("myth");

var registration = function(mimosaConfig, register) {
  register(["add", "update", "buildFile"], "compile", compileFiles, ["css"]);
};

var compileFiles = function (mimosaConfig, options, next) {
  options.files.forEach(compile.bind(null, mimosaConfig));
  next();
};

var compile = function (config, file) {
  var source = file.outputFileText;
  file.outputFileText = myth(source);
};

module.exports = {
  registration: registration
};
