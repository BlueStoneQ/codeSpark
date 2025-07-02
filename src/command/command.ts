import vscode from 'vscode'

export class CommandManager {
  context!: vscode.ExtensionContext

  setContext(context: vscode.ExtensionContext): CommandManager {
    this.context = context
    return this
  }

  register(): CommandManager {
    this.registerCmdRunFunction()
    return this
  }

  registerCmdRunFunction() {
    this.context.subscriptions.push(
      vscode.commands.registerCommand('codeSpark.runFunction', () => {
        // 打开vscode设置，并定位到codeSpark插件上
        vscode.commands.executeCommand('workbench.action.openSettings', 'codeSpark')
      })
    )
  }
}