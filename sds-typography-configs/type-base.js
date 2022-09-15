import {addBase, config} from 'tailwindcss';

const type = 
    plugin(function({ addBase, config }) {
        addBase({
          'h1': { fontSize: '30px' },
          'h2': { fontSize: config('theme.fontSize.xl') },
          'h3': { fontSize: config('theme.fontSize.lg') },
        })
    });

module.exports = type; 