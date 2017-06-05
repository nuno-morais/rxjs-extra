const compiler = require('google-closure-compiler-js').compile;
const fs = require('fs');
const source = fs.readFileSync('dist/es5/bundles/RxPlus.js', 'utf8');

const compilerFlags = {
    jsCode: [{src: source}],
    languageIn: 'ES5',
    createSourceMap: true,
};

const output = compiler(compilerFlags);

fs.writeFileSync('dist/es5/bundles/RxPlus.min.js', output.compiledCode, 'utf8');
fs.writeFileSync('dist/es5/bundles/RxPlus.min.js.map', output.sourceMap, 'utf8');
