function appendData (dir, fs, path, prompt){
   let folderName = prompt("enter folder name\t");
   let fileName = prompt("enter file name\t");
   let data = prompt("enter data\t");

   if(!fs.existsSync(`./${folderName}`)){
      fs.mkdir(`./${folderName}`, (err) => {
         if (err) throw err
         console.log(`created ${folderName} folder`);
      })
   }

   fs.appendFile(path.join(dir, folderName, fileName), data, (err) => {
      if (err) throw err
      console.log(`data append to ${fileName}`);
   })
}

module.exports = appendData