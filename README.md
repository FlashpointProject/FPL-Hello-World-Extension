# Flashpoint Hello World extension

A sample extension that demonstrates how to create a simple extension for Flashpoint Launcher.

## Developement

Clone the repository and run `npm install` to install the dependencies.

Normal workflow is to first package the extension so you get the required files in `Package` directory. Copy the extension to `Flashpoint\Data\Extensions` and then run `npm run watch` to start the development server. After a build you have copy the file `Dist` directory to `Flashpoint\Data\Extensions` and do a hot-reload in the launcher by pressing `Ctrl+Shift+R` to see the changes.

## Build

Run `npm run build` to build the extension in development mode.

## Package

Run `npm run package` to build a distributable package of the extension. A new directory will be created in the `package`-directory that can be copied to `Flashpoint\Data\Extensions`. The `extensions.fplx` is just a renamed zip-file that can be used to distribute the extension, but it's not possible to install it directly from the Flashpoint Launcher.
