const fs = require("fs");

const encoding = "UTF8";

// Lê o conteúdo de um arquivo
const readFileContent = (dir) => {
  var dataContent = [];
  var fileContent;

  try {
    fileContent = fs.readFileSync(dir, encoding);
    dataContent = separateData(fileContent);
  } catch (err) {
    console.err(err.message);
    throw err;
  } finally {
    return dataContent;
    // Retorna o conteúdo de um arquivo em um array de linhas.
  }
};

const separateData = (data) => {
  let arrContent = [];
  let tempBuffer = data.toString().split("\n");

  for (line in tempBuffer) arrContent.push(tempBuffer[line]);

  return arrContent;
  // Retorna o conteúdo separado em linhas dentro de uma estrutura array.
};

module.exports = { readFileContent };
