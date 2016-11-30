'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "component-shortcut" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposableLess = vscode.commands.registerCommand('dev.component.less', () => {
        // The code you place here will be executed every time your command is executed
     let fileName = getFileName(vscode.window.activeTextEditor.document.fileName, 'less');

      vscode.workspace.openTextDocument(fileName)
            .then((textDocument)=>{
                vscode.window.showTextDocument(textDocument);               
            },(e)=>{
                console.log(e)
            });
    });

    let disposableHtml = vscode.commands.registerCommand('dev.component.html', () => {
        // The code you place here will be executed every time your command is executed
    let fileName = getFileName(vscode.window.activeTextEditor.document.fileName, 'html');

     vscode.workspace.openTextDocument(fileName)
            .then((textDocument)=>{
                vscode.window.showTextDocument(textDocument);               
            },(e)=>{
                console.log(e)
            });
    });

    let disposableTs = vscode.commands.registerCommand('dev.component.ts', () => {
        // The code you place here will be executed every time your command is executed
    let fileName = getFileName(vscode.window.activeTextEditor.document.fileName, 'ts');

     vscode.workspace.openTextDocument(fileName)
            .then((textDocument)=>{
                vscode.window.showTextDocument(textDocument);               
            },(e)=>{
                console.log(e)
            });
    });

    context.subscriptions.push(disposableLess);
    context.subscriptions.push(disposableHtml);
    context.subscriptions.push(disposableTs);
}

function getFileName(path:string, extension:string) : string
{
    let oldfileName = path.substr(path.lastIndexOf('\\') + 1);
    let newfileName = oldfileName.substr(0, oldfileName.lastIndexOf(".")) + "." + extension;

    let workspacePath =  path.slice(0,path.lastIndexOf('\\') + 1);
    let newfilePath = workspacePath + newfileName;

    return newfilePath;
}

// this method is called when your extension is deactivated
export function deactivate() {
}