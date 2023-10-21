const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'json_files');

function creatingFile(index, callback) {
  const filePath = path.join(dirPath, `file${index}.json`);
  const fileContent = JSON.stringify(`file ${index} `);
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error(`Error creating file ${index}`, err);
    } else {
      console.log(`File ${index} created successfully`);

      if(typeof callback === 'function'){
      callback(index + 1);
      }
    }
  });
}


creatingFile(1, function(index){
  creatingFile(index, function(index) {
    creatingFile(index);
  });
});
