module.export = {
  "rules": {
    "space-infix-ops": 2,
    "space-in-parens": [2, "never"],
    "space-before-function-paren": [2, "never"],
    "no-whitespace-before-property": 2,
    "keyword-spacing": [2, {
      "overrides": {
        "if": {"after": true},
        "else": {"after": true},
        "for": {"after": true},
        "while": {"after": true},
        "do": {"after": true},
        "switch": {"after": true},
        "return": {"after": true}
      }
    }],
    "arrow-spacing": [2, {
      "after": true,
      "before": true
    }]
  }
}
