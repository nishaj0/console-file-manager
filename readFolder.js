function readFolder(dir, fs, path) {
   fs.readdir(dir, (err, files) => {
      if (err) {
         console.log(`unable to scan dir: ${err}`);
         return;
      }

      const folders = files.filter((file) => {
         return fs.statSync(path.join(dir, file)).isDirectory();
      });

      console.log("Folders in the directory:");
      folders.forEach((folder) => {
         console.log(folder);
      });
   });
}

module.exports = readFolder