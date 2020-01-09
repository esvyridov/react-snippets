const fs = require('fs');
const path = require('path');
const fileMap = require('./fileMap');

const compNameRegEx = /\[CompName\]/g;

function createComponentFolder(uri, compName) {
  const folderPath = path.join(uri, compName);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    return;
  }

  throw new Error('folder already exists');
}

function createIndex(uri, compName, lang) {
  const langConf = fileMap[lang];
  const templateFilePath = path.join(__dirname, `../templates/${lang}/${langConf.index.input}`);
  const filePath = path.join(uri, compName, langConf.index.output.replace(compNameRegEx, compName));

  const index = fs
    .readFileSync(templateFilePath)
    .toString()
    .replace(compNameRegEx, compName);

  fs.writeFileSync(filePath, index);
}

function createCSSModule(uri, compName, lang) {
  const langConf = fileMap[lang];
  const filePath = path.join(uri, compName, langConf.css.output.replace(compNameRegEx, compName));

  fs.writeFileSync(filePath, '');
}

function createComponent(uri, compName, lang) {
  const langConf = fileMap[lang];
  const templateFilePath = path.join(__dirname, `../templates/${lang}/${langConf.component.input}`);
  const filePath = path.join(uri, compName, langConf.component.output.replace(compNameRegEx, compName));

  const index = fs
    .readFileSync(templateFilePath)
    .toString()
    .replace(compNameRegEx, compName);

  fs.writeFileSync(filePath, index);
}

module.exports = {
  createComponentFolder,
  createIndex: createIndex,
  createCSSModule,
  createComponent,
};
