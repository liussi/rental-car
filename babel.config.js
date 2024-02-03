module.exports = {
  presets: [
    "@babel/preset-env", // Додає правила для перетворення сучасного JavaScript
    "@babel/preset-react", // Додає правила для перетворення JSX
  ],
  plugins: [
    "@babel/plugin-transform-private-property-in-object", // Додаткові плагіни, які ви використовуєте
  ],
};
