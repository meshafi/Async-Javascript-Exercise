const fs = require('fs').promises;
const path = require('path');

const dirPath = path.join(__dirname, 'json_files');



function createFileWithPromise(index) {
  
  const filePath = path.join(dirPath, `file${index}.json`);
  const fileContent =JSON.stringify(`file:${index}`,null,2);

  return fs.writeFile(filePath, fileContent)
    .then(() => {
      console.log(`File ${index} created successfully`);
    })
    .catch((err) => {
      console.error(`Error creating file ${index}`, err);
    });
}

createFileWithPromise(1)
  .then(function(){createFileWithPromise(2)})
  .then(function(){createFileWithPromise(3)})
  .catch((err) => {
    console.error('Error creating files:', err);
});

