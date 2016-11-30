import * as vscode from 'vscode';

export class FileGotoExtension {

    constructor(){
    }

    private activeTextEditorFileName = vscode.window.activeTextEditor.document.fileName;

    private constructSearchedFilename(extension: string ): string {
        let oldfileName = this.activeTextEditorFileName.substr(this.activeTextEditorFileName.lastIndexOf('\\') + 1);
        let newfileName = oldfileName.substr(0, oldfileName.lastIndexOf(".")) + "." + extension;
        return newfileName;
    }

    private findFileWithExtension(extension: string ): string {
        let workspacePath = this.activeTextEditorFileName.slice(0, this.activeTextEditorFileName.lastIndexOf('\\') + 1);
        let newfilePath = workspacePath + this.constructSearchedFilename(extension);

        return newfilePath;
    }

    public moveToFileWithExtension(extension: string ): void {
        let file = this.findFileWithExtension(extension);
        if( file!==null ){
            vscode.workspace.openTextDocument(file) .then((textDocument)=>{
                vscode.window.showTextDocument(textDocument);               
            },(e)=>{
                console.log(e)
            });
        }
    }
}