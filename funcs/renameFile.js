function renameFile(dir, fs, path, prompt) {
   let folderName = prompt("enter folder name\t");
   let fileName = prompt("enter file name\t");
   let newFileName = prompt("enter new file name\t");

   if (!fs.existsSync(`./${folderName}`)) {
      fs.mkdir(`./${folderName}`, (err) => {
         if (err) throw err;
         console.log(`created ${folderName} folder`);
      });
   }

   fs.rename(
      path.join(dir, folderName, fileName),
      path.join(dir, folderName, newFileName),
      (err) => {
         if (err) throw err;
         console.log("renaming Completed");
      }
   );
}

module.exports = renameFile