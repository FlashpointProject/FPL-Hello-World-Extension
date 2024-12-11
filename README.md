# Flashpoint Hello World extension

A sample extension that demonstrates how to create a simple extension for Flashpoint Launcher.

## Developement

Clone the repository and run `npm install` to install the dependencies.

Normal workflow is to first package the extension so you get the required files in `package`-directory.

After that you can run `npm run watch` to start the development server. The built file `ext.js` will be placed in the `dist`-directory can be copied to `Flashpoint\Data\Extensions\hello-world` directory.

## Build

Run `npm run build` to build the extension in development mode.

## Package

Run `npm run package` to build a distributable package of the extension. A new directory named `hello-world` will be created in the `package`-directory that can be copied to `Flashpoint\Data\Extensions`. The new file `extensions.fplx` is just a renamed zip-file that can be used to distribute the extension. Note that the launcher it self does not support installing extensions from these file types yet.
