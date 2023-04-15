function writeData(dir, fs, path, prompt) {
   let folderName = prompt("enter folder name\t");
   let fileName = prompt("enter file name\t");
   let data = prompt("enter data\t");

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
      console.log(`data write to ${fileName}`);
   });
}

module.exports = writeData;
