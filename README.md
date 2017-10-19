# ts-skeleton

This is a starter skeleton for typescript apps targeting the browser. Most
documentation I've found online assumes you want to start off with Angular or
Vue and webpack and every shiny library out there, so I built this minimal
setup for anyone who just wants to tinker with typescript.

## Use

    git clone https://github.com/sysread/ts-skeleton.git
    # then delete .git, or
    svn export https://github.com/sysread/ts-skeleton/trunk

    npm install --save-dev
    npm run build
    # open index.html in a browser

## Architecture

There isn't any. The skeleton has two dependencies, typescript and requirejs
for handling imports. Code goes in `lib`. `lib/app.ts` is your entry point.
The `main()` function there is called when the app loads in the browser.

`index.html` loads requirejs, requirejs loads `loader.js`, `loader.js` loads
`dist/app.js` and calls `app.main()`.

## Commands

### `npm run clean`

Empties `dist/`.

### `npm run build`

Cleans, then compiles `lib/**/*.ts` to `dist/`.

### `npm run watch`

Same as `build`, but the compiler keeps running, rebuilding anything that
changes.

### `npm run test`

Runs jasmine tests in `spec/`.
