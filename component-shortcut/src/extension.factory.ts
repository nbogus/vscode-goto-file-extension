import * as vscode from 'vscode';
import { FileGotoExtension } from './file.goto.extension';

export class ExtensionFactory {

    public static createGotoCommand(commandName: string, extension: string, context: vscode.ExtensionContext) {
        let gotoFileExtension = new FileGotoExtension();
        let disposable = vscode.commands.registerCommand(commandName, () => {
            gotoFileExtension.moveToFileWithExtension(extension);
        });
        context.subscriptions.push(disposable);
    }
}