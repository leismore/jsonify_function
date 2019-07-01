/**
 * Convert a JavaScript function into stringified JSON.
 */

'use strict';

module.exports = (func) => {

  if (typeof func !== 'function')
  {
    throw new Error('not function');
  }

  return JSON.stringify( {jsonified: func.toString()} );

};
