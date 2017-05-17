import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'frontend/js/main.js',
  format: 'iife',
  dest: 'target/bundle.js',
  sourceMap: 'inline',
  plugins: [
		resolve({jsnext: true, main: true}),
    commonjs(),
    babel({
      exclude: ['node_modules/**', 'frontend/assets/**']
    }),
  ],
};
