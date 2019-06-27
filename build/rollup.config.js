// rollup.config.js
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import {terser} from 'rollup-plugin-terser'
import minimist from 'minimist'

const argv = minimist(process.argv.slice(2))

const config = {
  input: 'src/index.js',
  output: {
    name: 'DirectMail',
    exports: 'named'
  },
  plugins: [
    commonjs(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    })
  ]
}

// Only minify browser (iife) version
if (argv.format === 'iife') {
  config.plugins.push(terser())
}

export default config
