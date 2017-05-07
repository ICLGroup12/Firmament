//import resolve from 'rollup-plugin-node-resolve';
//import common from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'assets/js/main.js',
  format: 'iife',
  dest: 'bundle.js',
  sourceMap: 'inline',
  plugins: [
    babel({
      exclude: ['node_modules/**', 'assets/js/lib/**']
    }),
  ],
};
