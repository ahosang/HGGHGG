const path = require('path');

module.exports = {
    entry: 'dist/index.js',
    output: {
        filename: 'main.js',
        path: `${__dirname}/dist`,
    },
};