'use strict';

import * as vscode from 'vscode';
import { ExtensionFactory } from  './extension.factory';

export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "component-shortcut" is now active!');

    ExtensionFactory.createGotoCommand('file.goto.less','less', context);
    ExtensionFactory.createGotoCommand('file.goto.css','css', context);
    ExtensionFactory.createGotoCommand('file.goto.html','html', context);
    ExtensionFactory.createGotoCommand('file.goto.ts','ts', context);
    ExtensionFactory.createGotoCommand('file.goto.js','js', context);
}


// this method is called when your extension is deactivated
export function deactivate() {
}