import path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: path.resolve(__dirname, './src/index.js'),
  output: {
    sourcemap: true,
    file: 'dist/index.js',
    format: 'esm',
    name: 'tilemapWebEditor'
  },
  plugins: [
    resolve({
      browser: true,
      mainFields: ['module', 'main'],
      extensions,
    }),
    commonjs(),
  ]
}