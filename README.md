# ZAF Boilerplate

**How to setup dev environment**

In case some code need to be changed, go in the ``src`` folder using the terminal and run the command:

```npm install```

This command will download all the dependencies to make all the project working.

Before start making changes, run the command:

```npm run dev```

This command will enable the watcher which will instantly generate the bundle file and make the changes visible into the browser.

Once all the changes are completed, stop the watcher with ``ctrl+c`` and run the command:

```npm run build```

This command will generate a ``dist`` folder which can be used to generate the new package to be uploaded in support.

