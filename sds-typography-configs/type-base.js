const plugin = require('tailwindcss/plugin');

const type = 
    plugin(function({ addBase, config }) {
        addBase({
          'h1': { fontSize: '60px' },
          'h2': { fontSize: config('theme.fontSize.xl') },
          'h3': { fontSize: config('theme.fontSize.lg') },
        })
    });

module.exports = type; 