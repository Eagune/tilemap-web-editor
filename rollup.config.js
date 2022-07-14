import path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']
const name = 'TilemapWebEditor'

const input = path.resolve(__dirname, './src/index.js')
const plugins = [
  resolve({
    browser: true,
    mainFields: ['module', 'main'],
    extensions,
  }),
  commonjs(),
]

export default [
  {
    input,
    output: {
      sourcemap: true,
      file: pkg.module,
      format: 'esm',
      name,
    },
    plugins
  },
  {
    input,
    output: {
      sourcemap: true,
      file: pkg.main,
      format: 'umd',
      name,
    },
    plugins
  }
]