# jsonify_function

Convert a JavaScript function into stringified JSON.

# Motivation

[CouchDB](http://couchdb.apache.org) design document architecture requires that all database handlers (JavaScript functions) are stored in a JSON structure. Functions in the JSON structure must be presented as escaped stringified strings. Similar as this:

```
{
  "updatefun": "function test(a)\n{\n  console.log('test');\n}"
}
```

[CouchDB](http://couchdb.apache.org) itself does not provide a tool for convert JavaScript functions to the JSON structure. So I wrote this simple command-line converter.

# Installation

`npm install @leismore/jsonify_function`

# Usage

```
let jsonify_function = require('@leismore/jsonify_function');

// Define your function here
function test()
{
  console.log('test');
}
// Define your function here

console.log( jsonify_function(test) );
```

# License

MIT License

Copyright (c) 2019 leismore

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# Authors

[Kyle Chine](https://www.kylechine.name) (Initial Author)
