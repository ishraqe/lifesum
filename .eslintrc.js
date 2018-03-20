module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-boolean-value": ["always"],
        "no-prototype-builtins": ["off"],
        "max-len": ["off", { "code": 200 }],
        "no-nested-ternary": "warn",
        "indent": ["off"],
        "react/jsx-indent": [4, "tab"],
        "react/jsx-indent-props": [4, "tab"],
        "function-paren-newline": ["off"]
    }
};