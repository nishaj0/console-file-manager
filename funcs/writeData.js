function writeData(dir, fs, path, prompt) {
   let folderName = prompt("enter folder name");
   let fileName = prompt("enter file name");
   let data = prompt("enter data");

   // check and create folder
   if (!fs.existsSync(`./${folderName}`)) {
      fs.mkdir(`./${folderName}`, (err) => {
         if (err) throw err;
         console.log(`created ${folderName} folder`);
      });
   }

   // writing data
   fs.writeFile(path.join(dir, folderName, fileName), data, (err) => {
      if (err) throw err;
      console.log("data writing completed");
   });
}

module.exports = writeData;
