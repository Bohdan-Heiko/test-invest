module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"]
  }
}

// const parser = require('@babel/parser');

// const code = 'const answer = 42';
// const ast = parser.parse(code, {
//   // Опции парсера (необязательно)
//   sourceType: 'module', // 'module' для ES6 модулей, 'script' для обычного скрипта
//   plugins: [
//     'jsx', // Поддержка JSX
//     'typescript', // Поддержка TypeScript
//   ],
// });
