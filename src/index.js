const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const fileMap = require('./fileMap');
const {
  createComponentFolder,
  createIndex,
  createCSSModule,
  createComponent
} = require('./fileCreator');

const inputBoxTitle = 'Enter Component Name';
const emptyComponentNameError = 'component name can\'t be empty';

function getComponentName() {
	return new Promise((resolve) => {
		vscode.window
		.showInputBox({
			prompt: inputBoxTitle
		}).then((value) => {
			resolve(value);
		});
	});
}

function activate(context) {
	const tsModuleGenerator = vscode.commands.registerCommand('extension.generateTSModule', async (uri) => {
		const lang = 'typescript';
		let componentPath = uri ? uri.path : vscode.workspace.rootPath;

		if (fs.lstatSync(componentPath).isFile()) {
			componentPath = path.dirname(uri.path);
		}

		const name = await getComponentName();

		if (name.length === 0) {
			vscode.window.showErrorMessage(emptyComponentNameError);
			return;
		}

		try {
			createComponentFolder(componentPath, name, lang);
			createIndex(componentPath, name, lang);
			createCSSModule(componentPath, name, lang);
			createComponent(componentPath, name, lang);
		} catch (err) {
			vscode.window.showErrorMessage(err);
			return;
		}
	});

	const jsModuleGenerator = vscode.commands.registerCommand('extension.generateJSModule', async (uri) => {
		const lang = 'javascript';
		let componentPath = uri ? uri.path : vscode.workspace.rootPath;

		if (fs.lstatSync(componentPath).isFile()) {
			componentPath = path.dirname(uri.path);
		}

		const name = await getComponentName();

		if (name.length === 0) {
			vscode.window.showErrorMessage(emptyComponentNameError);
			return;
		}

		try {
			createComponentFolder(componentPath, name, lang);
			createIndex(componentPath, name, lang);
			createCSSModule(componentPath, name, lang);
			createComponent(componentPath, name, lang);
		} catch (err) {
			vscode.window.showErrorMessage(err);
			return;
		}
	});

	context.subscriptions.push(tsModuleGenerator, jsModuleGenerator);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}