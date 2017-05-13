import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'assets/js/main.js',
  format: 'iife',
  dest: 'bundle.js',
  sourceMap: 'inline',
  plugins: [
		resolve({jsnext: true, main: true}),
    commonjs({
      namedExports: {
        'node_modules/jquery/dist/jquery.min.js': [ 'jquery' ],
        'node_modules/bootstrap/dist/js/bootstrap.min.js' : ['bootstrap'],
      }
    }),
    babel({
      exclude: ['node_modules/**', 'assets/js/lib/**']
    }),
  ],
};
