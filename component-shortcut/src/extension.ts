'use strict';

import * as vscode from 'vscode';
import { FileGotoExtension } from  './file.goto.extension';

export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "component-shortcut" is now active!');
  
    let gotoFileExtension =  new FileGotoExtension();

    let disposableLess = vscode.commands.registerCommand('dev.component.less', () => {           
        gotoFileExtension.moveToFileWithExtension('less');
    });

    let disposableHtml = vscode.commands.registerCommand('dev.component.html', () => {       
        gotoFileExtension.moveToFileWithExtension('html');
    });

    let disposableTs = vscode.commands.registerCommand('dev.component.ts', () => {
        gotoFileExtension.moveToFileWithExtension('ts');
    });

    context.subscriptions.push(disposableLess);
    context.subscriptions.push(disposableHtml);
    context.subscriptions.push(disposableTs);
}


// this method is called when your extension is deactivated
export function deactivate() {
}