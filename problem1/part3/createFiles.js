const { resolve } = require('path');

const fs=require('fs').promises;


async function createFile(){
    const path=__dirname+'/json_files'
      try{
        await fs.writeFile(path+`/file1.json`,JSON.stringify({file:1}),null,2);
        console.log(`file 1 created successfully`);
        await fs.writeFile(path+`/file2.json`,JSON.stringify({file:2}),null,2);
        console.log(`file 2 created successfully`);
        await fs.writeFile(path+`/file3.json`,JSON.stringify({file:3}),null,2);
        console.log(`file 3 created successfully`);
      }
        
      catch(error){
          console.log(error);
      }
}
createFile();

