function addFolder(dir ,fs, path ,prompt) {
   let folderName = prompt("enter Folder name");

   if(fs.existsSync(path.join(dir, folderName))){
      console.log(`${folderName} have already present`);
      return
   }

   fs.mkdir(path.join(dir, folderName), (err) => {
      if (err) throw err
      console.log(`created ${folderName} folder`);
   })
}

module.exports = addFolder