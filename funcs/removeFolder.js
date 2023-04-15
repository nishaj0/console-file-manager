function removeFolder(dir ,fs, path ,prompt) {
   let folderName = prompt("enter Folder name");

   if(!fs.existsSync(path.join(dir, folderName))){
      console.log(`${folderName} have not present`);
      return
   }

   fs.rmdir(path.join(dir, folderName), (err) => {
      if (err) throw err
      console.log(`removed ${folderName} folder`);
   })
}

module.exports = removeFolder