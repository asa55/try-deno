/*  This declaration along with the tsconfig.json file tell the typescript compiler to ignore the Deno namespace.
    TLDR it makes an warning message go away, feel free to delete these files to see what I mean.

    The message "Cannot find name 'Deno'" means that TypeScript compiler cannot find a declaration for the Deno object.
    Deno is a secure runtime for JavaScript and TypeScript, similar to Node.js.
    It provides a global Deno object that contains all Deno-specific functionality,
    like file system operations, networking, and more.
*/

declare var Deno: any;
