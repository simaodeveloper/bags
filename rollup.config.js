import babel from 'rollup-plugin-babel'
import del from 'rollup-plugin-delete'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: pkg.name
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
