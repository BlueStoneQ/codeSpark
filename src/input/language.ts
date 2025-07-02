import vscode from 'vscode'
import { getInlineCompletionItemProvider } from '../provider/inlineCompletionItemProvider'
import { getCodeLensProvider } from '../provider/codelensProvider'

export class Language {
  context!: vscode.ExtensionContext

  setContext(context: vscode.ExtensionContext): Language {
    this.context = context
    return this
  }

  register() {
    this.registerInlineCompletionItemProvider()
    this.registerCodeLensProvider()
  }

  registerInlineCompletionItemProvider() {
    this.context.subscriptions.push(
      vscode.languages.registerInlineCompletionItemProvider(
        { pattern: '**' },
        getInlineCompletionItemProvider()
      )
    )
  }

  registerCodeLensProvider() {
    this.context.subscriptions.push(
      vscode.languages.registerCodeLensProvider({ pattern: '**' }, getCodeLensProvider())
    )
  }
}