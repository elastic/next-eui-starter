/* eslint-disable @typescript-eslint/no-explicit-any */

// These type definitions allow us to import image files in JavaScript without
// causing type errors. They tell the TypeScript compiler that such imports
// simply return a value, which they do, thanks to Webpack.

declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.svg' {
  const value: any;
  export = value;
}
