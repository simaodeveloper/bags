import babel from 'rollup-plugin-babel'
import del from 'rollup-plugin-delete'

import pkg from './package.json'

const name = pkg.name.replace(/^(\w)|-(\w)/g, match => match.toUpperCase().replace('-', ''))

console.log(name)

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    del({
      targets: 'lib/*'
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
