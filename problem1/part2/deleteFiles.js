const fs=require('fs').promises;



function deleteJSONfile(){
    for(let index=1;index<=3;index++){
        filePath=__dirname+'/json_files'+`/file${index}.json`,index;
        
        fs.unlink(filePath).
            then(()=>{
            console.log(`file ${index} deleted successfully`);
        })
       .catch((error)=>{
            console.log('file cannot be deleted',error);
      })
    }
}

deleteJSONfile();