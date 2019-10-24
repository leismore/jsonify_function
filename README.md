# jsonify_function

Convert a JavaScript function into a stringified JSON string.

# Donation

Buy me a coffee via [![PayPal Donation](https://www.paypalobjects.com/en_AU/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=SPPJPYRY4D6WC&item_name=Give+people+an+option+to+support+my+open+source+software.&currency_code=AUD&source=url)

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

```typescript
import {jsonify_function} from '@leismore/jsonify_function';
// Or
const jsonify_function = require('@leismore/jsonify_function').jsonify_function;

// Define your function here
function test()
{
  console.log('test');
}

// Output
console.log( jsonify_function(test) );
```

# License

MIT License

# Authors

[Kyle Chine](https://www.kylechine.name) (Initial Author)
