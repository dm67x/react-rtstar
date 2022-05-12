const { build } = require('esbuild')
const { dependencies, peerDependencies } = require('./package.json')
const { Generator } = require('npm-dts')

const deps = dependencies || {}
const peer = peerDependencies || {}

const shared = {
    entryPoints: ['rtstar.tsx'],
    bundle: true,
    minify: true,
    loader: {
        '.ts': 'tsx',
    },
    external: Object.keys(deps).concat(Object.keys(peer)),
}

build({
    ...shared,
    outfile: 'dist/index.js',
})

build({
    ...shared,
    outfile: 'dist/index.esm.js',
    format: 'esm',
})

new Generator({
    entry: 'rtstar.tsx',
    output: 'dist/index.d.ts',
}).generate()