const fs = require("fs").promises;
const filePath = __dirname;

async function readFile() {
  try {
    const data = await fs.readFile(filePath + "/lipsum.txt", "utf-8");
    return data;
  } catch (error) {
    console.log("Error read file", error);
  }
}

async function convertAndWriteToUppercase(data) {
  try {
    const upperCase = data.toUpperCase();
    await fs.writeFile(filePath + "/uppercase.txt", upperCase);
    await fs.writeFile(filePath + "/filenames.txt", "uppercase.txt ");
  } catch (error) {
    console.log("Error writing in file ", error);
  }
}

async function processAndSplitSentencesToFile() {
  const data = await fs.readFile(filePath + "/uppercase.txt", "utf-8");
  const data2 = data.toLowerCase(data);
  const sentences = data2.split(".");
  let index=0;
  for (const sentence of sentences) {
    try {
      await fs.writeFile(
      filePath + `/sentencefile${index + 1}.txt`,sentence);
      await fs.appendFile(filePath + "/filenames.txt",`sentencefile${index + 1}.txt `);
    } 
    catch (error) {
      console.log("Error in writing in file", error);
    }
    index++;
  }

  return sentences.length;
}

async function sortAndWriteToNewFile(length) {
  try {
    let data = "";
    for (let index = 0; index < length; index++) {
      data =data +(await fs.readFile(filePath + `/sentencefile${index}.txt`, "utf-8"));
    }

    const tokens = data.split(/\s+/);
    tokens.sort();
    const sortedData = tokens.join(" ");
    await fs.writeFile(filePath + "/sorted.txt", sortedData);
    await fs.appendFile(filePath + "/filenames.txt", "\n" + "sorted.txt");
  } catch (error) {
    console.log("Cannot read sentence file", error);
  }
}

async function deleteFile() {
  try {
    const data = await fs.readFile(filePath + "/filenames.txt", "utf-8");
    const tokens = data.split(/\s+/);
    for (let index = 0; index < tokens.length; index++) {
      if (tokens[index] != "") {
        try {
          await fs.unlink(filePath + `/${tokens[index]}`);
        } catch (error) {
          console.log(tokens[index]);
          console.log("error deleting file");
        }
      }
    }
  } catch (error) {
    console.log("File cannot be deleted", error);
  }
}

async function allFunction() {
  try {
    const data = await readFile();
    await convertAndWriteToUppercase(data);
    await processAndSplitSentencesToFile();
    const length = await sortAndWriteToNewFile();
    await deleteFile(length);
  } catch (error) {
    console.log("error occured", error);
  }
}

allFunction();
