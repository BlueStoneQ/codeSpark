import vscode from 'vscode'

export const getInlineCompletionItemProvider = (): vscode.InlineCompletionItemProvider => {
  return {
    provideInlineCompletionItems: async (
      document: vscode.TextDocument,
      position: vscode.Position,
      context: vscode.InlineCompletionContext,
      token: vscode.CancellationToken
    ) => {

      console.log('[codeSpark] provideInlineCompletionItem')

      if (document.getText().length === 0) {
        return []
      }

      const curLineText = document.lineAt(position.line).text.trim()

      if (curLineText !== '') {
        try {
          const res = 'this is inline completion item provider'
          const items: vscode.InlineCompletionItem[] = []
          const completionItem = new vscode.InlineCompletionItem('')

          const insertText = '\n' + res

          completionItem.insertText = insertText
          completionItem.range = new vscode.Range(position.translate(0, insertText.length), position)
          items.push(completionItem)

          return { items }
        } catch (err) {
          console.error(err)
        }

        return { items: [] }
      }
    }
  }
}