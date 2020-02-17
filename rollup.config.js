import typescript from 'rollup-plugin-typescript2'
import sass from 'rollup-plugin-sass'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import localResolve from 'rollup-plugin-local-resolve'
import json from '@rollup/plugin-json'

import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: '**/__tests__/**',
      clean: true
    }),
    commonjs({
      include: /node_modules/,
      exclude: ['**/*.stories.js'],
      namedExports: {
        'node_modules/react/react.js': [
          'Children',
          'Component',
          'PropTypes',
          'createElement'
        ],
        'node_modules/react-dom/index.js': ['render'],
        'node_modules/react-is/index.js': [
          'isElement',
          'isValidElementType',
          'ForwardRef',
          'isFragment',
        ],
        'node_modules/prop-types/index.js': [
          'array',
          'bool',
          'func',
          'number',
          'object',
          'string',
          'symbol',
          'any',
          'arrayOf',
          'element',
          'elementType',
          'instanceOf',
          'node',
          'objectOf',
          'oneOf',
          'oneOfType',
          'shape',
          'exact',
        ],
        'node_modules/scheduler/index.js': ['unstable_runWithPriority', 'LowPriority'],
      }
    }),
    sass({ insert: true }),
    json({ include: 'node_modules/**' }),
    localResolve(),
    resolve({ dedupe: ['react', 'react-dom'], browser: true }),
  ]
}