gg-smile-helper
===============

Description
-----------

This package serves as a helper module for smile management. The app can serve as a browser extension or can be directly integrated into a codebase as a custom element.

### Requirements

*   Node.js (>=20.0.0)
*   npm (>=10.0.0)

Development
-----------

To set up a development environment, follow these steps:

1.  Clone the repository.
2.  Install the necessary dependencies using `npm install`.
3.  Use the available scripts to build or watch the project. 

### Scripts

*   `build`: Builds extension js file index.js for `manifest.json`. Executes webpack to build the project using the `webpack.config.js` file.
*   `watch`: Watch mode for extension
*   `build:element`: Builds exported **custom element** `dist/smiles-extension.js` Executes webpack to build the element using the `webpack.element.config.js` file.
*   `watch:element`: Watch mode for **custom element**

License
-------

This package is licensed under the ISC License.

Author
------

_GoodGame_