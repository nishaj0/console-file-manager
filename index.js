const fs = require("fs");
const path = require("path");

const readFolder = require("./readFolder");

const dir = __dirname;

readFolder(dir, fs, path);

// let exit = false;

// do {
//    const choice = 0;

//    console.log(`
//    1. create file
//    2. rename file
//    3. append data
//    4. delete file
//    5. exit
//    `);

//    if (choice == 1) {
//       createFile();
//    } else if (choice == 2) {
//       renameFile();
//    } else if (choice == 3) {
//       appendData();
//    } else if (choice == 4) {
//       deleteFile();
//    } else if (choice == 5) {
//       exit();
//    } else {
//       console.log("type correct choice");
//    }
// } while (exit === true);
