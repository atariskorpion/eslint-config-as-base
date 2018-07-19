module.export = {
  "rules": {
    "no-multiple-empty-lines": [2, {"max": 2}],
    "no-mixed-spaces-and-tabs": 2,
    "no-trailing-spaces": 2,
    "linebreak-style": [ process.platform === "win32" ? 0 : 2, "unix" ],
    "indent": [2, 2, {
      "SwitchCase": 1,
      "CallExpression": {"arguments": 2},
      "MemberExpression": 2
    }],
    "key-spacing": [2, {
      "beforeColon": false
    }]
  }
}
