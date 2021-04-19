/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * This is referenced from webpack, and is loaded instead of the normal lowlight
 * index. This allows us to register only some languages, which cuts down on the
 * number of languages that we send to the client.
 */

// @ts-ignore
const low = require('lowlight/lib/core');

// Add whatever languages you need here. See also `./highlight.ts`
low.registerLanguage('json', require('highlight.js/lib/languages/json'));

module.exports = low;
