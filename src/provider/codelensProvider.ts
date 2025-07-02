import vscode from 'vscode'

export const getCodeLensProvider = (): vscode.CodeLensProvider => {
  return {
    provideCodeLenses(document: vscode.TextDocument): vscode.CodeLens[] {
      const codeLenses: vscode.CodeLens[] = []
      
      // 在每个函数上方定义可交互的命令
      for (let i = 0; i < document.lineCount; i++) {
        const lineText = document.lineAt(i).text
        if (lineText.startsWith('function ')) {
          const range = new vscode.Range(i, 0, i, 0)
          const codeLens = new vscode.CodeLens(range)
          codeLens.command = {
            title: 'Run Function',
            command: 'codeSpark.runFunction',
            arguments: [document.uri]
          }
          codeLenses.push(codeLens)
        }
      }
    return codeLenses
    }
  }
}