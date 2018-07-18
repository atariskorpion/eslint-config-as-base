module.export = {
  "rules": {
    "quotes": [2, "single", {
      "avoidEscape": true,
      "allowTemplateLiterals": true
    }],
    "semi": 2,
    "no-extra-semi": 2,
    "comma-style": [2, "last"],
    "wrap-iife": [2, "inside"],
    "spaced-comment": [2, "always", {
      "markers": ["*"]
    }],
    "eqeqeq": [2],
    "arrow-body-style": [2, "as-needed"],
    "accessor-pairs": [2, {
      "getWithoutSet": false,
      "setWithoutGet": false
    }],
    "brace-style": [2, "1tbs", {"allowSingleLine": true}],
    "curly": [2, "multi-or-nest", "consistent"],
    "new-parens": 2,
    "func-call-spacing": 2,
    "arrow-parens": [2, "as-needed"],
    "prefer-const": 2,
    "quote-props": [2, "consistent"]
  }
}
