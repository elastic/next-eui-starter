/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * This is referenced from webpack, and is loaded instead of the normal Highlight.js
 * index. This allows us to register only some languages, which cuts down on the
 * number of languages that we send to the client.
 */

// @ts-ignore
const hljs = require('highlight.js/lib/highlight');

// Add whatever languages you need here. See also `./lowlight.ts`
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'));

module.exports = hljs;
