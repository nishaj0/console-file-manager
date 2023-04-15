function deleteFile(dir, fs, path, prompt) {
   let folderName = prompt("enter folder name\t");
   let fileName = prompt("enter file name\t");

   if(!fs.existsSync(path.join(dir, folderName))){
      fs.mkdir(path.join(dir, folderName), (err) => {
         if (err) throw err
         console.log(`created ${folderName} folder`);
      })
   }

   fs.unlink(path.join(dir, folderName, fileName), (err) => {
      if (err) throw err
      console.log(`deleted ${fileName}`);
   })
}
module.exports = deleteFile