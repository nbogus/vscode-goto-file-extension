import * as vscode from 'vscode';

export class FileGotoExtension {

    constructor() {
    }


    private constructSearchedFilename(extension: string): string {
        let activeTextEditorFileName = vscode.window.activeTextEditor.document.fileName;
        let oldfileName = activeTextEditorFileName.substr(activeTextEditorFileName.lastIndexOf('\\') + 1);
        let newfileName = oldfileName.substr(0, oldfileName.lastIndexOf(".")) + "." + extension;
        return newfileName;
    }

    private findFileWithExtension(extension: string): string {
        let activeTextEditorFileName = vscode.window.activeTextEditor.document.fileName;
        let workspacePath = activeTextEditorFileName.slice(0, activeTextEditorFileName.lastIndexOf('\\') + 1);
        let newfilePath = workspacePath + this.constructSearchedFilename(extension);

        return newfilePath;
    }

    public moveToFileWithExtension(extension: string): void {
        let file = this.findFileWithExtension(extension);
        if (file !== null) {
            vscode.workspace.openTextDocument(file).then((textDocument) => {
                vscode.window.showTextDocument(textDocument);
            }, (e) => {
                console.log(e)
            });
        }
    }
}