const fs = require("fs");
const path = require("path");

const readFolder = require("./readFolder");

const dir = __dirname;

readFolder(dir, fs, path);

