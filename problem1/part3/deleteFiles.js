const fs=require('fs').promises;


async function deleteFiles(){
    for(let index=1;index<=3;index++){
    const path=__dirname+'/json_files';
    await fs.unlink(path+`/file${index}.json`);
    console.log(`file ${index} deleted successfully`);
    }
}
deleteFiles();