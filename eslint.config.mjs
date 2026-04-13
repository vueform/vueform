import pluginVue from "eslint-plugin-vue";

export default [
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "build/**",
      "themes/**",
      "locales/**",
      "scripts/**",
      "api/**",
      "types/**",
      "nuxt/**",
      "tests/**",
      "coverage/**",
      "*.config.js",
      "babel.config.js",
      "tailwind.js",
      "tailwind-prefixer.js",
      "postcss.config.js",
      "vite.js",
      "element.mjs",
      "plugin.mjs",
    ],
  },
  ...pluginVue.configs["flat/essential"],
  {
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-undef": "off",
      "vue/multi-word-component-names": "off",
      "vue/return-in-computed-property": "warn",
      "vue/no-ref-as-operand": "warn",
      "vue/no-dupe-keys": "warn",
      "vue/valid-next-tick": "warn",
      "vue/no-reserved-keys": "warn",
    },
  },
];
