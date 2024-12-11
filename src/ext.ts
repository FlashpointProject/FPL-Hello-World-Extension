import * as flashpoint from 'flashpoint-launcher';

export async function activate(context: flashpoint.ExtensionContext) {   
    // Shortcut to register a command
    function registerCmd(n: string, f: (...args: any) => any) {
        flashpoint.registerDisposable(
            context.subscriptions,
            flashpoint.commands.registerCommand(n, f)
        );
    }

    /*
    * Register the command with name
    */
    registerCmd("hello-world.curation-button", async loadedCuration => {    
        const name = flashpoint.getExtConfigValue('hello-world.name');

        return await flashpoint.dialogs.showMessageBox({
            'title': 'Hello World',
            'message': `Hello ${name}!`,
            'buttons': ['OK']
        });

    });

};
