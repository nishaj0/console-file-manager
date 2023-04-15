const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
const prompt = require("prompt-sync")({ sigint: true });

const readFolder = require("./readFolder");
const writeData = require("./funcs/writeData");

const dir = __dirname;

const fileManager = () => {
   try {
      // readFolder(dir, fs, path);

      console.log(`
   1. Write data in a file
   2. rename file
   3. append data
   4. delete file
   5. exit
   `);

      let choice = prompt("enter choice");

      if (choice == 1) {
         writeData(dir, fs, path, prompt);
      } else if (choice == 2) {
         renameFile();
      } else if (choice == 3) {
         appendData();
      } else if (choice == 4) {
         deleteFile();
      } else if (choice == 5) {
         exit();
      } else {
         console.log("type correct choice");
      }
   } catch (err) {
      console.log("error found", err);
   }
};

fileManager();
