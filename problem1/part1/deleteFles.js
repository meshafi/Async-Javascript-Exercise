const { error } = require('console');
const fs=require('fs');
const path=require('path');

const currDir=__dirname+'/json_files';

function deleteFile(index,callback){
    fs.unlink(currDir+`/file${index}.json`,function(err){
      if (err) {
        console.error(`Error creating file ${index}`, err);
      } else {
        console.log(`File ${index} deleted successfully`);
      }
      if(typeof callback === 'function'){
        callback(index+1);
      }
}
)}
let index=1;
deleteFile(index,function(index){
      deleteFile(index,function(index){
         deleteFile(index);
      });
});