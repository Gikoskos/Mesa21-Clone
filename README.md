# Mesa21-Clone
## Overview

A single page [React](https://reactjs.org) app that tries to simulate the look and feel of the [mesa21.com](https://www.mesa21.com/) website.

This project's goal isn't to make a pixel perfect copy, but to build a single-page app from scratch that operates in similar fashion to the original. It doesn't make use of any of the original's code.

So far only the landing page is implemented, but with the current skeleton it's extremely easy to implement the rest and add them to the app.

## Building

This is a prototype project so only development builds are supported.

Due to a vulnerability in one of the sass loader's dependencies, that wasn't fixed by the time this project was made, I'm not making use of webpack plugins to compile `SCSS`.

The `JSX` and `SCSS` files have to be built separately.

First open a terminal and `cd` in the project's root.

To build the `SCSS` stylesheets, download a transpiler ([my preference is dart-sass](https://github.com/sass/dart-sass/releases)) and simply run

    sass dist/styles/main.scss dist/styles/main.css

To get all dependencies run

    npm install

and then run

    npm run dev-server

to build the app and run webpack's test server.

If there were no issues, the app will run at

    http://localhost:3000/


## Modules/Technologies used

* [React](https://reactjs.org)

* [NPM](https://www.npmjs.com/)

* [Webpack 4](https://webpack.js.org/)

* [Bootstrap 4](https://getbootstrap.com/)

* [React Animate On Scroll](https://github.com/dbramwell/react-animate-on-scroll)

* [React Slick](https://react-slick.neostack.com/)

* [React Router](https://github.com/ReactTraining/react-router)

(doesn't include their respective dependencies)

### License

All assets with `svg` extension in the folder `dist/assets` are from [BoxIcons](https://boxicons.com/).

All remaining files in the folder `dist/assets` are from [Mesa21](https://www.mesa21.com/).

For the rest of the files see LICENSE.
