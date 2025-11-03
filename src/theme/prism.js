// src/prism.js
import { Prism } from "prism-react-renderer";

(typeof global !== "undefined" ? global : window).Prism = Prism;

Prism.languages.messagecommand = {
  // A 'comment' for the description lines.
  // This matches any line that DOES NOT start with a semicolon.
  commandtext: {
    pattern: /(^[^;].*)/m,
    greedy: true, // Run this rule first
  },

  // A 'function' for the command itself, e.g., ";popupMessage"
  commandname: {
    pattern: /(^;[a-zA-Z0-9_-]+)/m,
    greedy: true,
  },

  // A 'string' for the placeholders, e.g., "<Username>"
  commandargument: {
    pattern: /<[^>]+>/,
    greedy: true,
  },

  //Variables, for refrences like @all or @others when putting username values.
  commandselector: {
    pattern: /@\w+/,
    greedy: true,
  },
};
