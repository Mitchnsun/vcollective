// babel.config.js
module.exports = {
  presets: [
    "next/babel",
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};