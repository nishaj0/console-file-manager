const fs = require("fs");
const path = require("path");
const prompt = require("prompt-sync")({ sigint: true });

const writeData = require("./funcs/writeData");
const renameFile = require("./funcs/renameFile");
const appendData = require("./funcs/appendData");
const deleteFile = require("./funcs/deleteFile");
const readFolder = require("./funcs/readFolder");
const addFolder = require("./funcs/addFolder");
const removeFolder = require("./funcs/removeFolder");

const dir = path.join(__dirname, "files");

const fileManager = () => {
   try {
      console.log(`
   1. Write data in a file
   2. rename file
   3. append data
   4. delete file
   5.display all folders
   6.add a folder
   7.remove folder
   5. exit
   `);

      let choice = prompt("enter choice\t");

      if (choice == 1) {
         writeData(dir, fs, path, prompt);
      } else if (choice == 2) {
         renameFile(dir, fs, path, prompt);
      } else if (choice == 3) {
         appendData(dir, fs, path, prompt);
      } else if (choice == 4) {
         deleteFile(dir, fs, path, prompt);
      } else if (choice == 5) {
         readFolder(dir, fs, path);
      } else if (choice == 6) {
         addFolder(dir, fs, path, prompt);
      } else if (choice == 7) {
         removeFolder(dir, fs, path, prompt);
      } else {
         console.log("type correct choice");
      }
   } catch (err) {
      console.log("error found", err);
   }
};

fileManager();
