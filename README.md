# ZAF Boilerplate

A starter configuration for building Zendesk apps using framework V2.

**What webpack configuration does**

* Generate a ``dist`` folder which will contain the source code, the bundle.js
file and all the configuration files needed to run the app inside Zendesk

* Linting to produce more consistent and readable code.
[ESLint Ruels](http://eslint.org/docs/rules)

Also, integration of the following libraries:

* [Underscore.js](http://underscorejs.org/)

* [ES6Promise](https://github.com/stefanpenner/es6-promise) (for a full
  compatibility of promises with IE11)

**How to start coding**

Using the terminal, reach the folder project and run:

``npm install``

This command will download all the dependencies to make the project working.

Before start coding, run the command:

``npm run dev``

This command will enable the watcher which will instantly auto-generate the bundle.js.

Once all the changes are completed, stop the watcher with ``ctrl+c`` and run the
command:

``npm run build``
