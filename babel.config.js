module.exports = {
  "presets": [
    [
      "@babel/preset-env", { 
        "modules": false,
        "targets": {
          "esmodules": true,
        },
      }
    ]
  ],
  "env": {
    "test": {
      "presets": [
        [
          "@babel/preset-env", {
            "targets": { "node": "current" }
          }
        ]
      ]
    }
  },
}