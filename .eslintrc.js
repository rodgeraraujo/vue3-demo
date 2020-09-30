module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'vue/no-unused-vars': 'error',
  },
};
