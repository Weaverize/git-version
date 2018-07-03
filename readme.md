# Git-version
Retrieve string information from Git project NodeJS

## Retrieved Payload
The information retrieved as the form:
```
branch@commit
```
Only the `getVersion(callback)` function is exposed in the module as of now.

## Example
```js
require("git-version")(console.log);
```
displays
```
master@11a1d1db4b6952192e859ff5f499cf59d4c95ed4
```

# Credit
Copyright (c) 2018, [Weaverize SAS](http://www.weaverize.com). All rights reserved. Contact: <dev@weaverize.com>.