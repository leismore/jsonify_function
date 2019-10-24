/**
 * Convert a JavaScript function into a stringified JSON string.
 */

function jsonify_function(func:Function)
  { return JSON.stringify( {jsonified: func.toString()} ); }

export {jsonify_function};
