// html-validate config for CI (.github/workflows/ci.yml).
export default {
  extends: ["html-validate:recommended"],
  rules: {
    // Stylistic: lowercase <!doctype html> is valid HTML5; keep the pages as written.
    "doctype-style": "off",
  },
};
