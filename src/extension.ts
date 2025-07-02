import * as vscode from 'vscode'
import { Language } from './input/language'

export function activate(context: vscode.ExtensionContext) {
	console.log('[codeSpark] activated')
	new Language().setContext(context).register()
}

export function deactivate() {}
