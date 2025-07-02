import * as vscode from 'vscode'
import { Language } from './input/language'
import { CommandManager } from './command/command'

export function activate(context: vscode.ExtensionContext) {
	console.log('[codeSpark] activated')
	new Language().setContext(context).register()
	new CommandManager().setContext(context).register()
}

export function deactivate() {}
